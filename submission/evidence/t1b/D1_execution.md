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
| Passed | 22 |
| Failed | 8 |
| N/A | 10 |
| **Total executable** | **40** |

## Execution matrix

| Checklist ID | Aspect | Result | Notes | Screenshot |
|---|---|---|---|---|
| IA01-01 | IA-01 | Pass | Form sections (type / title / description / attachments / actions) align on a single column card | — |
| IA01-02 | IA-01 | Pass | Consistent vertical spacing between field groups | — |
| IA01-03 | IA-01 | Pass | H1 “Create support request” dominates; helper text secondary | — |
| IA01-04 | IA-01 | Pass | Dark text on light card; primary CTA readable | — |
| IA01-05 | IA-01 | Pass | Cancel (secondary) + Submit (primary) match EMS button patterns | — |
| IA01-06 | IA-01 | Fail | Document title VI (`Gửi yêu cầu hỗ trợ`) while on-page H1/labels/placeholders remain EN — mixed locale on one view | `D1/IA01-06.png` |
| IA01-07 | IA-01 | N/A | Create form (not a list empty state) | — |
| IA01-08 | IA-01 | Pass | Page content stable on load; no obvious layout jump | — |
| IA01-09 | IA-01 | Pass | Desktop: form fully visible; no horizontal overflow (mobile deferred to Task 3) | — |
| IA01-10 | IA-01 | Pass | Attachment dropzone present with clear helper; no broken-image chrome when empty | — |
| IA02-01 | IA-02 | Pass | Visible labels for Request type, Issue, Detailed description, Attachments | — |
| IA02-02 | IA-02 | Fail | Fields are `required` in DOM but UI shows no `*` and no “required” legend before submit | `D1/IA02-02.png` |
| IA02-03 | IA-02 | Pass | Attachment helper states JPG/PNG/GIF/WEBP · up to 5 images · 5 MB each; placeholders give examples | — |
| IA02-04 | IA-02 | Pass | Request type `<select>` with Support / Complaint / Contact / Other; labels clear | — |
| IA02-05 | IA-02 | Pass | Empty submit blocked; validation runs at submit time | — |
| IA02-06 | IA-02 | Fail | Single combined alert: “Request type, issue requiring support and detailed description are required.” — not per-field inline errors | `D1/IA02-06.png` |
| IA02-07 | IA-02 | Fail | After failed submit, focus remains on Submit; does not move to first invalid field | `D1/IA02-06.png` |
| IA02-08 | IA-02 | N/A | No date/time fields on D1 | — |
| IA02-09 | IA-02 | Pass | Upload constraints disclosed; control present (preview/replace not exercised this run) | — |
| IA02-10 | IA-02 | N/A | Plain textarea — no rich-text editor on D1 | — |
| IA03-01 | IA-03 | Fail | Menu lists “Support requests” but current create page lacks a clear active/highlight state in the open menu | `D1/IA03-01.png` |
| IA03-02 | IA-03 | Pass | Back button present above the form | — |
| IA03-03 | IA-03 | Fail | No breadcrumb (e.g. Home › Support requests › Create) | `D1/IA03-03.png` |
| IA03-04 | IA-03 | N/A | No tabs on D1 | — |
| IA03-05 | IA-03 | Pass | Menu label “Support requests” matches function | — |
| IA03-06 | IA-03 | Pass | Menu groups Events / Calendar / Saved / Guide / Support / Profile — shallow hierarchy | — |
| IA03-07 | IA-03 | Pass | Deep link `/complaints/new` opens correct create screen while authenticated | — |
| IA03-08 | IA-03 | Pass | Buttons/links interactive (Back, Cancel, Submit, Open menu) | — |
| IA03-09 | IA-03 | Fail | Floating Social FAB overlays footer; keyboard path to form vs FAB unclear / competes for focus | `D1/IA01-06.png` |
| IA03-10 | IA-03 | Pass | “Open menu” drawer pattern available for compact layouts | — |
| IA04-01 | IA-04 | Pass | Failed submit surfaces an explicit required-fields message (error path) | — |
| IA04-02 | IA-04 | Pass | Error message readable near form top; does not cover Submit | — |
| IA04-03 | IA-04 | N/A | No status badges on create screen | — |
| IA04-04 | IA-04 | N/A | No status colour coding on create screen | — |
| IA04-05 | IA-04 | N/A | Empty form — Cancel/leave confirmation not exercised with dirty data | — |
| IA04-06 | IA-04 | N/A | No long-running submit observed this run | — |
| IA04-07 | IA-04 | N/A | Processing/disabled Submit not observed (submit aborted client-side) | — |
| IA04-08 | IA-04 | N/A | Not a list/search screen | — |
| IA04-09 | IA-04 | N/A | No successful create → list sync in this run | — |
| IA04-10 | IA-04 | Pass | Required message is specific (names the missing fields), not generic “Something went wrong” | — |

## Bug candidates (for Findings Log later)

| ID | Related | Severity | Summary |
|---|---|---|---|
| BUG-D1-01 | IA01-06 | Major | Mixed VI document title + EN form chrome |
| BUG-D1-02 | IA02-02 | Minor | Required fields not marked before submit |
| BUG-D1-03 | IA02-06 / IA02-07 | Major | Combined validation alert; focus stays on Submit |
| BUG-D1-04 | IA03-03 | Minor | Missing breadcrumb on create flow |
| BUG-D1-05 | IA03-01 | Minor | Weak/absent active state for Support in menu on create page |
| BUG-D1-06 | IA03-09 | Minor | Social FAB competes with form keyboard/visual focus |
