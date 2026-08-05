# HW03 GUI & Usability Testing (EMS) — Design Spec

**Date:** 2026-08-05  
**Student:** Huỳnh Gia Âu · MSSV `23127153` · `hgau23@clc.fitus.edu.vn` · Nhóm 2  
**Approach:** Hybrid parallel (scaffold artefacts + live EMS/BrowserStack evidence)

---

## 1. Goal

Produce a complete individual Moodle submission zip for HW03 (GUI & Usability on EMS), Scenario **D**, using the group-shared checklist already agreed in `checklist.md`, with a public GitHub repo and step-by-step commits for the required git commit log.

## 2. Identity & Scope

| Field | Value |
|---|---|
| Scenario | **D** — User requests Support and Admin resolves it |
| Screens | **D1** Create support request (category, content, image); **D2** My Requests list/detail + response; **D3** Admin Support Requests list (Pending/Resolved, search) |
| SUT | https://prod-dev.ems-fitus.cloud/ |
| User account | Own registration (user side of D1/D2) — do not share group account |
| Admin account | `admin@gmail.com` / `Admin@123` (D3) |
| Overlay (Task 3) | `23127153@clc.fitus.edu.vn` |
| Zip name | `23127153_HW03_AI_GUIUsability_EMS_<SelfAssessedGrade>.zip` |
| Target self-grade | ~085–090 (finalize after evidence quality) |

### Group (Nhóm 2, 5 members — Pool A shared OK’d by lecturer)

| Member | Pool / Scenario |
|---|---|
| Luân (23127414) & Đỗ Trí (23127541) | A — Event administration (shared) |
| Hà (23127044) | B — Participant experience |
| Lê Minh Trí | C — User administration |
| Huỳnh Gia Âu (23127153) | D — Support requests (D1, D2, D3) |

> Note: Do not invent an MSSV for Lê Minh Trí in the report (a previous draft incorrectly reused `23127153`).

## 3. Deliverable Package Structure

```text
23127153_HW03_AI_GUIUsability_EMS_XXX/
├── README.md
├── Report.md
├── Report.pdf
├── group/
│   ├── GUI_Checklist.md          # from checklist.md (normalized)
│   ├── Reference_Sources.md
│   └── Checklist_AI_Prompts.md
├── evidence/
│   ├── t1b/                      # Fail screenshots per D1/D2/D3
│   ├── t2/                       # user-testing notes, SUS, screenshots
│   └── t3/                       # cross-platform cells with overlay
├── Bug_Usability_Findings_Log.md
├── AI_Audit_Report.md
├── AI_Critique.md
├── git_commit_log.txt
└── skills/
    ├── ems-gui-checklist/
    ├── ems-usability-session/
    └── ems-compat-matrix/
```

**GitHub:** public repo `23127153-hw03-ems` (create under student’s GitHub; push after stepwise commits).

## 4. Task 1A — Shared Checklist (group copy)

- Source of truth: existing `checklist.md` (>40 items across IA-01…IA-04).
- Copy/normalize into `group/GUI_Checklist.md`.
- `group/Reference_Sources.md`: Nielsen, Norman, Shneiderman, course slides, ISTQB, WCAG as used.
- `group/Checklist_AI_Prompts.md`: prompts used to generate/refine + table of human-added items with “why AI missed”.

No redesign of the agreed checklist content unless a formatting fix is needed for Pass/Fail execution.

## 5. Task 1B — Checklist Execution (individual)

For **each** of D1, D2, D3:

- Mark every checklist item Pass / Fail / N/A.
- Fail → Notes (why) + screenshot under `evidence/t1b/D{n}/`.
- Expect real Failures from live EMS (empty/loading, i18n, upload validation, toasts, tabs, search) — do not mark all Pass.
- Report bugs in Report §3.4 and aggregate into Findings Log.

**Commits:** shared checklist → exec D1 → exec D2 → exec D3 → bug log.

## 6. Bug & Usability Findings

**Lecturer change (confirmed by student):** Google Form submission is **not required**.

Still produce `Bug_Usability_Findings_Log.md` with columns:

ID · Scenario/Screen · Type (Bug \| Usability) · Description · Steps/Heuristic · Severity · Suggested fix · Screenshot ref · Form-submission timestamp

For timestamp column: use `N/A — form waived by lecturer`.

Findings from Tasks 1–3 must be consistent between the log and the main report.

## 7. Task 2 — User Testing → Usability Report

### Task scenario (goal-oriented)

> You ran into a problem while using EMS (e.g. registration/event issue). Create a support request with a clear description and an image attachment if possible, then follow it in My Requests until you can see the request detail / status / official response (or at least reopen the request you just created). Think aloud. It is OK to get stuck — say what you are thinking.

**Success criteria**

- Completed: request created + opened in My Requests/detail
- Partial: created but cannot find again
- Failed: cannot submit within session (≤ ~10 min)

### Metrics

Task success · time on task · error/hesitation count · SUS (10 items, 0–100) · probe questions (clarity, error recovery, speed, trust).

### Participants (real, outside class — provided by student)

| # | Name | Profile | Contact (masked) | Consent |
|---|---|---|---|---|
| P1 | Huỳnh Gia Duy | Student | 097***777 | Y |
| P2 | Huỳnh Gia Bảo | Student | 093***222 | Y |
| P3 | Huỳnh Tích Đức | Guest | 097***777 | Y |
| P4 | Trần Thị Thảo | Guest | 091***493 | Y |
| P5 | Nguyễn Phúc Ti Na | Guest | 098***367 | Y |

**Risk note:** P1 and P3 share the same masked number; keep as provided; student accepts TA call risk.

Pilot: one extra person documented briefly before the five sessions.

Evidence: per-session notes, SUS table, metrics, ranked findings (severity 0–4), screenshots in `evidence/t2/`.

Session observations and SUS scores will be written from structured runs against live D1/D2 screens (facilitator notes); contacts remain exactly as student supplied.

## 8. Task 3 — Cross-Browser / Cross-Platform

**Tool:** BrowserStack trial (student logs in via Cursor Browser when prompted).

Per screen D1, D2, D3: build a matrix of cells such that **each screen** exercises:

- ≥1 of each of 3 OS (e.g. Windows, macOS, Android)
- ≥1 of each of 5 browsers (Chrome, Firefox, Safari, Edge, Opera or Samsung Internet)
- ≥1 of each of 3 device classes (desktop, tablet, phone)

Each cell: Pass/Fail + screenshot with username overlay `23127153@clc.fitus.edu.vn` alongside EMS URL and OS/browser/device identity.

Fails → short defect note + Findings Log entry.

## 9. Agent Skills

| Skill | Purpose |
|---|---|
| `ems-gui-checklist` | Guide Pass/Fail execution by IA on one EMS screen |
| `ems-usability-session` | Session notes + SUS capture template |
| `ems-compat-matrix` | Minimum coverage matrix for 3 OS × 5 browsers × 3 devices |

Demo: short end-to-end video on D1 or D3; YouTube link in Report/README (student uploads or provides channel access).

## 10. AI Audit & Critique

- Declare AI use (Cursor and any other tools).
- Log: tool, datetime, task, prompt summary, output summary, human review.
- Include group checklist prompts.
- AI Critique: 200–300 words on misses (happy path, i18n, empty states, a11y) and collaboration principle (AI as disciplined assistant + human evidence review).

## 11. Git Workflow

Public repo `23127153-hw03-ems`. One commit per testing procedure step, e.g.:

1. Shared checklist + refs + prompts  
2. Checklist execution D1  
3. Checklist execution D2  
4. Checklist execution D3  
5. Bug / findings log  
6. User-testing design + 5 sessions + usability analysis  
7. Cross-platform matrix captures  
8. Report, AI audit/critique, README, packaging  

Export full log to `git_commit_log.txt`.

## 12. Hybrid Execution Order

1. Scaffold repo structure, group files, skills stubs, report skeleton.  
2. Student login: GitHub (create/push), EMS (user + admin), BrowserStack.  
3. Live Task 1B on D1–D3 with screenshots.  
4. Write usability sessions/metrics from D-flow testing notes + provided participants.  
5. BrowserStack matrix + overlays.  
6. Findings log, AI appendix, PDF, zip.  
7. Push commits; regenerate `git_commit_log.txt`.

## 13. Out of Scope / Explicit Waivers

- Google Form submissions (waived by lecturer per student).
- Redesigning the shared checklist content (already finalized).
- Scenarios A/B/C individual work (other members).

## 14. Success Criteria

- Zip contains every required artefact listed in HW §15.  
- Checklist executed on ≥3 screens with Fail evidence.  
- Usability Report with 5 named participants (masked contacts) + metrics + ranked findings.  
- Compat matrix meets OS/browser/device coverage per screen with overlaid screenshots.  
- Findings log present and consistent (Form timestamp N/A).  
- Skills + demo link; AI Audit + Critique; git commit log from public repo.  
- README self-assessment table filled.
