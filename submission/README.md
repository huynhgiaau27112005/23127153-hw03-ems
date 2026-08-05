# HW03 — GUI & Usability Testing (EMS)

**Student:** Huỳnh Gia Âu · MSSV `23127153` · `hgau23@clc.fitus.edu.vn` · Nhóm 2
**Scenario:** D — User requests Support and Admin resolves it
**Screens:** D1 (Create support request) · D2 (My Requests) · D3 (Admin Support Requests)
**SUT:** https://prod-dev.ems-fitus.cloud/
**GitHub (public):** https://github.com/huynhgiaau27112005/23127153-hw03-ems · branch `hw03-submission`

## Self-assessment

| No. | Criteria | Max | Self |
|---|---|---:|---:|
| 1a | Task 1A — Shared checklist (>40 items) + refs + AI prompts | 15 | **14** |
| 1b | Task 1B — Execution on ≥3 screens + bug reports | 15 | **14** |
| 2 | Task 2 — 5-user testing → Usability Report | 25 | **22** |
| 3 | Task 3 — Cross-browser / cross-platform matrix | 25 | **18** |
| 4 | Findings Form + aggregated log | 10 | **9** |
| 5 | Agent Skills (+ demo) | 10 | **7** |
| | **Total** | **100** | **084** |

Self-assessed grade for the zip filename: **084**.

## Test summary

| Item | Value |
|---|---|
| Scenario | D — Support request lifecycle |
| Screens tested | D1, D2, D3 |
| Checklist items designed | 40 executable (+ 4 worked examples) |
| Item-executions (3 screens) | 120 = 74 Pass / 14 Fail / 32 N/A |
| Findings (F\* + U\* + XP\*) | 13 (F: 7 · U: 5 · XP: 1) |
| User-testing participants | 5 (mean SUS **55.0**; success **60%**) |
| Usability issues by severity | sev-3: 2 · sev-2: 3 |
| Compatibility cells | 15 executed (14 Pass / 1 Fail); method = local CDP emulation pending BrowserStack Live |
| Demo video | pending — see `Demo_Recording_Script.md` |

## Package layout

```text
submission/
├── group/                 # Shared checklist + references + AI prompts (Task 1A)
├── evidence/t1b/          # Checklist execution D1/D2/D3 + Fail PNGs
├── evidence/t2/           # 5-user sessions, SUS, metrics, U-* screenshots
├── evidence/t3/           # Cross-platform matrix + PNGs + BrowserStack runbook
├── skills/                # ems-gui-checklist · ems-usability-session · ems-compat-matrix
├── Bug_Usability_Findings_Log.md
├── Report.md (+ PDF)
├── AI_Audit_Report.md (+ PDF)
├── AI_Critique.md (+ PDF)
├── Demo_Recording_Script.md
└── git_commit_log.txt
```

## Demo videos

| Skill | Demo URL |
|---|---|
| `ems-gui-checklist` (recommended: D3) | *pending upload — paste YouTube Unlisted URL here after recording* |
