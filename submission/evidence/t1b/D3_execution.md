# Task 1B — Checklist execution: D3 Admin Support Requests

| Field | Value |
|---|---|
| Screen | **D3** — Admin Support Request Management (list + detail) |
| URLs | List: https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints · Detail: https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints/97 |
| Account | `admin@gmail.com` (Tôi là Admin) |
| Seed data | Pending request `#97` “HW03 test - registration failed” (ÂU HUỲNH GIA · 23127153) |
| Date | 2026-08-05 |
| Checklist | 40 executable items |

## Summary

| Result | Count |
|---|---:|
| Passed | 25 |
| Failed | 4 |
| N/A | 11 |
| **Total** | **40** |

## Evidence groups (verified)

| Group | Files | Content |
|---|---|---|
| List VI + EN leftovers | `IA01-06.png` | Overlay: `document.title="Support Request Management \| HCMUS EMS"` vs H1 `Quản lý yêu cầu hỗ trợ`; EN chrome leftovers |
| Detail respond form | `IA02-02.png` | Response + Internal note fields; no `*` / required-optional legend; Internal note EN |
| Invalid date filter | `IA02-08.png` | From `2026-12-31` > To `2026-01-01` accepted; empty copy only |
| Missing breadcrumb | `IA03-03.png` | List header without breadcrumb (`hasBreadcrumb=false`) |

## Execution matrix

| Checklist ID | Aspect | Result | Notes | Screenshot |
|---|---|---|---|---|
| IA01-01 | IA-01 | Pass | Admin list cards/filters align consistently | — |
| IA01-02 | IA-01 | Pass | Consistent spacing between status cards, filters, list rows | — |
| IA01-03 | IA-01 | Pass | Clear H1 + supporting copy + row titles hierarchy | — |
| IA01-04 | IA-01 | Pass | Pending/Resolved text readable on tinted cards | — |
| IA01-05 | IA-01 | Pass | Admin sidebar + filter controls consistent within admin shell | — |
| IA01-06 | IA-01 | Fail | VI UI but EN `document.title`; leftover EN chrome (Switch language, Back to user dashboard, Notifications, Go to page); detail title EN + “Internal note” EN | `D3/IA01-06.png` |
| IA01-07 | IA-01 | Pass | No-result state shows “Không có yêu cầu phù hợp.” | — |
| IA01-08 | IA-01 | Pass | Counts briefly “—” then list populates without broken layout | — |
| IA01-09 | IA-01 | Pass | Narrow viewport: stacked filters + list remain usable | — |
| IA01-10 | IA-01 | Pass | Detail empty attachments: “Không có ảnh đính kèm” | — |
| IA02-01 | IA-02 | Pass | Filter fields labelled (search, member code, category, dates); response field labelled | — |
| IA02-02 | IA-02 | Fail | Admin respond form lacks required/optional indicators or legend for “Nội dung phản hồi” / “Internal note” | `D3/IA02-02.png` |
| IA02-03 | IA-02 | Pass | Search/member labels state purpose; date fields labelled Từ/Đến | — |
| IA02-04 | IA-02 | Pass | Category select with clear options | — |
| IA02-05 | IA-02 | N/A | No create-form validation rules exercised on list filters | — |
| IA02-06 | IA-02 | N/A | No inline validation errors triggered this run | — |
| IA02-07 | IA-02 | N/A | No failed submit recovery exercised (did not send response) | — |
| IA02-08 | IA-02 | Fail | From date after To date accepted without range validation/error | `D3/IA02-08.png` |
| IA02-09 | IA-02 | N/A | No file upload control on admin list/respond | — |
| IA02-10 | IA-02 | N/A | Plain textarea respond fields; no rich-text editor | — |
| IA03-01 | IA-03 | Pass | Sidebar “Yêu cầu hỗ trợ” clearly active (cyan highlight + badge) | — |
| IA03-02 | IA-03 | Pass | Detail “Quay lại” returns to list; header “Back to user dashboard” present | — |
| IA03-03 | IA-03 | Fail | No breadcrumb on list or detail | `D3/IA03-03.png` |
| IA03-04 | IA-03 | Pass | Pending/Resolved status cards act as tabs with clear selected styling | — |
| IA03-05 | IA-03 | Pass | Admin menu names clear (Yêu cầu hỗ trợ, etc.) | — |
| IA03-06 | IA-03 | Pass | Admin nav shallow / grouped reasonably | — |
| IA03-07 | IA-03 | Pass | Deep link `/dashboard/admin/complaints/97` opens correct detail | — |
| IA03-08 | IA-03 | Pass | List rows/links interactive and focusable | — |
| IA03-09 | IA-03 | Pass | Tab moves focus among interactive controls/links | — |
| IA03-10 | IA-03 | Pass | Admin sidebar collapse control present; layout usable | — |
| IA04-01 | IA-04 | N/A | Success/error toast after respond not exercised | — |
| IA04-02 | IA-04 | N/A | Toast timing/placement not observed | — |
| IA04-03 | IA-04 | Pass | Pending/Resolved colour conventions consistent with text labels | — |
| IA04-04 | IA-04 | Pass | Status uses text (“Chờ xử lý” / “Đã giải quyết”), not colour-only | — |
| IA04-05 | IA-04 | N/A | No destructive confirm dialog exercised | — |
| IA04-06 | IA-04 | Pass | Loading indicated via temporary “—” counts before data | — |
| IA04-07 | IA-04 | N/A | Submit disable during respond not exercised | — |
| IA04-08 | IA-04 | Pass | Empty/no-result explanation present | — |
| IA04-09 | IA-04 | N/A | Post-respond UI sync not exercised | — |
| IA04-10 | IA-04 | N/A | Specific error recovery messages not exercised | — |

## Bug candidates

| ID | Related | Severity | Summary |
|---|---|---|---|
| BUG-D3-01 | IA01-06 | Major | Mixed EN `document.title` / chrome / “Internal note” while UI locale is VI |
| BUG-D3-02 | IA02-02 | Minor | Respond form missing required/optional indicators |
| BUG-D3-03 | IA02-08 | Major | Date filter accepts From > To without validation |
| BUG-D3-04 | IA03-03 | Minor | Missing breadcrumb on admin support list/detail |
