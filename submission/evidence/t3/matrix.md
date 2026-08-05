# Task 8 / Task 3 — Cross-platform compatibility matrix (Scenario D)

| Field | Value |
|---|---|
| Student | Huỳnh Gia Âu · MSSV `23127153` · overlay `23127153@clc.fitus.edu.vn` |
| SUT | https://prod-dev.ems-fitus.cloud/ |
| Screens | **D1** `/complaints/new` · **D2** `/complaints` · **D3** `/dashboard/admin/complaints` |
| Date | 2026-08-06 |
| Evidence root | `submission/evidence/t3/{D1,D2,D3}/` |

## Method

### BrowserStack status (blocker recorded)

1. Public site **https://www.browserstack.com/** is reachable (marketing homepage fetched successfully).
2. Cursor Browser MCP in this agent session **cannot hold a usable tab** (`browser_tabs` creates `about:blank` that evaporates; `browser_navigate` returns `No browser tab available`). Interactive Live login was **not** possible.
3. No BrowserStack credentials / trial session were available to this agent. **No authenticated real-device BrowserStack session was obtained.** No cell below is labelled as BrowserStack evidence.
4. Remaining real-device cells are documented for later execution in `submission/evidence/t3/browserstack_runbook.md`.

### What was executed (honest local evidence)

| Item | Detail |
|---|---|
| Tool | Local **Google Chrome** driven by **Puppeteer CDP** (`Emulation.setDeviceMetricsOverride` + `Emulation.setUserAgentOverride`) |
| Script | `submission/evidence/t3/_capture_compat.mjs` (run report: `_capture_report.json`) |
| Overlay | Fixed-position div injected via page evaluate before each PNG: MSSV email, URL, cell id, emulated OS/browser/device class, viewport, and method disclaimer; removed after capture |
| Label | Every executed cell Notes column states **local browser + device-metrics emulation (not a real device)** |
| Auth D3 | Logged in as `admin@gmail.com` (known course admin). All D3 cells reached `/dashboard/admin/complaints`. |
| Auth D1/D2 | Same Chrome cookie jar after admin login. Guest-register attempt did **not** create a separate student session (register form never filled — page already on dashboard). D1/D2 URLs were reachable under that session and show the create/list Support UI. **Not** a BrowserStack student device run. |
| Pass criteria | Target screen URL reached + no `documentElement` horizontal overflow (`scrollWidth ≤ clientWidth + 2`) |
| Fail criteria | Target reached but horizontal overflow (or other layout break) observed |

### Planned cell skeleton (reuse per screen)

| Cell ID | OS + version | Browser + version | Device class | Device / viewport |
|---|---|---|---|---|
| C1 | Windows 11 | Chrome 128 | desktop | Desktop 1440×900 |
| C2 | macOS Sonoma 14 | Safari 17 | desktop | Desktop 1440×900 |
| C3 | Android 14 | Samsung Internet 26 | phone | Galaxy S23 · 412×915 |
| C4 | Windows 11 | Edge 128 | tablet | Surface-like · 1024×768 |
| C5 | macOS Sonoma 14 | Firefox 129 | tablet | iPad-like · 820×1180 |

---

## Coverage proof (per screen)

For each screen, the five cells above cover:

| Dimension | Required | Covered by cells |
|---|---|---|
| OS | Windows, macOS, Android | C1/C4 · C2/C5 · C3 |
| Browser | Chrome, Firefox, Safari, Edge, Samsung Internet | C1 · C5 · C2 · C4 · C3 |
| Device class | desktop, tablet, phone | C1/C2 · C4/C5 · C3 |
| Cell count | ≥ 5 | 5 |

---

## Matrix — D1 Create support request

URL: https://prod-dev.ems-fitus.cloud/complaints/new

| Cell ID | Screen | OS + version | Browser + version | Device class | Device/viewport | Result Pass/Fail | Notes | Screenshot |
|---|---|---|---|---|---|---|---|---|
| D1-C1 | D1 | Windows 11 | Chrome 128 | desktop | Desktop 1440×900 | Pass | local browser + device-metrics emulation (not a real device). Session shared Chrome jar after admin login; target `/complaints/new` reached; no horizontal overflow. | `submission/evidence/t3/D1/C1.png` |
| D1-C2 | D1 | macOS Sonoma 14 | Safari 17 | desktop | Desktop 1440×900 | Pass | local browser + device-metrics emulation (not a real device). UA overridden to Safari 17; layout Pass. | `submission/evidence/t3/D1/C2.png` |
| D1-C3 | D1 | Android 14 | Samsung Internet 26 | phone | Galaxy S23 · 412×915 | Pass | local browser + device-metrics emulation (not a real device). Phone viewport; form stacks; no horizontal overflow. | `submission/evidence/t3/D1/C3.png` |
| D1-C4 | D1 | Windows 11 | Edge 128 | tablet | Surface-like · 1024×768 | Pass | local browser + device-metrics emulation (not a real device). Tablet viewport Pass. | `submission/evidence/t3/D1/C4.png` |
| D1-C5 | D1 | macOS Sonoma 14 | Firefox 129 | tablet | iPad-like · 820×1180 | Pass | local browser + device-metrics emulation (not a real device). Firefox UA + tablet metrics Pass. | `submission/evidence/t3/D1/C5.png` |

**D1 counts:** Pass **5** · Fail **0** · Not executed **0**

---

## Matrix — D2 My Support Requests

URL: https://prod-dev.ems-fitus.cloud/complaints (detail `/complaints/97` not re-captured per cell; list screen used for matrix)

| Cell ID | Screen | OS + version | Browser + version | Device class | Device/viewport | Result Pass/Fail | Notes | Screenshot |
|---|---|---|---|---|---|---|---|---|
| D2-C1 | D2 | Windows 11 | Chrome 128 | desktop | Desktop 1440×900 | Pass | local browser + device-metrics emulation (not a real device). List reached; no horizontal overflow. | `submission/evidence/t3/D2/C1.png` |
| D2-C2 | D2 | macOS Sonoma 14 | Safari 17 | desktop | Desktop 1440×900 | Pass | local browser + device-metrics emulation (not a real device). | `submission/evidence/t3/D2/C2.png` |
| D2-C3 | D2 | Android 14 | Samsung Internet 26 | phone | Galaxy S23 · 412×915 | Pass | local browser + device-metrics emulation (not a real device). Cards stack on phone; no overflow. | `submission/evidence/t3/D2/C3.png` |
| D2-C4 | D2 | Windows 11 | Edge 128 | tablet | Surface-like · 1024×768 | Pass | local browser + device-metrics emulation (not a real device). | `submission/evidence/t3/D2/C4.png` |
| D2-C5 | D2 | macOS Sonoma 14 | Firefox 129 | tablet | iPad-like · 820×1180 | Pass | local browser + device-metrics emulation (not a real device). | `submission/evidence/t3/D2/C5.png` |

**D2 counts:** Pass **5** · Fail **0** · Not executed **0**

---

## Matrix — D3 Admin Support Request Management

URL: https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints · Account `admin@gmail.com`

| Cell ID | Screen | OS + version | Browser + version | Device class | Device/viewport | Result Pass/Fail | Notes | Screenshot |
|---|---|---|---|---|---|---|---|---|
| D3-C1 | D3 | Windows 11 | Chrome 128 | desktop | Desktop 1440×900 | Pass | local browser + device-metrics emulation (not a real device). Admin session; list usable. | `submission/evidence/t3/D3/C1.png` |
| D3-C2 | D3 | macOS Sonoma 14 | Safari 17 | desktop | Desktop 1440×900 | Pass | local browser + device-metrics emulation (not a real device). | `submission/evidence/t3/D3/C2.png` |
| D3-C3 | D3 | Android 14 | Samsung Internet 26 | phone | Galaxy S23 · 412×915 | **Fail** | local browser + device-metrics emulation (not a real device). **Horizontal overflow** `scrollWidth=516 > clientWidth=412`; admin sidebar remains expanded and crowds content; Export / filters clipped. See XP-001. | `submission/evidence/t3/D3/C3.png` |
| D3-C4 | D3 | Windows 11 | Edge 128 | tablet | Surface-like · 1024×768 | Pass | local browser + device-metrics emulation (not a real device). | `submission/evidence/t3/D3/C4.png` |
| D3-C5 | D3 | macOS Sonoma 14 | Firefox 129 | tablet | iPad-like · 820×1180 | Pass | local browser + device-metrics emulation (not a real device). | `submission/evidence/t3/D3/C5.png` |

**D3 counts:** Pass **4** · Fail **1** · Not executed **0**

---

## Overall execution summary

| Screen | Cells | Pass | Fail | Not executed |
|---|---:|---:|---:|---:|
| D1 | 5 | 5 | 0 | 0 |
| D2 | 5 | 5 | 0 | 0 |
| D3 | 5 | 4 | 1 | 0 |
| **Total** | **15** | **14** | **1** | **0** |

## Gap to close (student / BrowserStack)

All 15 planned coverage cells have **local emulation** evidence only. To satisfy a “real device / BrowserStack” bar:

1. Follow `browserstack_runbook.md` for each of D1-C1…D3-C5 on real BrowserStack OS/browser/device combinations.
2. Prefer a **student** session for D1/D2 (OAuth or guest) and **admin** for D3.
3. Replace or supplement PNGs under submission/evidence/t3/D1|D2|D3/C1…C5.png and flip Method notes from “local emulation” to “BrowserStack Live” once captured.
4. Re-check D3-C3 on a real Android phone (Samsung Internet or Chrome) to confirm XP-001 outside emulation.
