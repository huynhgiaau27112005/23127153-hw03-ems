# Task 1B — Steps to reproduce (STR) appendix

Scenario **D** findings consolidated from D1/D2/D3 Fail rows. Full detail: `submission/Bug_Usability_Findings_Log.md`.

Accounts: student `23127153@student.hcmus.edu.vn` · admin `admin@gmail.com`.

| ID | Screen | Precondition | Steps | Result | Screenshot |
|---|---|---|---|---|---|
| F-001 | D1, D2, D3 | Logged in (student for D1/D2; admin for D3); UI locale as observed during Task 1B | 1. Open D1 `/complaints/new`, D2 `/complaints` (+ `/complaints/97`), D3 `/dashboard/admin/complaints` (+ `/…/97`). 2. Compare `document.title` / chrome strings with on-page H1 and field labels. | Mixed EN/VI: student pages use VI title + EN body; admin uses EN title/chrome leftovers + VI body (incl. EN “Internal note”). | `D1/IA01-06.png`; `D2/IA01-06.png`; `D3/IA01-06.png` |
| F-002 | D1 | Student logged in; create form open at `/complaints/new` | 1. Leave required fields empty. 2. Click **Submit**. 3. Note error placement and focus target. | One combined bottom alert listing missing fields; focus stays on **Submit**. | `D1/IA02-06.png`; `D1/IA02-07.png` |
| F-003 | D1, D2 | Student logged in | 1. Open `/complaints/new` and open nav drawer. 2. Open `/complaints/97` and open drawer. 3. Check **Support requests** active state. | No clear active/current highlight on create or detail. | `D1/IA03-01.png`; `D2/IA03-01.png` |
| F-004 | D1, D2, D3 | Student (D1/D2) or admin (D3) logged in | 1. Visit create/list/detail URLs for student support and admin support. 2. Look for breadcrumb under header. | No breadcrumb on any of the five views. | `D1/IA03-03.png`; `D2/IA03-03.png`; `D3/IA03-03.png` |
| F-005 | D1, D2 | Student logged in | 1. Open `/complaints/new` (show form actions). 2. Open list/detail under `/complaints`. 3. Observe Social FAB vs footer/CTAs. | FAB overlaps / competes with form and list chrome. | `D1/IA03-09.png`; `D2/IA03-09.png` |
| F-006 | D3 | Admin logged in; detail `/dashboard/admin/complaints/97` | 1. Open respond form. 2. Check **Nội dung phản hồi** and **Internal note** for required/optional markers or legend. | No `*` / required–optional legend before submit. | `D3/IA02-02.png` |
| F-007 | D3 | Admin logged in; list `/dashboard/admin/complaints` | 1. Set **Từ** = `2026-12-31`. 2. Set **Đến** = `2026-01-01`. 3. Apply/observe filter result. | Invalid range accepted; no range validation error (empty/no-match copy only). | `D3/IA02-08.png` |

Screenshot paths are relative to `submission/evidence/t1b/`.
