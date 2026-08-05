# Bug & Usability Findings Log — Scenario D (Support request lifecycle)

| Field | Value |
|---|---|
| Student | Huỳnh Gia Âu · MSSV `23127153` · `hgau23@clc.fitus.edu.vn` · Group 2 |
| Scenario | **D** — Support request lifecycle (D1 create · D2 my requests · D3 admin) |
| Source | Task 1B checklist execution (`submission/evidence/t1b/D{1,2,3}_execution.md`) |
| Checklist | `submission/group/GUI_Checklist.md` (40 executable items) |
| Date | 2026-08-05 (execution) / 2026-08-06 (log) |
| Google Form | Waived by lecturer — timestamp column fixed to `N/A — form waived by lecturer` |

## Summary

| Metric | Value |
|---|---:|
| Fail rows in Task 1B | **14** (D1: 6 · D2: 4 · D3: 4) |
| Consolidated findings (F-*) | **7** (3 Major · 4 Minor) |
| Usability findings (U-*) | **5** (2 at severity 3 · 3 at severity 2) |
| Cross-platform findings (XP-*) | **1** (Major — D3 phone overflow) |
| **Total findings in this log** | **13** |
| Unmapped Fail rows | **0** |

### By severity (F-* checklist bugs)

| Severity | Count | Finding IDs |
|---|---:|---|
| Critical | 0 | — |
| Major | 3 | F-001, F-002, F-007 |
| Minor | 4 | F-003, F-004, F-005, F-006 |
| Cosmetic | 0 | — |

### By screen (Fail-row coverage after consolidation)

| Screen | Fail rows covered | Finding IDs touching the screen |
|---|---:|---|
| D1 Create (`/complaints/new`) | 6 | F-001, F-002, F-003, F-004, F-005 |
| D2 My requests (`/complaints`, `/complaints/97`) | 4 | F-001, F-003, F-004, F-005 |
| D3 Admin (`/dashboard/admin/complaints`, `/…/97`) | 4 | F-001, F-004, F-006, F-007 |

Identical defects observed on multiple screens were merged into one finding; each merged finding lists **all** affected screens and **all** screenshot paths.

## Findings (F-*)

| ID | Type (Bug/Usability) | Screen(s) | Checklist ID(s) | Severity | Title | Steps to reproduce | Expected | Actual | Suggested fix | Screenshot(s) | Heuristic ref | Google Form timestamp |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| F-001 | Bug | D1, D2, D3 | IA01-06 | Major | Mixed EN/VI locale: `document.title` and chrome disagree with page copy | **Student (D1/D2):** Log in as `23127153@student.hcmus.edu.vn`. Open (1) https://prod-dev.ems-fitus.cloud/complaints/new ; (2) https://prod-dev.ems-fitus.cloud/complaints ; (3) https://prod-dev.ems-fitus.cloud/complaints/97. Compare browser tab title with on-page H1/labels. **Admin (D3):** Log in as `admin@gmail.com`. Open https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints and `/dashboard/admin/complaints/97`. Compare `document.title`, header chrome (“Switch language”, “Back to user dashboard”, “Notifications”, “Go to page”), and detail strings such as “Internal note” with the VI page body. | When a locale is active, labels, buttons, menu, badges, messages, placeholders, **and** `document.title` follow that locale with no mixed EN/VI on the same view (IA01-06). | **D1:** `document.title` VI (`Gửi yêu cầu hỗ trợ \| HCMUS EMS`) while H1/labels stay EN (“Create support request”). **D2:** `document.title` VI (`Yêu cầu hỗ trợ`) while H1 is EN (“Support requests”). **D3:** UI largely VI (`Quản lý yêu cầu hỗ trợ`) while `document.title` is EN (`Support Request Management \| HCMUS EMS`); leftover EN chrome and EN “Internal note” on detail. | Bind page title and shared chrome strings to the same i18n catalogue as body copy; audit admin shell leftovers (language switcher, back-to-user, notifications, pagination) and respond-form labels so EN↔VI switches leave no mixed strings. | `submission/evidence/t1b/D1/IA01-06.png`; `submission/evidence/t1b/D2/IA01-06.png`; `submission/evidence/t1b/D3/IA01-06.png` | Nielsen #4 Consistency; course: i18n EN/VI | N/A — form waived by lecturer |
| F-002 | Usability | D1 | IA02-06, IA02-07 | Major | Required-field errors only in a combined bottom alert; focus stays on Submit | Log in as `23127153@student.hcmus.edu.vn`. Open https://prod-dev.ems-fitus.cloud/complaints/new. Leave required fields empty. Activate **Submit**. Observe where errors appear and which control has keyboard focus. | Errors appear near each invalid field with a concrete fix (IA02-06). After failed submit, focus moves to the first invalid field; entered valid data is retained (IA02-07). | A single combined alert at the bottom lists all missing fields; focus remains on **Submit** (not the first invalid field). | Add per-field inline errors linked to each control; on failed submit, move focus to the first invalid field and keep the bottom summary only as a secondary overview if needed. | `submission/evidence/t1b/D1/IA02-06.png`; `submission/evidence/t1b/D1/IA02-07.png` | Nielsen #9; Norman: Feedback; Shneiderman: Informative feedback (IA02-06); Nielsen #1, #3, #5, #9; Shneiderman: Easy reversal (IA02-07) | N/A — form waived by lecturer |
| F-003 | Usability | D1, D2 | IA03-01 | Minor | “Support requests” menu item lacks clear active/current state on student create and detail | Log in as `23127153@student.hcmus.edu.vn`. (1) Open https://prod-dev.ems-fitus.cloud/complaints/new and open the navigation drawer. (2) Open https://prod-dev.ems-fitus.cloud/complaints/97 and open the drawer. Check whether **Support requests** shows an active/current style. | Current section is clearly marked (colour, icon, border, or active state) so the user always knows where they are (IA03-01). | Menu label **Support requests** is present and understandable but has no clear active/current highlight while on create (`/complaints/new`) or detail (`/complaints/97`). (Admin D3 sidebar **does** show active state — out of scope for this finding.) | Treat `/complaints`, `/complaints/new`, and `/complaints/:id` as the same nav section; apply the same active styling used elsewhere (e.g. admin cyan highlight) on the student drawer item. | `submission/evidence/t1b/D1/IA03-01.png`; `submission/evidence/t1b/D2/IA03-01.png` | Nielsen #1, #6; Norman: Visibility, Feedback; Shneiderman #3 | N/A — form waived by lecturer |
| F-004 | Usability | D1, D2, D3 | IA03-03 | Minor | No breadcrumb trail on support create, list, or detail (student and admin) | **Student:** Log in as `23127153@student.hcmus.edu.vn`. Visit https://prod-dev.ems-fitus.cloud/complaints/new , https://prod-dev.ems-fitus.cloud/complaints , and https://prod-dev.ems-fitus.cloud/complaints/97. **Admin:** Log in as `admin@gmail.com`. Visit https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints and `/dashboard/admin/complaints/97`. Look for a hierarchical breadcrumb under the page header. | Breadcrumb shows the hierarchy and intermediate levels are clickable (IA03-03). | No breadcrumb trail on student create/list/detail or admin list/detail (`hasBreadcrumb=false` on admin list evidence). | Add breadcrumbs such as Support requests → Create / #97 (student) and Dashboard → Yêu cầu hỗ trợ → #97 (admin), with clickable parent levels returning to the list. | `submission/evidence/t1b/D1/IA03-03.png`; `submission/evidence/t1b/D2/IA03-03.png`; `submission/evidence/t1b/D3/IA03-03.png` | Nielsen #2, #6; Norman: Mapping, Visibility | N/A — form waived by lecturer |
| F-005 | Usability | D1, D2 | IA03-09 | Minor | Floating Social FAB overlaps form/list chrome near primary actions | Log in as `23127153@student.hcmus.edu.vn`. Open https://prod-dev.ems-fitus.cloud/complaints/new (after a failed empty submit if needed to show footer/actions) and https://prod-dev.ems-fitus.cloud/complaints (list/detail views). Observe the floating Social control relative to footer and primary actions. | Navigation and interactive chrome remain usable without obstructive overlays; keyboard/focus order stays rational for primary controls (IA03-09). | Floating Social FAB sits over the footer/content edge near form actions (D1) and remains present near content on list/detail (D2), competing with primary chrome. | Reposition or auto-hide the FAB when it intersects CTAs; ensure it does not steal hit-targets or disrupt tab order near Submit / list actions. | `submission/evidence/t1b/D1/IA03-09.png`; `submission/evidence/t1b/D2/IA03-09.png` | Nielsen #7; Norman: Constraints; Shneiderman #2 | N/A — form waived by lecturer |
| F-006 | Usability | D3 | IA02-02 | Minor | Admin respond form lacks required/optional indicators for response and Internal note | Log in as `admin@gmail.com`. Open https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints/97. Inspect the respond form fields **Nội dung phản hồi** and **Internal note** for required markers (`*`) or a required/optional legend before submit. | Required vs optional fields are clearly distinguished before submit; if `*` is used, its meaning is explained (IA02-02). | Respond form shows labels but no `*` / required–optional legend for “Nội dung phản hồi” / “Internal note” (Internal note also remains EN — see F-001). | Mark **Nội dung phản hồi** as required (if it is) with a page-level legend; mark **Internal note** as optional; keep indicators consistent with student create-form conventions. | `submission/evidence/t1b/D3/IA02-02.png` | Nielsen #5; Norman: Constraints; Shneiderman: Error prevention | N/A — form waived by lecturer |
| F-007 | Bug | D3 | IA02-08 | Major | Admin date filter accepts From date after To date with no range error | Log in as `admin@gmail.com`. Open https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints. Set filter **Từ** (`From`) = `2026-12-31` and **Đến** (`To`) = `2026-01-01`. Apply/filter (or leave values committed as accepted by the controls). Observe validation and result messaging. | Date fields enforce temporal relationships: start must not be after end; invalid ranges show a clear error (IA02-08). | From after To is accepted without range validation/error; UI falls through to empty/no-match copy only. | Validate `from <= to` on change and on apply; show an inline range error and block the query until corrected; optionally swap or clamp dates with an explicit message. | `submission/evidence/t1b/D3/IA02-08.png` | Nielsen #2, #5; Norman: Constraints | N/A — form waived by lecturer |

## Usability findings from user testing (U-*)

Source: facilitated sessions P1–P5 (`submission/evidence/t2/`). Severity uses Nielsen 0–4 (mapped: 3 ≈ Major, 2 ≈ Minor).

| ID | Type (Bug/Usability) | Screen(s) | Checklist ID(s) | Severity | Title | Steps to reproduce | Expected | Actual | Suggested fix | Screenshot(s) | Heuristic ref | Google Form timestamp |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| U-001 | Usability | D1 | IA02-06, IA02-07 | 3 (Major) | Combined required-field alert only at page bottom; focus stays on Submit | Log in as student. Open https://prod-dev.ems-fitus.cloud/complaints/new. Leave required fields empty. Activate **Submit**. Observe error placement and keyboard focus. | Errors appear near each invalid field with a concrete fix; after failed submit, focus moves to the first invalid field. | A single combined alert at the bottom lists missing fields; focus remains on **Submit**. Participants (esp. P3, P5) missed the alert and re-submitted. | Add per-field inline errors; move focus to the first invalid control; retain a bottom summary only as secondary overview. | `submission/evidence/t2/U-001_combined_validation_alert.png`; `submission/evidence/t1b/D1/IA02-06.png`; `submission/evidence/t1b/D1/IA02-07.png` | Nielsen #1, #9; Norman: Feedback; Shneiderman: Informative feedback | N/A — form waived by lecturer |
| U-002 | Usability | D1, D2, D3 | IA01-06 | 2 (Minor) | Mixed VI/EN localisation between document title and on-page chrome | Open D1 `/complaints/new`, D2 `/complaints` (and detail), and/or D3 admin complaints. Compare browser tab `document.title` with H1/labels/chrome. | One active locale; title, headings, labels, and chrome agree. | Student D1/D2: VI titles while H1/labels stay EN. Admin D3: EN `document.title` / leftover EN chrome vs VI body. Guests hesitated on which language to trust. | Localise `document.title` and chrome with the same locale pack as page copy; add a regression check for mixed EN/VI. | `submission/evidence/t2/U-002_mixed_locale_VI_EN.png`; `submission/evidence/t1b/D1/IA01-06.png`; `submission/evidence/t1b/D2/IA01-06.png`; `submission/evidence/t1b/D3/IA01-06.png` | Nielsen #4 Consistency and standards | N/A — form waived by lecturer |
| U-003 | Usability | D1, D2 | IA03-09 | 2 (Minor) | Social FAB overlaps / competes with support form and list chrome | Open `/complaints/new` and `/complaints`. Observe the floating **Social** control near footer/actions. | Primary actions remain unobstructed; overlays do not compete with CTAs. | Floating Social FAB sits over footer/content edge near Cancel/Submit (D1) and near list/detail content (D2). | Reposition or auto-hide FAB when intersecting primary CTAs. | `submission/evidence/t2/U-003_social_fab_overlap.png`; `submission/evidence/t1b/D1/IA03-09.png`; `submission/evidence/t1b/D2/IA03-09.png` | Nielsen #8; Norman: Constraints | N/A — form waived by lecturer |
| U-004 | Usability | D1, D2, D3 | IA03-03 | 2 (Minor) | Missing breadcrumb — weak sense of place across create / list / detail | Visit student create/list/detail and admin support list. Look for hierarchical breadcrumb under the header. | Breadcrumb shows hierarchy; intermediate levels are clickable. | No breadcrumb. Guests (P3, P5) struggled to know whether they were on create vs list after submit. | Add breadcrumbs such as Support requests → Create / #id (student) and Dashboard → Yêu cầu hỗ trợ → #id (admin). | `submission/evidence/t2/U-004_missing_breadcrumb.png`; `submission/evidence/t1b/D1/IA03-03.png`; `submission/evidence/t1b/D2/IA03-03.png`; `submission/evidence/t1b/D3/IA03-03.png` | Nielsen #2, #6; Norman: Mapping, Visibility | N/A — form waived by lecturer |
| U-005 | Usability | D3 | IA02-08 | 3 (Major) | Admin date filter accepts From date after To date | Log in as `admin@gmail.com`. Open https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints. Set **Từ** to `2026-12-31` and **Đến** to `2026-01-01`. | Invalid ranges are blocked with a clear error (From ≤ To). | Range is accepted without validation; UI shows empty/no-match copy only. | Client- and server-side range validation; show explicit “From must be on or before To” message. | `submission/evidence/t2/U-005_admin_date_filter_from_gt_to.png`; `submission/evidence/t1b/D3/IA02-08.png` | Nielsen #5 Error prevention | N/A — form waived by lecturer |

## Cross-platform findings (XP-*)

Source: `submission/evidence/t3/matrix.md`. Method for C1–C5: local Chrome CDP device-metrics emulation (honestly labelled; BrowserStack Live pending student login).

| ID | Type (Bug/Usability) | Screen(s) | Checklist ID(s) | Severity | Title | Steps to reproduce | Expected | Actual | Suggested fix | Screenshot(s) | Heuristic ref | Google Form timestamp |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| XP-001 | Bug | D3 | IA01-09 | Major | Admin Support list overflows horizontally on phone-width viewport | 1. Sign in as admin. 2. Open https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints. 3. View at phone width ~412px. | Admin list adapts to narrow viewports without horizontal page scroll. | `scrollWidth` (516) exceeds `clientWidth` (412); Export Excel and filters are clipped. Observed under local Chrome CDP phone emulation — not a real device yet. | Collapse admin sidebar below tablet breakpoints; stack status cards/filters; fit Export and search within 100vw. | `submission/evidence/t3/D3/C3.png` | Nielsen H8 / responsive layout | N/A — form waived by lecturer |

## Fail row → finding ID (traceability)

| Execution file | Checklist ID | Result | Finding ID |
|---|---|---|---|
| `D1_execution.md` | IA01-06 | Fail | F-001 |
| `D1_execution.md` | IA02-06 | Fail | F-002 |
| `D1_execution.md` | IA02-07 | Fail | F-002 |
| `D1_execution.md` | IA03-01 | Fail | F-003 |
| `D1_execution.md` | IA03-03 | Fail | F-004 |
| `D1_execution.md` | IA03-09 | Fail | F-005 |
| `D2_execution.md` | IA01-06 | Fail | F-001 |
| `D2_execution.md` | IA03-01 | Fail | F-003 |
| `D2_execution.md` | IA03-03 | Fail | F-004 |
| `D2_execution.md` | IA03-09 | Fail | F-005 |
| `D3_execution.md` | IA01-06 | Fail | F-001 |
| `D3_execution.md` | IA02-02 | Fail | F-006 |
| `D3_execution.md` | IA02-08 | Fail | F-007 |
| `D3_execution.md` | IA03-03 | Fail | F-004 |

**Count check:** 14 Fail rows → 7 findings · D1 6 + D2 4 + D3 4 = 14 · F-001 covers 3 · F-002 covers 2 · F-003 covers 2 · F-004 covers 3 · F-005 covers 2 · F-006 covers 1 · F-007 covers 1 · 3+2+2+3+2+1+1 = 14.
