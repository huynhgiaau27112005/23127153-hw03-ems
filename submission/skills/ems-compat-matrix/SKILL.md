---
name: ems-compat-matrix
description: >-
  Generate and execute a minimum-coverage cross-browser/cross-platform matrix
  for EMS Scenario D screens D1/D2/D3 (≥5 cells per screen; 3 OS × 5 browsers ×
  3 device classes). Use for HW03 Task 3 / BrowserStack compatibility runs.
---

# EMS Compatibility Matrix

Build and run a compatibility matrix for one or all Scenario D screens that meets HW §6 Task 3 minimum coverage — without requiring the full 3×5×3 cartesian product.

## Binding

| Field | Value |
| --- | --- |
| Student | `23127153` |
| Overlay username | `23127153@clc.fitus.edu.vn` |
| Screens | **D1**, **D2**, **D3** (each screen gets its own matrix) |
| Evidence root | `submission/evidence/t3/{screen}/` |
| Tool | BrowserStack (preferred) or equivalent cloud / real devices |

## Coverage rules (per screen)

For **each** of D1, D2, D3 the matrix must:

1. Include **≥ 5 cells** (OS × browser × device combinations actually tested).
2. Exercise **≥ 1 of each of 3 OS** — e.g. Windows, macOS, Android (or iOS).
3. Exercise **≥ 1 of each of 5 browsers** — Chrome, Firefox, Safari, Edge, and Opera (or Samsung Internet on mobile).
4. Exercise **≥ 1 of each of 3 device classes** — desktop, tablet, phone.

You do **not** need all 45 combinations. You **do** need every OS, every browser, and every device class to appear at least once **for that screen**.

## Suggested ≥5-cell skeleton (reuse per screen)

Adjust BrowserStack device names as available; keep the coverage tags.

| Cell | OS | Browser | Device class | Example target |
| --- | --- | --- | --- | --- |
| C1 | Windows | Chrome | desktop | Windows 11 · Chrome · Desktop |
| C2 | macOS | Safari | desktop | macOS Sonoma · Safari · Desktop |
| C3 | Android | Samsung Internet | phone | Pixel / Galaxy · Samsung Internet · Phone |
| C4 | Windows | Edge | tablet | Windows · Edge · Tablet viewport / Surface |
| C5 | macOS | Firefox | tablet | macOS · Firefox · iPad / tablet |
| C6* | Android | Opera | phone | Android · Opera · Phone |

\*C6 optional if C1–C5 already cover all 5 browsers; if Opera/Samsung Internet is missing from C1–C5, add a cell so all five browsers appear.

**Coverage check before execute:** union of cells must include {3 OS} ∪ {5 browsers} ∪ {3 device classes}. If a dimension is missing, add cells until it is covered (≥5 total).

## Procedure

1. Accept screen ID `D1` | `D2` | `D3` (or run all three sequentially).
2. Generate the cell list for that screen (≥5) meeting the coverage rules; write it to `submission/evidence/t3/{screen}_matrix.md`.
3. For each cell:
   - Open EMS on the target OS/browser/device (BrowserStack).
   - Navigate to the screen under test.
   - Capture a screenshot showing **all** of: EMS URL, OS/browser/device identity, and overlay `23127153@clc.fitus.edu.vn`.
   - Save as `evidence/t3/{screen}/{cell-id}.png` (e.g. `evidence/t3/D1/C1.png`).
   - Mark **Pass** or **Fail**. On Fail, add a short defect note (overflow, overlap, broken layout, unreadable text, non-responsive control, etc.) and a Findings Log entry later.
4. Fill the matrix table:

| Cell | OS | Browser | Device class | Result | Screenshot | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| C1 | Windows | Chrome | desktop | Pass/Fail | `evidence/t3/D1/C1.png` | |

5. After all cells: verify coverage counts (OS≥3 distinct, browsers≥5 distinct, device classes≥3 distinct, cells≥5).

## Output checklist

- [ ] ≥5 cells per screen
- [ ] 3 OS × 5 browsers × 3 device classes each represented ≥ once per screen
- [ ] Every cell has Pass/Fail + screenshot with username overlay + EMS URL + environment identity
- [ ] Fails have defect notes
