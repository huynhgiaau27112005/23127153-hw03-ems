# BrowserStack runbook — close remaining real-device cells (Scenario D)

Use this when a BrowserStack trial/account is available. Goal: replace or supplement the **local emulation** PNGs in `submission/evidence/t3/` with real Live captures for the same 15 cells (5 per screen).

## Prerequisites

- BrowserStack account (Free trial is enough for Live).
- EMS accounts:
  - **D1 / D2 (student UI):** student OAuth or guest account that can open `/complaints` and `/complaints/new`.
  - **D3 (admin):** `admin@gmail.com` / `Admin@123`.
- Overlay text to show on every shot: `23127153@clc.fitus.edu.vn`
- File naming: `submission/evidence/t3/{screen}/{CellID}.png`  
  Examples: `t3/D1/C1.png`, `t3/D3/C3.png` (CellID = `C1`…`C5` as in `matrix.md`).

## Cell targets (match matrix.md)

| CellID | OS | Browser | Device class | Suggested BrowserStack target |
|---|---|---|---|---|
| C1 | Windows 11 | Chrome (latest) | desktop | Windows 11 · Chrome · Desktop |
| C2 | macOS Sonoma (or Sequoia) | Safari | desktop | macOS Sonoma · Safari · Desktop |
| C3 | Android 14+ | Samsung Internet (or Chrome if SI unavailable) | phone | Galaxy S23 / Pixel · Samsung Internet · Phone |
| C4 | Windows 11 | Edge | tablet | Windows 11 · Edge · Tablet / Surface viewport |
| C5 | macOS | Firefox | tablet | macOS · Firefox · iPad / large tablet |

Repeat **C1–C5** for screens **D1**, **D2**, **D3**.

## Step-by-step (once per cell)

### 1. Sign in to BrowserStack

1. Open https://www.browserstack.com/ → **Sign in** (or Start free trial).
2. Open product **Live** (web, real browsers / real devices).

### 2. Choose the environment

1. Pick **OS + version** from the cell row.
2. Pick **Browser + version** (or Samsung Internet on Android).
3. Pick **Desktop / Tablet / Phone** matching the device class.
4. Start the Live session; wait until the remote browser is ready.

### 3. Open EMS and authenticate

1. In the remote browser address bar, open the screen URL:

| Screen | URL |
|---|---|
| D1 | https://prod-dev.ems-fitus.cloud/complaints/new |
| D2 | https://prod-dev.ems-fitus.cloud/complaints |
| D3 | https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints |

2. If redirected to `/login`:
   - D1/D2 → log in as **student/guest**.
   - D3 → log in as **admin@gmail.com**.
3. Confirm the correct screen chrome is visible (create form / my requests list / admin complaints).

### 4. Apply identity overlay

Before capturing, ensure **all** of the following are visible in the frame:

1. EMS URL (address bar and/or BrowserStack info chrome).
2. OS / browser / device identity (BrowserStack session chrome usually shows this).
3. Overlay string `23127153@clc.fitus.edu.vn` — use any of:
   - BrowserStack **Annotate / Text** tool on the screenshot, or
   - DevTools console paste:

```js
(() => {
  const id = 'hw03-compat-overlay';
  document.getElementById(id)?.remove();
  const el = document.createElement('div');
  el.id = id;
  el.style.cssText = 'position:fixed;top:8px;left:8px;z-index:2147483647;background:rgba(0,0,0,.82);color:#fff;font:12px/1.4 monospace;padding:10px 12px;border-radius:6px;max-width:92vw;pointer-events:none;white-space:pre-wrap';
  el.textContent = [
    '23127153@clc.fitus.edu.vn',
    'URL: ' + location.href,
    'Screen: D? · Cell: C?',
    'BrowserStack Live · real device/browser',
  ].join('\n');
  document.documentElement.appendChild(el);
})();
```

(Replace `D?` / `C?` with the current screen and cell.)

### 5. Capture and save

1. Use BrowserStack **Screenshot** (or OS screenshot of the Live window including BrowserStack chrome).
2. Save/export as PNG to:

```text
submission/evidence/t3/{D1|D2|D3}/{C1|C2|C3|C4|C5}.png
```

3. Overwrite the local-emulation file **or** keep both by renaming the old file to `{CellID}_local-emulation.png` and placing the BrowserStack shot at `{CellID}.png`.
4. Remove the overlay div if you injected it (`document.getElementById('hw03-compat-overlay')?.remove()`).

### 6. Mark result in matrix.md

1. **Pass** — layout usable, no broken overflow/overlap that blocks the task.
2. **Fail** — note defect (overflow, clipped CTA, unreadable text, etc.) and add an `XP-*` row in `xp_findings_rows.md` / Findings Log.
3. Update the cell **Notes** to say `BrowserStack Live (real device/browser)` and delete the “local emulation” disclaimer for that cell.
4. Update the **Method** section date and BrowserStack status.

## Suggested capture order (≈15–25 minutes)

1. Start one **Windows 11 · Chrome** desktop session → D1-C1, D2-C1 (student login once) → switch account → D3-C1 (admin).
2. **macOS · Safari** desktop → D1-C2, D2-C2, D3-C2.
3. **Android phone · Samsung Internet** → D1-C3, D2-C3, D3-C3 (re-verify XP-001).
4. **Windows · Edge** tablet → D1-C4, D2-C4, D3-C4.
5. **macOS · Firefox** tablet → D1-C5, D2-C5, D3-C5.

## Checklist before stopping

- [ ] 5 PNGs per screen under `t3/D1`, `t3/D2`, `t3/D3`
- [ ] Each PNG shows MSSV overlay + URL + OS/browser identity
- [ ] Coverage still holds (3 OS × 5 browsers × 3 device classes per screen)
- [ ] `matrix.md` Results/Notes/Method updated
- [ ] Any Fail has an `XP-*` findings row
