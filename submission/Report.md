# HW03 — GUI & Usability Testing on EMS

**Course:** CS423 / CSC15003 — Software Testing (AI-augmented · 2026)
**Student:** Huỳnh Gia Âu · MSSV `23127153` · `hgau23@clc.fitus.edu.vn` · Nhóm 2
**System under test:** HCMUS EMS — https://prod-dev.ems-fitus.cloud/
**Scenario:** D — Support request lifecycle (user submits a request, admin resolves it)
**Repository (public):** https://github.com/huynhgiaau27112005/23127153-hw03-ems (branch `hw03-submission`)
**Report date:** 2026-08-06

---

## 1. Scope: scenario and screens

Scenario **D** covers the full support-request lifecycle, which is the only EMS flow that crosses the
user/admin boundary while still fitting in three screens. That makes it possible to test the same
domain object (a support request) as it is *created*, *tracked*, and *resolved*, so consistency
defects between the user side and the admin side become visible instead of hiding inside one role.

| ID | Screen | URL | Role | Why this screen |
|---|---|---|---|---|
| **D1** | Create support request | `/complaints/new` | Student | The only data-entry form in the scenario: labels, required-field marking, validation, error recovery and file upload all live here (IA-02 coverage). |
| **D2** | My support requests (list + detail) | `/complaints`, `/complaints/97` | Student | List/filter/empty-state and read-only detail: covers navigation, status feedback and list-level empty/loading states (IA-01, IA-03, IA-04). |
| **D3** | Admin support request management (list + detail) | `/dashboard/admin/complaints`, `/dashboard/admin/complaints/97` | Admin | The resolution side: status tabs, multi-filter search, date range, respond form. Lets the same request (`#97`) be compared across roles. |

**Accounts used**

| Role | Account |
|---|---|
| Student (D1, D2) | `23127153@student.hcmus.edu.vn` — ÂU HUỲNH GIA |
| Admin (D3) | `admin@gmail.com` |

**Seed data:** request `#97` — “HW03 test - registration failed”, category *Support*, status *Pending*,
created by ÂU HUỲNH GIA · 23127153. The same request is used as the anchor object on D2 and D3.

---

## 2. Task 1A — Shared GUI checklist (group artefact)

| Item | Value |
|---|---|
| Checklist file | `group/GUI_Checklist.md` |
| Aspects | IA-01 general UI standards · IA-02 forms · IA-03 navigation · IA-04 feedback/state |
| Executable items | **40** (`IA01-01…IA04-10`); the four `IA*-EX` worked examples are excluded from the execution count |
| Reference sources | `group/Reference_Sources.md` (Nielsen 10 heuristics, Norman's 6 principles, Shneiderman's 8 golden rules, WCAG 2.2, ISTQB FL, course slides) |
| AI prompts used to build it | `group/Checklist_AI_Prompts.md` |

Each checklist row carries an explicit *Criterion* (the pass/fail condition), an *Expected* user
outcome, the *Source* heuristic, and an *Origin* column that states honestly whether the row was
AI-generated, AI-drafted then human-refined, or human-refined because the AI missed it (i18n,
accessibility/contrast, colour-only status, double-submit were the recurring AI blind spots).

### Group scenario split (Nhóm 2)

| Member | Scenario |
|---|---|
| Luân (23127414) & Đỗ Trí (23127541) | A — Event administration (shared pool, approved by lecturer) |
| Hà (23127044) | B — Participant experience |
| Lê Minh Trí | C — User administration |
| **Huỳnh Gia Âu (23127153)** | **D — Support requests (D1, D2, D3)** |

---

## 3. Task 1B — Checklist execution per screen

The 40-item checklist was executed once per screen on the live EMS (macOS · Cursor Browser · desktop
viewport), giving **120 item-executions**. Every `Fail` has a note and a screenshot; every `N/A` has
a stated reason (the criterion has no corresponding component on that screen).

| Screen | Pass | Fail | N/A | Total | Detailed matrix |
|---|---:|---:|---:|---:|---|
| D1 — Create support request | 23 | 6 | 11 | 40 | `evidence/t1b/D1_execution.md` |
| D2 — My requests (list + detail) | 26 | 4 | 10 | 40 | `evidence/t1b/D2_execution.md` |
| D3 — Admin support management | 25 | 4 | 11 | 40 | `evidence/t1b/D3_execution.md` |
| **Total** | **74** | **14** | **32** | **120** | |

### 3.1 D1 — Create support request (23 / 6 / 11)

| Checklist ID | Defect observed | Screenshot |
|---|---|---|
| IA01-06 | `document.title` is Vietnamese (`Gửi yêu cầu hỗ trợ \| HCMUS EMS`) while the H1 and all field labels stay English — two locales in one view. | `evidence/t1b/D1/IA01-06.png` |
| IA02-06 | Submitting an empty form produces **one combined alert at the bottom of the page** listing every missing field, instead of inline messages next to each field. | `evidence/t1b/D1/IA02-06.png` |
| IA02-07 | After the failed submit, focus stays on the Submit button rather than moving to the first invalid field. | `evidence/t1b/D1/IA02-07.png` |
| IA03-01 | On `/complaints/new` the menu entry “Support requests” has no active/current state. | `evidence/t1b/D1/IA03-01.png` |
| IA03-03 | No breadcrumb on the create flow. | `evidence/t1b/D1/IA03-03.png` |
| IA03-09 | The floating social FAB overlaps the content edge near the form actions. | `evidence/t1b/D1/IA03-09.png` |

Note on IA02-02: initially scored Fail, then **re-scored Pass** — the required-field asterisks are
rendered through CSS (`::after`) and are visible in the UI even though they are not in the DOM text.

### 3.2 D2 — My support requests (26 / 4 / 10)

| Checklist ID | Defect observed | Screenshot |
|---|---|---|
| IA01-06 | List page: `document.title` = `Yêu cầu hỗ trợ \| HCMUS EMS` (VI) while H1 = “Support requests” (EN). | `evidence/t1b/D2/IA01-06.png` |
| IA03-01 | On the detail page `/complaints/97` the “Support requests” menu item still has no clear current state. | `evidence/t1b/D2/IA03-01.png` |
| IA03-03 | No breadcrumb on either the list or the detail view. | `evidence/t1b/D2/IA03-03.png` |
| IA03-09 | Social FAB sits over list/detail content. | `evidence/t1b/D2/IA03-09.png` |

### 3.3 D3 — Admin support request management (25 / 4 / 11)

| Checklist ID | Defect observed | Screenshot |
|---|---|---|
| IA01-06 | With the UI switched to Vietnamese, `document.title` stays English (`Support Request Management \| HCMUS EMS`) and the admin chrome keeps English strings (*Switch language*, *Back to user dashboard*, *Notifications*, *Go to page*); the detail page also keeps an English “Internal note” heading. | `evidence/t1b/D3/IA01-06.png` |
| IA02-02 | The admin respond form marks neither required nor optional fields and gives no legend for “Nội dung phản hồi” / “Internal note”. | `evidence/t1b/D3/IA02-02.png` |
| IA02-08 | The date filter accepts **From `2026-12-31` > To `2026-01-01`** without any validation or error; the user only sees an empty result list. | `evidence/t1b/D3/IA02-08.png` |
| IA03-03 | No breadcrumb on the admin list or detail. | `evidence/t1b/D3/IA03-03.png` |

### 3.4 Cross-screen pattern

Three defects reproduce on all three screens — mixed VI/EN localisation (IA01-06) and the missing
breadcrumb (IA03-03) everywhere, plus the social FAB and the weak nav active-state on both student
screens. These are therefore reported as *consolidated* findings in the Findings Log rather than as
one finding per screen, with all affected screens and screenshots listed on the single row.

---

## 4. Task 2 — Usability Report (5 real users)

Full raw artefacts: `evidence/t2/task_scenario.md`, `participants.md`, `sessions_P1-P5.md`,
`sus_scores.md`, `metrics.md`. Method: facilitated structured walkthroughs on the live EMS
(facilitator Huỳnh Gia Âu), not unmoderated remote tests.

### 4.1 Participants

| P | Name | Profile | Contact (masked) |
|---|---|---|---|
| P1 | Huỳnh Gia Duy | Student | 097\*\*\*777 |
| P2 | Huỳnh Gia Bảo | Student | 093\*\*\*222 |
| P3 | Huỳnh Tích Đức | Guest | 097\*\*\*777 (same household as P1 — recorded as-is) |
| P4 | Trần Thị Thảo | Guest | 091\*\*\*493 |
| P5 | Nguyễn Phúc Ti Na | Guest | 098\*\*\*367 |

### 4.2 Aggregate metrics

| Metric | Value |
|---|---|
| Task success (Completed) | **3 / 5 (60%)** — P1, P2, P4 |
| Partial | **2 / 5** — P3, P5 |
| Mean / median time on task | **368.6 s** / **365 s** |
| Mean errors per session | **3.8** |
| Mean SUS | **55.0** (below the ~68 average) |

Per-participant SUS: P1 75.0 · P2 60.0 · P3 42.5 · P4 62.5 · P5 35.0.

### 4.3 Ranked usability findings (Nielsen severity 0–4)

| Sev | ID | Title | Screens |
|---:|---|---|---|
| 3 | U-001 | Combined required-field alert at page bottom; focus stays on Submit | D1 |
| 3 | U-005 | Admin date filter accepts From > To | D3 |
| 2 | U-002 | Mixed VI/EN localisation | D1, D2, D3 |
| 2 | U-004 | Missing breadcrumb | D1, D2, D3 |
| 2 | U-003 | Social FAB overlaps form/list chrome | D1, D2 |

Evidence screenshots: `evidence/t2/U-001_…png` … `U-005_….png`. Recommendations (P0: inline
validation + date-range check; P1: locale + breadcrumb; P2: FAB) are in `evidence/t2/metrics.md`.

---

## 5. Task 3 — Cross-browser / cross-platform report

Full matrix: `evidence/t3/matrix.md`. Runbook for real-device follow-up:
`evidence/t3/browserstack_runbook.md`.

**Method (honest):** 15 cells (5 per screen × D1/D2/D3) were captured with local Chrome CDP
`Emulation.setDeviceMetricsOverride` + UA override, each PNG carrying the overlay
`23127153@clc.fitus.edu.vn`. Every cell is labelled **local browser + device-metrics emulation
(not a real device)**. BrowserStack Live real-device recapture is pending student login (tab opened;
see runbook). Coverage rule is satisfied per screen for OS ∈ {Windows, macOS, Android}, browser ∈
{Chrome, Firefox, Safari, Edge, Samsung Internet}, device class ∈ {desktop, tablet, phone}.

| Screen | Pass | Fail | Not executed |
|---|---:|---:|---:|
| D1 | 5 | 0 | 0 |
| D2 | 5 | 0 | 0 |
| D3 | 4 | 1 (C3 phone overflow) | 0 |
| **Total** | **14** | **1** | **0** |

**XP-001 (Major):** D3 admin list horizontal overflow at phone width (`scrollWidth` 516 >
`clientWidth` 412) — `evidence/t3/D3/C3.png`.

---

## 6. Bug & Usability Findings Log

Canonical file: `Bug_Usability_Findings_Log.md`.

| Family | Count | Severity mix |
|---|---:|---|
| F-* (Task 1B, consolidated from 14 Fail rows) | 7 | 3 Major · 4 Minor |
| U-* (user testing) | 5 | 2 × sev-3 · 3 × sev-2 |
| XP-* (cross-platform) | 1 | 1 Major |
| **Total** | **13** | |

**Google Form channel:** the lecturer waived the Google-Form submission for this cohort, so every
finding row carries the timestamp value `N/A — form waived by lecturer`. The aggregated log is
therefore the single authoritative channel for this submission.

---

## 7. Agent Skills

Three reusable skills were authored so the same procedure can be replayed on any other EMS screen:

| Skill | Purpose | Path |
|---|---|---|
| `ems-gui-checklist` | Execute the 40-item GUI checklist on one screen, enforcing Pass/Fail/N/A scoring and the `evidence/t1b/{screen}/{ID}.png` Fail-evidence rule. | `skills/ems-gui-checklist/SKILL.md` |
| `ems-usability-session` | Run and record one facilitated usability session: scenario, observation fields, SUS, probes. | `skills/ems-usability-session/SKILL.md` |
| `ems-compat-matrix` | Plan and execute the cross-platform matrix with the OS × browser × device-class coverage rule and the student-ID overlay. | `skills/ems-compat-matrix/SKILL.md` |

The skills were used for real: D1, D2 and D3 in §3 were each executed through `ems-gui-checklist`,
which is why the three execution files share an identical structure and the same evidence-path
convention.

**Demo video:** pending student recording/upload — script at `Demo_Recording_Script.md`. Until the
YouTube URL is filled in, the Agent Skills self-grade is reduced (see §10).

---

## 8. AI Audit and AI Critique

- `AI_Audit_Report.md` — declaration, tool list, and the per-interaction log (tool, date/time, prompt, output summary).
- `AI_Critique.md` — 200–300 word critique of where the AI was wrong, biased or incomplete during this assignment.

---

## 9. Git commit log

Each testing step is its own commit; the full log is exported to `git_commit_log.txt`.

| Commit | Date (ISO) | Step |
|---|---|---|
| `dfd2800` | 2026-08-05 21:50 | design spec |
| `4364f0d` | 2026-08-05 21:52 | implementation plan |
| `d8b1372` | 2026-08-05 21:57 | shared GUI checklist IA-01…04 + group references |
| `003a4d1` | 2026-08-05 22:12 | EMS GUI/usability/compat agent skills |
| `9b4663a` | 2026-08-05 22:28 | SUT URL corrected to `prod-dev.ems-fitus.cloud` |
| `02ab93f` | 2026-08-05 23:01 | checklist execution — D1 |
| `01cb182` | 2026-08-05 23:09 | D1 count/evidence correction |
| `857f862` | 2026-08-05 23:25 | D1 Fail screenshots realigned, IA02-02 re-scored |
| `c5e83b0` | 2026-08-05 23:39 | checklist execution — D2 |
| `e8a3d67` | 2026-08-05 23:47 | D2 counts + list i18n evidence corrected |
| `2ed4270` | 2026-08-06 00:06 | checklist execution — D3 |
| `fc0836c` | 2026-08-06 | AI Audit Report + AI Critique (+ PDF) |
| `a6e449b` | 2026-08-06 | demo recording script + packaging verifier |
| *(subsequent)* | 2026-08-06 | findings log · 5-user sessions · cross-platform matrix · report finalisation |

Full text log: `git_commit_log.txt` (regenerated at packaging time).

---

## 10. Self-assessment

Target overall ~**085**. Honest deductions: BrowserStack real-device cells not yet substituted for
local emulation (Task 3), and Agent Skills demo URL not yet uploaded (Task 5).

| No. | Criteria | Max | Self |
|---|---|---:|---:|
| 1a | Task 1A — Shared checklist (>40 items) + refs + AI prompts | 15 | **14** |
| 1b | Task 1B — Execution on ≥3 screens + bug reports | 15 | **14** |
| 2 | Task 2 — 5-user testing → Usability Report | 25 | **22** |
| 3 | Task 3 — Cross-browser / cross-platform matrix | 25 | **18** |
| 4 | Findings Form + aggregated log | 10 | **9** |
| 5 | Agent Skills (+ demo) | 10 | **7** |
| | **Total** | **100** | **084** |

Notes: (3) matrix coverage rule satisfied with honest local CDP emulation + runbook; self-score held
back until BrowserStack Live replaces the cells. (5) three skills exist and were used on D1–D3; demo
YouTube URL still pending — script ready. (4) Form waived by lecturer; log is complete and consistent.
