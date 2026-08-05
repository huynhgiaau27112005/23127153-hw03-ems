/**
 * Local Chrome CDP capture for HW03 Task 8 compat matrix.
 * Uses Emulation.setDeviceMetricsOverride + Emulation.setUserAgentOverride.
 * Labels evidence as local emulation — NOT BrowserStack / real devices.
 */
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const ROOT = '/Users/auhuynh/Documents/College/hw03-testing/submission/evidence/t3';
const OVERLAY_EMAIL = '23127153@clc.fitus.edu.vn';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const CELLS = [
  {
    id: 'C1',
    os: 'Windows 11',
    browser: 'Chrome 128',
    deviceClass: 'desktop',
    device: 'Desktop 1440×900',
    width: 1440,
    height: 900,
    mobile: false,
    dpr: 1,
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  },
  {
    id: 'C2',
    os: 'macOS Sonoma 14',
    browser: 'Safari 17',
    deviceClass: 'desktop',
    device: 'Desktop 1440×900',
    width: 1440,
    height: 900,
    mobile: false,
    dpr: 2,
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
  },
  {
    id: 'C3',
    os: 'Android 14',
    browser: 'Samsung Internet 26',
    deviceClass: 'phone',
    device: 'Galaxy S23 · 412×915',
    width: 412,
    height: 915,
    mobile: true,
    dpr: 3,
    ua: 'Mozilla/5.0 (Linux; Android 14; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36',
  },
  {
    id: 'C4',
    os: 'Windows 11',
    browser: 'Edge 128',
    deviceClass: 'tablet',
    device: 'Surface-like tablet 1024×768',
    width: 1024,
    height: 768,
    mobile: false,
    dpr: 1.5,
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
  },
  {
    id: 'C5',
    os: 'macOS Sonoma 14',
    browser: 'Firefox 129',
    deviceClass: 'tablet',
    device: 'iPad-like tablet 820×1180',
    width: 820,
    height: 1180,
    mobile: false,
    dpr: 2,
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.0; rv:129.0) Gecko/20100101 Firefox/129.0',
  },
];

const SCREENS = {
  D1: { url: 'https://prod-dev.ems-fitus.cloud/complaints/new', need: 'student' },
  D2: { url: 'https://prod-dev.ems-fitus.cloud/complaints', need: 'student' },
  D3: { url: 'https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints', need: 'admin' },
};

async function injectOverlay(page, cell, screenId) {
  const url = page.url();
  await page.evaluate(
    ({ email, url, cell, screenId }) => {
      const old = document.getElementById('hw03-compat-overlay');
      if (old) old.remove();
      const el = document.createElement('div');
      el.id = 'hw03-compat-overlay';
      el.style.cssText = [
        'position:fixed',
        'top:8px',
        'left:8px',
        'z-index:2147483647',
        'background:rgba(0,0,0,0.82)',
        'color:#fff',
        'font:12px/1.4 ui-monospace,Menlo,monospace',
        'padding:10px 12px',
        'border-radius:6px',
        'max-width:min(92vw,520px)',
        'box-shadow:0 2px 12px rgba(0,0,0,.35)',
        'pointer-events:none',
        'white-space:pre-wrap',
      ].join(';');
      el.textContent = [
        email,
        `URL: ${url}`,
        `Screen: ${screenId} · Cell: ${cell.id}`,
        `Emulated: ${cell.os} · ${cell.browser} · ${cell.deviceClass}`,
        `Viewport: ${cell.device}`,
        'METHOD: local browser + device-metrics emulation (not a real device)',
      ].join('\n');
      document.documentElement.appendChild(el);
    },
    { email: OVERLAY_EMAIL, url, cell, screenId }
  );
}

async function removeOverlay(page) {
  await page.evaluate(() => {
    const el = document.getElementById('hw03-compat-overlay');
    if (el) el.remove();
  });
}

async function applyEmulation(client, cell) {
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: cell.width,
    height: cell.height,
    deviceScaleFactor: cell.dpr,
    mobile: cell.mobile,
  });
  await client.send('Emulation.setUserAgentOverride', {
    userAgent: cell.ua,
  });
}

async function loginAdmin(page) {
  await page.goto('https://prod-dev.ems-fitus.cloud/login', {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });
  // HeroUI / Next form — fill email & password
  const emailSel = 'input[type="email"], input[name="email"], input[placeholder*="Email" i]';
  const passSel = 'input[type="password"]';
  await page.waitForSelector(emailSel, { timeout: 20000 });
  await page.click(emailSel, { clickCount: 3 });
  await page.type(emailSel, 'admin@gmail.com', { delay: 20 });
  await page.click(passSel, { clickCount: 3 });
  await page.type(passSel, 'Admin@123', { delay: 20 });
  // Submit
  const loginBtn = await page.$('button[type="submit"]');
  if (loginBtn) {
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }).catch(() => {}),
      loginBtn.click(),
    ]);
  } else {
    await page.keyboard.press('Enter');
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }).catch(() => {});
  }
  await new Promise((r) => setTimeout(r, 2000));
  return {
    url: page.url(),
    title: await page.title(),
    ok: !page.url().includes('/login'),
  };
}

async function tryGuestRegister(page) {
  const email = `hw03.t3.${Date.now()}@mailinator.com`;
  await page.goto('https://prod-dev.ems-fitus.cloud/register', {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });
  const fields = [
    [/first.?name/i, 'Gia'],
    [/last.?name/i, 'Au'],
    [/email/i, email],
    [/password/i, 'Hw03Test!234'],
  ];
  // Best-effort fill by labels
  const inputs = await page.$$('input');
  const meta = [];
  for (const input of inputs) {
    const type = await input.evaluate((el) => el.type);
    const name = await input.evaluate((el) => el.name || el.id || el.placeholder || '');
    meta.push({ type, name });
  }
  // Fill sequentially common register fields
  const textInputs = await page.$$('input:not([type="hidden"])');
  if (textInputs.length >= 4) {
    // Heuristic: first, last, email, password, confirm
    await textInputs[0].click({ clickCount: 3 });
    await textInputs[0].type('Gia', { delay: 15 });
    await textInputs[1].click({ clickCount: 3 });
    await textInputs[1].type('Au', { delay: 15 });
    await textInputs[2].click({ clickCount: 3 });
    await textInputs[2].type(email, { delay: 15 });
    await textInputs[3].click({ clickCount: 3 });
    await textInputs[3].type('Hw03Test!234', { delay: 15 });
    if (textInputs[4]) {
      await textInputs[4].click({ clickCount: 3 });
      await textInputs[4].type('Hw03Test!234', { delay: 15 });
    }
  }
  const submit = await page.$('button[type="submit"]');
  if (submit) await submit.click();
  await new Promise((r) => setTimeout(r, 3000));
  return { email, url: page.url(), title: await page.title(), inputs: meta };
}

async function captureCell(page, client, screenId, cell, authNote) {
  const screen = SCREENS[screenId];
  await applyEmulation(client, cell);
  await page.goto(screen.url, { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));

  const finalUrl = page.url();
  const title = await page.title();
  const onLogin = /\/login/i.test(finalUrl);
  const reached =
    screenId === 'D1'
      ? /complaints\/new/i.test(finalUrl)
      : screenId === 'D2'
        ? /\/complaints(\/|$|\?)/i.test(finalUrl) && !/login/i.test(finalUrl)
        : /admin\/complaints/i.test(finalUrl);

  await injectOverlay(page, cell, screenId);
  await new Promise((r) => setTimeout(r, 200));

  const outDir = path.join(ROOT, screenId);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${cell.id}.png`);
  await page.screenshot({ path: outPath, fullPage: false });
  await removeOverlay(page);

  let result = 'Pass';
  let notes = `local browser + device-metrics emulation (not a real device). Emulated ${cell.os} / ${cell.browser} / ${cell.deviceClass} @ ${cell.width}×${cell.height}. ${authNote}`;
  if (onLogin || !reached) {
    result = 'Not executed';
    notes =
      `Authentication blocked target screen — landed on ${finalUrl} (title: ${title}). ` +
      `Target was ${screen.url}. Screenshot shows reachable state only. ` +
      `local browser + device-metrics emulation (not a real device). ${authNote}`;
  }

  // Layout smoke: horizontal overflow
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflow: doc.scrollWidth > doc.clientWidth + 2,
    };
  });
  if (reached && overflow.overflow) {
    result = 'Fail';
    notes += ` Horizontal overflow detected (scrollWidth=${overflow.scrollWidth} > clientWidth=${overflow.clientWidth}).`;
  }

  return {
    cellId: `${screenId}-${cell.id}`,
    screen: screenId,
    cell: cell.id,
    result,
    notes,
    screenshot: `submission/evidence/t3/${screenId}/${cell.id}.png`,
    finalUrl,
    title,
    reached,
    overflow,
  };
}

const report = { adminLogin: null, guest: null, results: [], browserstack: 'not_used' };

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--window-size=1440,900', '--disable-gpu', '--no-first-run'],
  defaultViewport: null,
});

try {
  // --- Admin session for D3 ---
  const adminPage = await browser.newPage();
  const adminClient = await adminPage.createCDPSession();
  report.adminLogin = await loginAdmin(adminPage);
  console.log('ADMIN_LOGIN', JSON.stringify(report.adminLogin));

  for (const cell of CELLS) {
    const r = await captureCell(
      adminPage,
      adminClient,
      'D3',
      cell,
      report.adminLogin.ok
        ? 'Session: admin@gmail.com'
        : 'Admin login failed — capture may be login wall'
    );
    report.results.push(r);
    console.log('CAPTURED', r.cellId, r.result, r.finalUrl);
  }

  // --- Student/guest attempt for D1/D2 ---
  const studentPage = await browser.newPage();
  const studentClient = await studentPage.createCDPSession();
  report.guest = await tryGuestRegister(studentPage);
  console.log('GUEST_ATTEMPT', JSON.stringify({ email: report.guest.email, url: report.guest.url, title: report.guest.title }));

  // If still on register/OTP/login, D1/D2 will be login redirects — still capture honestly
  const studentAuthNote = /dashboard|complaints/i.test(report.guest.url)
    ? `Session: guest ${report.guest.email}`
    : `Student/guest auth not completed (landed ${report.guest.url}); captures show reachable state only`;

  for (const screenId of ['D1', 'D2']) {
    for (const cell of CELLS) {
      const r = await captureCell(studentPage, studentClient, screenId, cell, studentAuthNote);
      report.results.push(r);
      console.log('CAPTURED', r.cellId, r.result, r.finalUrl);
    }
  }
} finally {
  await browser.close();
}

fs.writeFileSync(path.join(ROOT, '_capture_report.json'), JSON.stringify(report, null, 2));
console.log('DONE', report.results.length, 'captures');
