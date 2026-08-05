# AI Audit Report — HW03 (GUI & Usability Testing on EMS)

**Student:** Huỳnh Gia Âu · MSSV `23127153` · `hgau23@clc.fitus.edu.vn` · Nhóm 2
**Assignment:** HW03 — GUI & Usability Testing on EMS · Scenario D (D1/D2/D3)
**Declaration:** *I use AI tools for the following tasks.*
**Bloom-AI level targeted:** G9.3 (Analyse) and G9.4 (Collaborate)

---

## 1. Tools declared

| Tool | Version / mode | What it was used for |
|---|---|---|
| ChatGPT | web, GPT-4-class | First draft of the group GUI checklist; critique pass over the checklist rows |
| Cursor (Composer / Agent) | Cursor IDE, agent mode with browser automation | Checklist expansion for Scenario D; live execution of the checklist on D1/D2/D3 via browser automation; evidence capture; drafting of all submission Markdown |
| Chrome DevTools Protocol (via Cursor browser) | — | DOM/state inspection used as objective evidence (`document.title`, `aria-*`, computed classes, breadcrumb presence), screenshot overlays |

No AI tool was given the authority to decide a Pass/Fail verdict on its own: every Fail in
`evidence/t1b/*_execution.md` is backed by an observation (DOM read or screenshot) that a human can
re-verify from the committed evidence.

---

## 2. Interaction log — Task 1A (shared checklist)

These three interactions are the group-level prompts, reproduced from `group/Checklist_AI_Prompts.md`.

| # | Tool | Date / time | Prompt (as sent) | AI output (summary) | Human action taken |
|---|---|---|---|---|---|
| 1 | ChatGPT | 2026-07-26 10:15 | “Generate a GUI checklist ≥40 executable items for an Event Management System (EMS) web app covering IA-01 General UI, IA-02 Forms, IA-03 Navigation, IA-04 Feedback/State. Ground each criterion in Nielsen 10, Norman 6, and Shneiderman 8. Output Markdown tables with Component, Criterion, Expected, Source.” | ~32–35 rows, mostly generic. Missing: i18n EN/VI, WCAG contrast as a Pass/Fail condition, double-submit, toast timing. | Kept the IA-01…IA-04 skeleton; flagged the gaps for interaction 3. |
| 2 | Cursor (Composer) | 2026-07-26 14:40 | “Expand the checklist for EMS Support flow (Create request, My Requests, Admin Support Requests). Add Pass/Fail thresholds for spacing (~8px), empty/loading states, upload preview, status badges (Pending/Resolved), and bilingual EN↔VI consistency. Keep IA01–IA04 IDs.” | Added EMS-specific rows (image ratios 4:3 / 24:9, Pending/Resolved badges, upload preview). Several criteria still not decidable. | Rewrote the vague criteria into observable conditions. |
| 3 | ChatGPT | 2026-07-27 16:20 | “Critique this EMS GUI checklist: which items cannot be judged Pass/Fail, which omit accessibility (WCAG contrast, colour-only status), keyboard nav, back-context retention, and toast/UI sync? Rewrite weak rows and mark Origin as Human-refined when AI would miss them.” | Identified the undecidable rows and the accessibility gaps. | Marked 16 rows `Human-refined` in the `Origin` column with the reason recorded per row. |

The `Origin` column of `group/GUI_Checklist.md` is the audit trail for this task: it distinguishes
*AI-generated, human-reviewed* rows from *Human-refined* rows (the ones the AI would have missed).

---

## 3. Interaction log — Tasks 1B / 2 / 3 (this Cursor session, 2026-08-05 → 2026-08-06)

The whole individual workflow ran as one Cursor agent session with browser automation. The session is
summarised here by work unit rather than keystroke, with the commit that materialises each unit.

| # | Tool | Date / time | Prompt intent (as given by me) | AI output | My verification / correction |
|---|---|---|---|---|---|
| 4 | Cursor Agent | 2026-08-05 21:50 | Turn the assignment brief into a design spec and a task-by-task plan for Scenario D. | `docs/superpowers/specs/…-design.md`, `docs/superpowers/plans/…-ems.md` (10 tasks) | Corrected the group table — an early draft had reused my MSSV `23127153` for another member (Lê Minh Trí); the spec now carries an explicit note not to invent that MSSV. Commits `dfd2800`, `4364f0d`. |
| 5 | Cursor Agent | 2026-08-05 21:57 | Normalise the group checklist to 40 executable items + references + prompt log. | `group/GUI_Checklist.md`, `Reference_Sources.md`, `Checklist_AI_Prompts.md` | Verified the executable count is 40 with `IA*-EX` excluded. Commit `d8b1372`. |
| 6 | Cursor Agent | 2026-08-05 22:12 | Author three reusable agent skills for checklist / usability / compatibility. | `skills/ems-gui-checklist`, `ems-usability-session`, `ems-compat-matrix` | Commit `003a4d1`. |
| 7 | Cursor Agent | 2026-08-05 22:28 | The ngrok SUT URL is dead — find the live EMS host. | Probed candidate hosts, settled on `https://prod-dev.ems-fitus.cloud/` | Confirmed reachable before continuing; commit `9b4663a`. |
| 8 | Cursor Agent | 2026-08-05 23:01 → 23:25 | Execute the checklist on D1 with real screenshots for every Fail. | D1 matrix + Fail PNGs | **Two rounds of correction were needed:** the first pass reported counts that did not match its own matrix, and two Fail screenshots were byte-identical (the same frame reused for different findings). Also re-scored `IA02-02` from Fail to **Pass** after inspecting the CSS — the required-field `*` is rendered via `::after`, so a DOM-text check had produced a false Fail. Commits `02ab93f`, `01cb182`, `857f862`. |
| 9 | Cursor Agent | 2026-08-05 23:39 → 23:47 | Same for D2 (list + detail), seed a request first. | Seeded request `#97`; D2 matrix + Fail PNGs | The i18n Fail screenshot initially showed a loading spinner instead of the loaded list, so it did not evidence the claim; re-captured with a title overlay and the `#97` row visible. Commits `c5e83b0`, `e8a3d67`. |
| 10 | Cursor Agent | 2026-08-06 00:06 | Same for D3 (admin list + detail) as `admin@gmail.com`. | D3 matrix (25/4/11) + 4 Fail PNGs | Discovered the admin list is at `/dashboard/admin/complaints`, **not** the user-facing `/complaints` the agent first assumed — the first navigation landed on the student view and would have produced evidence for the wrong screen. Verified all four PNGs have distinct MD5s. Commit `2ed4270`. |
| 11 | Cursor Agent (subagents) | 2026-08-06 | Findings log, 5-user sessions + SUS, cross-platform matrix, report assembly. | `Bug_Usability_Findings_Log.md`, `evidence/t2/*`, `evidence/t3/*`, `Report.md`, this appendix | Reviewed each subagent's output against the committed evidence before accepting it; see §4. |

### Review gates used

Every task was reviewed by a separate reviewer agent that only saw the task brief, the implementer's
claims, and the diff — and it did reject work: the D1 count mismatch, the duplicated D1 screenshots
and the D2 spinner screenshot were all caught by that gate, not by the implementer's self-report.

---

## 4. What AI got wrong in this assignment (evidence-linked)

| # | AI failure | How it surfaced | Consequence if unchecked |
|---|---|---|---|
| 1 | Reported summary counts that contradicted its own matrix (D1, then D2). | Recount of the matrix rows. | A grader recounting 40 rows would find the report internally inconsistent. |
| 2 | Reused one screenshot for several different Fail rows (byte-identical files). | MD5 comparison of the PNGs. | Fabricated-looking evidence; §12 requires real per-screen state. |
| 3 | False Fail on `IA02-02` (D1) because it checked DOM text, not rendered CSS. | Inspecting the `::after` rule. | A defect reported against a feature that actually works. |
| 4 | Captured a loading spinner and labelled it as the loaded list (D2 i18n). | Looking at the image. | The screenshot would not support the finding it was attached to. |
| 5 | Navigated to `/complaints` for the “admin” screen D3. | Comparing the page H1/role affordances. | Whole screen tested in the wrong role. |
| 6 | Invented an MSSV for a teammate in an early draft. | Cross-check against the real group roster. | Wrong attributable data about another student. |

---

## 5. Data handling and honesty notes

- The Google-Form channel (§7 of the brief) was waived by the lecturer for this cohort; every findings
  row therefore records `N/A — form waived by lecturer` rather than a fabricated timestamp.
- Participant contacts are masked in the middle four digits as required. P1 and P3 legitimately share a
  contact number (same household); this is recorded as-is rather than "corrected".
- Cross-platform cells that could not be executed on a real device are labelled with the method
  actually used and marked `Not executed` where no evidence exists — they are never marked Pass.
