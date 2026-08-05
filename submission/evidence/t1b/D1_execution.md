# Task 1B — Checklist execution: D1 Create support request

| Field | Value |
|---|---|
| Screen | **D1** — Create support request |
| URL | https://prod-dev.ems-fitus.cloud/complaints/new |
| Account | `23127153@student.hcmus.edu.vn` (ÂU HUỲNH GIA) |
| Date | 2026-08-05 |
| Environment | macOS · Cursor Browser · Desktop |
| Checklist | `submission/group/GUI_Checklist.md` (40 executable items) |

## Summary

| Result | Count |
|---|---:|
| Passed | 23 |
| Failed | 6 |
| N/A | 11 |
| **Total executable** | **40** |

## Evidence groups (verified)

| Group | Files | Content |
|---|---|---|
| Pre-submit form | `IA01-06.png`, `IA03-03.png` | Form loaded; title-overlay shows VI `document.title` vs EN h1; **no** validation banner; no breadcrumb |
| Post-submit | `IA02-06.png`, `IA02-07.png`, `IA03-09.png` | Combined required alert at bottom; Submit focused; Social FAB visible |
| Menu open | `IA03-01.png` | Drawer with Support requests; no active/current highlight while on create page |

## Execution matrix

| Checklist ID | Aspect | Result | Notes | Screenshot |
|---|---|---|---|---|
| IA01-01 | IA-01 | Pass | Form sections align on a single column card | — |
| IA01-02 | IA-01 | Pass | Consistent vertical spacing between field groups | — |
| IA01-03 | IA-01 | Pass | H1 “Create support request” dominates; helper text secondary | — |
| IA01-04 | IA-01 | Pass | Dark text on light card; primary CTA readable | — |
| IA01-05 | IA-01 | Pass | Cancel (secondary) + Submit (primary) match EMS button patterns | — |
| IA01-06 | IA-01 | Fail | `document.title` VI (`Gửi yêu cầu hỗ trợ \| HCMUS EMS`) while H1/labels stay EN | `D1/IA01-06.png` |
| IA01-07 | IA-01 | N/A | Create form (not a list empty state) | — |
| IA01-08 | IA-01 | Pass | Page content stable on load | — |
| IA01-09 | IA-01 | Pass | Desktop: no horizontal overflow on form | — |
| IA01-10 | IA-01 | Pass | Attachment dropzone + helper present when empty | — |
| IA02-01 | IA-02 | Pass | Visible labels for all main fields | — |
| IA02-02 | IA-02 | Pass | Required fields marked with red `*` before submit | — |
| IA02-03 | IA-02 | Pass | Attachment constraints + example placeholders | — |
| IA02-04 | IA-02 | Pass | Request type select with clear options | — |
| IA02-05 | IA-02 | Pass | Empty submit blocked at submit time | — |
| IA02-06 | IA-02 | Fail | One combined bottom alert listing all missing fields — not per-field inline | `D1/IA02-06.png` |
| IA02-07 | IA-02 | Fail | After failed submit, focus stays on Submit (not first invalid field) | `D1/IA02-07.png` |
| IA02-08 | IA-02 | N/A | No date/time fields on D1 | — |
| IA02-09 | IA-02 | Pass | Upload constraints disclosed | — |
| IA02-10 | IA-02 | N/A | Plain textarea — no rich-text editor | — |
| IA03-01 | IA-03 | Fail | Menu “Support requests” has no active/current highlight on `/complaints/new` | `D1/IA03-01.png` |
| IA03-02 | IA-03 | Pass | Back button present | — |
| IA03-03 | IA-03 | Fail | No breadcrumb trail on create page | `D1/IA03-03.png` |
| IA03-04 | IA-03 | N/A | No tabs on D1 | — |
| IA03-05 | IA-03 | Pass | Menu label “Support requests” is understandable | — |
| IA03-06 | IA-03 | Pass | Shallow menu hierarchy | — |
| IA03-07 | IA-03 | Pass | Deep link `/complaints/new` works while authenticated | — |
| IA03-08 | IA-03 | Pass | Primary controls interactive | — |
| IA03-09 | IA-03 | Fail | Floating Social FAB sits over footer/content edge near form actions | `D1/IA03-09.png` |
| IA03-10 | IA-03 | Pass | Open-menu drawer available | — |
| IA04-01 | IA-04 | Pass | Failed submit shows an explicit required-fields message | — |
| IA04-02 | IA-04 | Pass | Error banner readable at bottom; does not cover Submit | — |
| IA04-03 | IA-04 | N/A | No status badges on create screen | — |
| IA04-04 | IA-04 | N/A | No status colour coding on create screen | — |
| IA04-05 | IA-04 | N/A | Dirty-form leave confirmation not exercised | — |
| IA04-06 | IA-04 | N/A | No long-running submit observed | — |
| IA04-07 | IA-04 | N/A | Processing/disabled Submit not observed (client abort) | — |
| IA04-08 | IA-04 | N/A | Not a list/search screen | — |
| IA04-09 | IA-04 | N/A | No successful create → list sync this run | — |
| IA04-10 | IA-04 | Pass | Message names the missing fields | — |

## Bug candidates (for Findings Log later)

| ID | Related | Severity | Summary |
|---|---|---|---|
| BUG-D1-01 | IA01-06 | Major | Mixed VI document title + EN form chrome |
| BUG-D1-02 | IA02-06 / IA02-07 | Major | Combined bottom validation alert; focus stays on Submit |
| BUG-D1-03 | IA03-03 | Minor | Missing breadcrumb on create flow |
| BUG-D1-04 | IA03-01 | Minor | No active state for Support requests on create page |
| BUG-D1-05 | IA03-09 | Minor | Social FAB competes with form chrome |
