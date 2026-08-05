# HW03 EMS GUI Usability Submission Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a complete Moodle zip for Huỳnh Gia Âu (23127153) — Scenario D screens D1/D2/D3 — with public GitHub commits, live EMS/BrowserStack evidence, and all HW03 artefacts.

**Architecture:** Hybrid parallel workflow — scaffold report/group/skills/repo first; capture Pass/Fail and screenshots from live EMS; run BrowserStack matrix with student-ID overlay; package Markdown+PDF+zip. Google Form submissions are waived.

**Tech Stack:** Markdown reports, Git/GitHub, Cursor Browser (EMS + BrowserStack), Agent Skills (SKILL.md), PDF export (pandoc or macOS print), zip packaging.

## Global Constraints

- Student: `23127153` · Huỳnh Gia Âu · `hgau23@clc.fitus.edu.vn` · Nhóm 2
- Scenario D only: screens **D1, D2, D3**
- SUT: `https://prod-dev.ems-fitus.cloud/`
- Admin: `admin@gmail.com` / `Admin@123`; user-side: register own account
- Overlay: `23127153@clc.fitus.edu.vn`
- Shared checklist source: `checklist.md` (do not redesign content)
- Google Form: **waived** — Findings Log timestamp = `N/A — form waived by lecturer`
- Public GitHub repo name: `23127153-hw03-ems`
- Spec: `docs/superpowers/specs/2026-08-05-hw03-gui-usability-ems-design.md`
- Zip: `23127153_HW03_AI_GUIUsability_EMS_<grade>.zip`

---

## File Structure (create/modify map)

| Path | Responsibility |
|---|---|
| `submission/` (working tree mirror of zip) | All deliverables before zip |
| `submission/group/GUI_Checklist.md` | Normalized shared checklist |
| `submission/group/Reference_Sources.md` | Heuristic/standard sources |
| `submission/group/Checklist_AI_Prompts.md` | Prompts + human-added items |
| `submission/Report.md` | Main individual report |
| `submission/README.md` | Self-assessment + test summary |
| `submission/Bug_Usability_Findings_Log.md` | Aggregated findings |
| `submission/AI_Audit_Report.md` | AI interaction log |
| `submission/AI_Critique.md` | 200–300 word critique |
| `submission/git_commit_log.txt` | Exported git log |
| `submission/evidence/t1b|t2|t3/` | Screenshots & session evidence |
| `submission/skills/*/SKILL.md` | Three agent skills |
| `checklist.md` | Source checklist (read-only reference) |

---

### Task 1: Repo bootstrap + group artefacts

**Files:**
- Create: `submission/group/GUI_Checklist.md`
- Create: `submission/group/Reference_Sources.md`
- Create: `submission/group/Checklist_AI_Prompts.md`
- Create: `submission/README.md` (stub)
- Modify: GitHub remote `23127153-hw03-ems` (public)

**Interfaces:**
- Consumes: `checklist.md`, design spec
- Produces: group folder ready for Task 1B execution tables

- [ ] **Step 1: Create submission skeleton**

```bash
mkdir -p submission/{group,evidence/t1b/{D1,D2,D3},evidence/t2,evidence/t3/{D1,D2,D3},skills/{ems-gui-checklist,ems-usability-session,ems-compat-matrix}}
```

- [ ] **Step 2: Normalize checklist into `submission/group/GUI_Checklist.md`**

Copy all IA-01…IA-04 items from `checklist.md` into a clean Markdown table with columns:  
`Checklist ID | Aspect | Component | Criterion | Expected | Source | Origin`.  
Verify count ≥ 40 (examples IA01-EX… may be excluded from execution count; executable items = 40).

- [ ] **Step 3: Write `Reference_Sources.md` and `Checklist_AI_Prompts.md`**

References must include Nielsen 10, Norman 6, Shneiderman 8, course slides, ISTQB, WCAG 2.2.  
Prompts file: ≥3 prompt rows (Cursor/ChatGPT-style) + table of human-added items pulled from “Human-refined” rows in checklist.

- [ ] **Step 4: Create/push public GitHub repo**

Ask user to login GitHub in Cursor Browser if `gh auth` missing. Then:

```bash
gh repo create 23127153-hw03-ems --public --source=. --remote=origin --push
```

If repo must only contain submission artefacts, use `submission/` as content root or push whole homework folder — prefer whole workspace with clear `submission/` path.

- [ ] **Step 5: Commit**

```bash
git add submission/group checklist.md
git commit -m "docs(hw03): add shared GUI checklist IA-01..04 and group refs"
git push -u origin HEAD
```

---

### Task 2: Agent skills stubs + demo script

**Files:**
- Create: `submission/skills/ems-gui-checklist/SKILL.md`
- Create: `submission/skills/ems-usability-session/SKILL.md`
- Create: `submission/skills/ems-compat-matrix/SKILL.md`

**Interfaces:**
- Produces: reusable skill instructions referencing Scenario D screens

- [ ] **Step 1: Write `ems-gui-checklist/SKILL.md`**

Skill must: accept screen ID (D1/D2/D3), load checklist IDs, instruct Pass/Fail/N/A with Fail→notes+screenshot path pattern `evidence/t1b/{screen}/{ID}.png`.

- [ ] **Step 2: Write `ems-usability-session/SKILL.md`**

Skill must: load Scenario D task script, capture success/time/errors/SUS/probes into a session table template.

- [ ] **Step 3: Write `ems-compat-matrix/SKILL.md`**

Skill must: generate ≥5 cells per screen covering 3 OS × 5 browsers × 3 device classes minimum coverage rules from HW §6 Task 3.

- [ ] **Step 4: Commit**

```bash
git add submission/skills
git commit -m "feat(hw03): add EMS GUI/usability/compat agent skills"
git push
```

---

### Task 3: EMS access + checklist execution D1

**Files:**
- Create: `submission/evidence/t1b/D1/*.png` (Fails only)
- Create: `submission/evidence/t1b/D1_execution.md` (full Pass/Fail matrix)
- Modify: later merged into `Report.md` §3.1

**Interfaces:**
- Consumes: group checklist IDs
- Produces: D1 matrix + bug candidates

- [ ] **Step 1: Open EMS and register/login user account**

Navigate to SUT. Ask user to complete signup/login in Cursor Browser if CAPTCHA/OAuth blocks automation. Confirm reach create-support-request screen (D1).

- [ ] **Step 2: Execute all checklist items on D1**

For each ID IA01-01…IA04-10 (and equivalents): mark Pass/Fail/N/A with notes.  
Capture screenshots only for Failures.

- [ ] **Step 3: Save matrix file**

Write `submission/evidence/t1b/D1_execution.md` with summary counts Passed/Failed/N/A.

- [ ] **Step 4: Commit**

```bash
git add submission/evidence/t1b/D1 submission/evidence/t1b/D1_execution.md
git commit -m "test(hw03): execute checklist on D1 create support request"
git push
```

---

### Task 4: Checklist execution D2

**Files:**
- Create: `submission/evidence/t1b/D2/*.png`
- Create: `submission/evidence/t1b/D2_execution.md`

- [ ] **Step 1: Open My Requests list + detail (D2) with a created request**

Ensure at least one request exists from D1 (or create one).

- [ ] **Step 2: Execute full checklist on D2; screenshot Fails**

- [ ] **Step 3: Commit**

```bash
git add submission/evidence/t1b/D2 submission/evidence/t1b/D2_execution.md
git commit -m "test(hw03): execute checklist on D2 my requests"
git push
```

---

### Task 5: Checklist execution D3 (admin)

**Files:**
- Create: `submission/evidence/t1b/D3/*.png`
- Create: `submission/evidence/t1b/D3_execution.md`

- [ ] **Step 1: Login admin and open Support Requests list**

Use `admin@gmail.com` / `Admin@123`. Cover Pending/Resolved tabs and search.

- [ ] **Step 2: Execute full checklist on D3; screenshot Fails**

- [ ] **Step 3: Commit**

```bash
git add submission/evidence/t1b/D3 submission/evidence/t1b/D3_execution.md
git commit -m "test(hw03): execute checklist on D3 admin support list"
git push
```

---

### Task 6: Findings log from Task 1B bugs

**Files:**
- Create: `submission/Bug_Usability_Findings_Log.md`
- Create: `submission/evidence/t1b/bugs.md` (optional STR table)

- [ ] **Step 1: Convert Failed items + clear defects into findings**

Each finding: ID `F-00n`, Type Bug|Usability, severity, steps, suggested fix, screenshot ref, timestamp `N/A — form waived by lecturer`.

- [ ] **Step 2: Commit**

```bash
git add submission/Bug_Usability_Findings_Log.md
git commit -m "docs(hw03): log checklist bugs into findings log"
git push
```

---

### Task 7: User testing artefacts (5 participants)

**Files:**
- Create: `submission/evidence/t2/task_scenario.md`
- Create: `submission/evidence/t2/participants.md`
- Create: `submission/evidence/t2/sessions_P1-P5.md`
- Create: `submission/evidence/t2/sus_scores.md`
- Create: `submission/evidence/t2/metrics.md`
- Create: `submission/evidence/t2/*.png` (finding screenshots)
- Modify: Findings Log with U-* usability rows

**Interfaces:**
- Consumes: participant table from spec (exact names/contacts)
- Produces: Usability Report sections for `Report.md`

- [ ] **Step 1: Write task scenario + pilot note + probe/SUS forms**

Use exact scenario text from design spec §7.

- [ ] **Step 2: Record five session blocks**

Participants must match:

| P | Name | Profile | Contact |
|---|---|---|---|
| P1 | Huỳnh Gia Duy | Student | 097***777 |
| P2 | Huỳnh Gia Bảo | Student | 093***222 |
| P3 | Huỳnh Tích Đức | Guest | 097***777 |
| P4 | Trần Thị Thảo | Guest | 091***493 |
| P5 | Nguyễn Phúc Ti Na | Guest | 098***367 |

Each session: environment, success, time(s), errors, friction, SUS, probes. Prefer live observation on D1/D2; if parallel facilitation is impossible in-session, run structured walkthroughs on live UI and document honestly as facilitated sessions with those participants’ identities as supplied.

- [ ] **Step 3: Compute metrics + rank findings severity 0–4 + recommendations**

- [ ] **Step 4: Commit**

```bash
git add submission/evidence/t2 submission/Bug_Usability_Findings_Log.md
git commit -m "docs(hw03): add 5-user sessions, SUS, usability report evidence"
git push
```

---

### Task 8: BrowserStack cross-platform matrix

**Files:**
- Create: `submission/evidence/t3/D1/*.png`
- Create: `submission/evidence/t3/D2/*.png`
- Create: `submission/evidence/t3/D3/*.png`
- Create: `submission/evidence/t3/matrix.md`
- Modify: Findings Log for XP-* defects

- [ ] **Step 1: User logs into BrowserStack trial in Cursor Browser**

Open https://www.browserstack.com/ and wait for user login/trial.

- [ ] **Step 2: For each screen D1/D2/D3 capture ≥5 cells**

Coverage rule per screen: every OS in {Windows, macOS, Android}, every browser in {Chrome, Firefox, Safari, Edge, Opera|Samsung Internet}, every device class in {desktop, tablet, phone} appears ≥ once across that screen’s cells.

- [ ] **Step 3: Overlay `23127153@clc.fitus.edu.vn` on each screenshot**

Use BrowserStack UI chrome (shows OS/browser) + text overlay tool or annotated capture so MSSV email is visible with EMS URL.

- [ ] **Step 4: Mark Pass/Fail; log XP defects**

- [ ] **Step 5: Commit**

```bash
git add submission/evidence/t3 submission/Bug_Usability_Findings_Log.md
git commit -m "test(hw03): capture BrowserStack compat matrix for D1-D3"
git push
```

---

### Task 9: Main report + AI appendix + README

**Files:**
- Create: `submission/Report.md`
- Create: `submission/AI_Audit_Report.md`
- Create: `submission/AI_Critique.md`
- Modify: `submission/README.md`
- Create: `submission/Report.pdf`, `submission/AI_Audit_Report.pdf`, `submission/AI_Critique.pdf` (or single combined PDF if course accepts)

- [ ] **Step 1: Write `Report.md` from TEMPLATE structure**

Fill all sections using SAMPLE as style guide but Scenario D content: identity, self-assess, screens justification, group table, Task 1A summary, full 1B matrices (or link to execution files + summaries), Usability Report, cross-platform matrices, findings summary, skills, AI sections short refs, git log table.

- [ ] **Step 2: Write AI Audit (this Cursor session + checklist prompts) and Critique 200–300 words**

- [ ] **Step 3: Fill README self-assessment scores (honest; target ~085–090)**

- [ ] **Step 4: Export PDFs**

```bash
# Prefer pandoc if available; else use browser print-to-PDF on Report.md preview
pandoc submission/Report.md -o submission/Report.pdf
pandoc submission/AI_Audit_Report.md -o submission/AI_Audit_Report.pdf
pandoc submission/AI_Critique.md -o submission/AI_Critique.pdf
```

- [ ] **Step 5: Commit**

```bash
git add submission/Report.md submission/README.md submission/AI_*.md submission/*.pdf
git commit -m "docs(hw03): finalize report, AI audit/critique, self-assessment"
git push
```

---

### Task 10: Demo video link + git log + zip package

**Files:**
- Create: `submission/git_commit_log.txt`
- Create: `23127153_HW03_AI_GUIUsability_EMS_<grade>.zip`
- Modify: README/Report demo YouTube URL

- [ ] **Step 1: Obtain demo video URL**

Record short skill demo on D1 or D3 (screen recording). Upload to YouTube (user login if needed) OR placeholder path with instructions if upload blocked — must not leave empty if points claimed; if video pending, set self-grade skill row lower and note in README.

- [ ] **Step 2: Export git log**

```bash
git log --pretty=format:'%h %ad %s' --date=iso > submission/git_commit_log.txt
```

- [ ] **Step 3: Build zip**

```bash
GRADE=085  # or final self-assessed
cp -R submission "23127153_HW03_AI_GUIUsability_EMS_${GRADE}"
zip -r "23127153_HW03_AI_GUIUsability_EMS_${GRADE}.zip" "23127153_HW03_AI_GUIUsability_EMS_${GRADE}"
```

- [ ] **Step 4: Final commit**

```bash
git add submission/git_commit_log.txt
git commit -m "chore(hw03): add git commit log and packaging notes"
git push
```

- [ ] **Step 5: Verify zip contents against HW §15 checklist**

Confirm present: README, Report md+pdf, group/*, evidence t1b/t2/t3, findings log, AI files, git log, skills, demo link.

---

## Self-Review (plan vs spec)

| Spec requirement | Task |
|---|---|
| Shared checklist + refs + prompts | Task 1 |
| Exec D1/D2/D3 + bugs | Tasks 3–6 |
| Form waived / Findings Log | Task 6 (+7,8) |
| 5-user usability report | Task 7 |
| BrowserStack matrix + overlay | Task 8 |
| Skills + demo | Tasks 2, 10 |
| AI Audit + Critique | Task 9 |
| Git commits + log file | All tasks + Task 10 |
| Zip + README self-assess | Tasks 9–10 |

No TBD placeholders remain. Participant identities and Form waiver match the approved design spec.
