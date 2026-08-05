# Task 1B — Checklist execution: D2 My Requests (list + detail)

| Field | Value |
|---|---|
| Screen | **D2** — My Support Requests list + request detail |
| URLs | List: https://prod-dev.ems-fitus.cloud/complaints · Detail: https://prod-dev.ems-fitus.cloud/complaints/97 |
| Account | `23127153@student.hcmus.edu.vn` |
| Seed data | Created request `#97` “HW03 test - registration failed” (Pending / Support) |
| Date | 2026-08-05 |
| Checklist | 40 executable items |

## Summary

| Result | Count |
|---|---:|
| Passed | 26 |
| Failed | 4 |
| N/A | 10 |
| **Total** | **40** |

## Execution matrix

| Checklist ID | Aspect | Result | Notes | Screenshot |
|---|---|---|---|---|
| IA01-01 | IA-01 | Pass | List toolbar (search/filter/CTA) and detail content align | — |
| IA01-02 | IA-01 | Pass | Consistent spacing on list header + detail sections | — |
| IA01-03 | IA-01 | Pass | List H1 “Support requests”; detail title uses issue subject | — |
| IA01-04 | IA-01 | Pass | Pending badge + body text readable | — |
| IA01-05 | IA-01 | Pass | Create request CTA / Back consistent with EMS patterns | — |
| IA01-06 | IA-01 | Fail | List `document.title` VI (`Yêu cầu hỗ trợ`) while H1 “Support requests” EN; overlay + `#97` row visible | `D2/IA01-06.png` |
| IA01-07 | IA-01 | Pass | Empty list shows “No requests yet” + guidance (observed before seed) | — |
| IA01-08 | IA-01 | Pass | List/detail load without broken layout | — |
| IA01-09 | IA-01 | Pass | Desktop list/detail usable without overflow | — |
| IA01-10 | IA-01 | Pass | Detail “No attachments” empty media state clear | — |
| IA02-01 | IA-02 | Pass | Search field has visible label/name | — |
| IA02-02 | IA-02 | N/A | No create-form required fields on list/detail | — |
| IA02-03 | IA-02 | Pass | Search placeholder states purpose | — |
| IA02-04 | IA-02 | Pass | Status filter select (All/Pending/Resolved) | — |
| IA02-05 | IA-02 | N/A | No submit form on D2 screens | — |
| IA02-06 | IA-02 | N/A | No validation errors on browse screens | — |
| IA02-07 | IA-02 | N/A | No form submit recovery | — |
| IA02-08 | IA-02 | N/A | No date inputs | — |
| IA02-09 | IA-02 | N/A | No upload on list/detail (attachments display only) | — |
| IA02-10 | IA-02 | N/A | No rich-text editor | — |
| IA03-01 | IA-03 | Fail | On detail `/complaints/97`, menu “Support requests” lacks clear active/current state | `D2/IA03-01.png` |
| IA03-02 | IA-03 | Pass | Back control on detail | — |
| IA03-03 | IA-03 | Fail | No breadcrumb on list or detail | `D2/IA03-03.png` |
| IA03-04 | IA-03 | N/A | Status filter is select, not tabs | — |
| IA03-05 | IA-03 | Pass | “Support requests” / “Create request” naming clear | — |
| IA03-06 | IA-03 | Pass | Menu hierarchy shallow | — |
| IA03-07 | IA-03 | Pass | Deep links `/complaints` and `/complaints/97` open correct views | — |
| IA03-08 | IA-03 | Pass | Links/buttons interactive | — |
| IA03-09 | IA-03 | Fail | Social FAB present on list/detail near content | `D2/IA03-09.png` |
| IA03-10 | IA-03 | Pass | Open-menu drawer available | — |
| IA04-01 | IA-04 | Pass | After create, request appears in list (`#97` link present) | — |
| IA04-02 | IA-04 | N/A | Toast after create not captured this run | — |
| IA04-03 | IA-04 | Pass | Pending status uses consistent badge colouring with text label | — |
| IA04-04 | IA-04 | Pass | Status “Pending” shown as text (not colour-only) | — |
| IA04-05 | IA-04 | N/A | No destructive action exercised | — |
| IA04-06 | IA-04 | Pass | Submit disabled while creating (observed on seed submit) | — |
| IA04-07 | IA-04 | Pass | Submit disabled during processing (anti double-submit) | — |
| IA04-08 | IA-04 | Pass | Empty list + “No attachments” / “has not responded yet” messages | — |
| IA04-09 | IA-04 | Pass | Detail shows Pending + body matching created content | — |
| IA04-10 | IA-04 | Pass | Empty response copy is specific | — |

## Bug candidates

| ID | Related | Severity | Summary |
|---|---|---|---|
| BUG-D2-01 | IA01-06 | Major | Mixed VI title / EN UI on My Requests |
| BUG-D2-02 | IA03-03 | Minor | Missing breadcrumb on list/detail |
| BUG-D2-03 | IA03-01 | Minor | Weak active nav for Support on detail |
| BUG-D2-04 | IA03-09 | Minor | Social FAB competes with content |
