# Task 2 — Facilitated usability sessions P1–P5 (Scenario D)

**Method:** Facilitated structured walkthroughs on the **live** EMS UI (`https://prod-dev.ems-fitus.cloud/`). Facilitator Huỳnh Gia Âu (`23127153`) observed think-aloud on D1 create and D2 My Requests; D3 admin behaviours noted from facilitator observation aligned with Task 1B. Not remote unmoderated testing; no lab eye-tracking.

**Task script:** see `task_scenario.md` (spec §7 wording).

---

## P1 — Huỳnh Gia Duy · Student · 097***777

| Field | Value |
|---|---|
| Consent | Y |
| Date / time | 2026-08-05 · ~14:20 |
| Environment | macOS 15 · Google Chrome 127 · Desktop laptop · EMS live |
| Facilitator | Huỳnh Gia Âu (`23127153`) |
| Screens touched | D1 `/complaints/new` · D2 `/complaints` + detail |

### Task outcome

| Metric | Value |
|---|---|
| Success | **Success** |
| Time on task (s) | 228 |
| Time on task (mm:ss) | 03:48 |
| Error / hesitation count | 2 |

**Friction points (UI element):**

1. Empty submit → combined required alert at **bottom of create form** (not next to fields); hesitated before scrolling down.
2. Tab title VI (`Gửi yêu cầu hỗ trợ`) vs H1 **Create support request** — brief pause (“which language is this?”).

**Think-aloud (verbatim-style):**

- “Tôi submit trước xem nó báo gì… à lỗi ở dưới cùng, không thấy gần ô.”
- “Title tiếng Việt mà form tiếng Anh — hơi rối nhưng vẫn làm được.”

### SUS (1–5)

| # | Item | Score |
|---|---|---:|
| 1 | I think that I would like to use this system frequently | 4 |
| 2 | I found the system unnecessarily complex | 2 |
| 3 | I thought the system was easy to use | 4 |
| 4 | I would need the support of a technical person to use this system | 2 |
| 5 | I found the various functions in this system were well integrated | 4 |
| 6 | I thought there was too much inconsistency in this system | 2 |
| 7 | I would imagine that most people would learn to use this system very quickly | 4 |
| 8 | I found the system very cumbersome to use | 2 |
| 9 | I felt very confident using the system | 4 |
| 10 | I needed to learn a lot of things before I could get going with this system | 2 |
| | **SUS (0–100)** | **75.0** |

### Probes

| Probe | Response |
|---|---|
| Clarity | Mostly clear after seeing Create request CTA; validation placement was unclear at first. |
| Error recovery | Recovered after scrolling to the bottom alert and filling fields. |
| Speed | Felt reasonably fast once fields were filled. |
| Trust | Yes — request appeared in My Requests with Pending status. |

---

## P2 — Huỳnh Gia Bảo · Student · 093***222

| Field | Value |
|---|---|
| Consent | Y |
| Date / time | 2026-08-05 · ~15:05 |
| Environment | macOS 15 · Safari 18 · Desktop laptop · EMS live |
| Facilitator | Huỳnh Gia Âu (`23127153`) |
| Screens touched | D1 · D2 list/detail |

### Task outcome

| Metric | Value |
|---|---|
| Success | **Success** |
| Time on task (s) | 295 |
| Time on task (mm:ss) | 04:55 |
| Error / hesitation count | 3 |

**Friction points (UI element):**

1. Combined bottom validation alert on D1 after empty **Submit**.
2. Missing **breadcrumb** — used Back / menu to reorient between create and list.
3. Floating **Social** FAB near form footer competed with attention near Cancel/Submit.

**Think-aloud (verbatim-style):**

- “Sao không báo đỏ ngay trên từng ô? Phải kéo xuống mới thấy.”
- “Không có breadcrumb — mình không chắc đang ở Create hay list.”
- “Nút Social nổi đè góc, hơi khó nhìn action.”

### SUS (1–5)

| # | Item | Score |
|---|---|---:|
| 1 | I think that I would like to use this system frequently | 4 |
| 2 | I found the system unnecessarily complex | 3 |
| 3 | I thought the system was easy to use | 3 |
| 4 | I would need the support of a technical person to use this system | 2 |
| 5 | I found the various functions in this system were well integrated | 3 |
| 6 | I thought there was too much inconsistency in this system | 3 |
| 7 | I would imagine that most people would learn to use this system very quickly | 4 |
| 8 | I found the system very cumbersome to use | 3 |
| 9 | I felt very confident using the system | 3 |
| 10 | I needed to learn a lot of things before I could get going with this system | 2 |
| | **SUS (0–100)** | **60.0** |

### Probes

| Probe | Response |
|---|---|
| Clarity | Next steps OK after finding Support requests; empty-form errors were easy to miss. |
| Error recovery | Yes, after noticing the bottom alert; focus stayed on Submit which felt odd. |
| Speed | Acceptable, but extra scrolling slowed the first attempt. |
| Trust | Trusts list detail after seeing the new row. |

---

## P3 — Huỳnh Tích Đức · Guest · 097***777

| Field | Value |
|---|---|
| Consent | Y |
| Date / time | 2026-08-05 · ~16:10 |
| Environment | macOS 15 · Google Chrome 127 · Desktop · EMS live |
| Facilitator | Huỳnh Gia Âu (`23127153`) |
| Screens touched | D1 · D2 list (struggled to reopen detail) |
| Contact note | Same household number as P1 (`097***777`) — recorded as supplied |

### Task outcome

| Metric | Value |
|---|---|
| Success | **Partial** |
| Time on task (s) | 445 |
| Time on task (mm:ss) | 07:25 |
| Error / hesitation count | 5 |

**Friction points (UI element):**

1. Mixed VI/EN chrome (`document.title` vs EN H1/labels) caused long hesitation before committing to the form language.
2. Combined bottom required-field alert; submitted empty twice before reading the message.
3. After create, delayed finding the new row in **Support requests** list (search/filter confusion); opened list but did not confidently reopen own detail within the window → **Partial**.
4. No breadcrumb to confirm “list vs create”.

**Think-aloud (verbatim-style):**

- “Cái tab nói tiếng Việt, trang lại English — mình điền đúng ngôn ngữ nào?”
- “Lỗi ở dưới… mình tưởng submit hỏng.”
- “Tạo xong rồi, tìm lại cái request của mình ở đâu?”

### SUS (1–5)

| # | Item | Score |
|---|---|---:|
| 1 | I think that I would like to use this system frequently | 3 |
| 2 | I found the system unnecessarily complex | 3 |
| 3 | I thought the system was easy to use | 2 |
| 4 | I would need the support of a technical person to use this system | 3 |
| 5 | I found the various functions in this system were well integrated | 3 |
| 6 | I thought there was too much inconsistency in this system | 4 |
| 7 | I would imagine that most people would learn to use this system very quickly | 3 |
| 8 | I found the system very cumbersome to use | 3 |
| 9 | I felt very confident using the system | 2 |
| 10 | I needed to learn a lot of things before I could get going with this system | 3 |
| | **SUS (0–100)** | **42.5** |

### Probes

| Probe | Response |
|---|---|
| Clarity | Not clear after create — unsure how to reopen the request. |
| Error recovery | Eventually filled fields after reading bottom alert; still unsure about list. |
| Speed | Felt slow because of re-find friction. |
| Trust | Medium — believes create worked but wants clearer confirmation path. |

---

## P4 — Trần Thị Thảo · Guest · 091***493

| Field | Value |
|---|---|
| Consent | Y |
| Date / time | 2026-08-06 · ~09:40 |
| Environment | macOS 15 · Google Chrome 127 · Desktop · EMS live |
| Facilitator | Huỳnh Gia Âu (`23127153`) |
| Screens touched | D1 · D2 list/detail |

### Task outcome

| Metric | Value |
|---|---|
| Success | **Success** |
| Time on task (s) | 365 |
| Time on task (mm:ss) | 06:05 |
| Error / hesitation count | 4 |

**Friction points (UI element):**

1. Bottom combined validation alert + focus remaining on **Submit** after failed empty submit.
2. Social FAB overlapping near form actions.
3. Mixed locale on D2 list (`Yêu cầu hỗ trợ` title vs EN “Support requests” H1).
4. Attachment dropzone — paused to confirm whether an image was required vs optional (still completed without attachment).

**Think-aloud (verbatim-style):**

- “Submit rồi mà focus vẫn ở nút — mình không biết ô nào sai trước.”
- “List title tiếng Việt, heading English.”
- “Có cần bắt buộc đính kèm ảnh không? Task nói if possible.”

### SUS (1–5)

| # | Item | Score |
|---|---|---:|
| 1 | I think that I would like to use this system frequently | 3 |
| 2 | I found the system unnecessarily complex | 2 |
| 3 | I thought the system was easy to use | 4 |
| 4 | I would need the support of a technical person to use this system | 2 |
| 5 | I found the various functions in this system were well integrated | 3 |
| 6 | I thought there was too much inconsistency in this system | 3 |
| 7 | I would imagine that most people would learn to use this system very quickly | 4 |
| 8 | I found the system very cumbersome to use | 2 |
| 9 | I felt very confident using the system | 3 |
| 10 | I needed to learn a lot of things before I could get going with this system | 3 |
| | **SUS (0–100)** | **62.5** |

### Probes

| Probe | Response |
|---|---|
| Clarity | Clear enough after one failed submit; locale mix was distracting. |
| Error recovery | Recovered by reading the bottom list of missing fields. |
| Speed | OK for a first visit. |
| Trust | Yes after opening detail and seeing Pending. |

---

## P5 — Nguyễn Phúc Ti Na · Guest · 098***367

| Field | Value |
|---|---|
| Consent | Y |
| Date / time | 2026-08-06 · ~10:35 |
| Environment | macOS 15 · Safari 18 · Desktop · EMS live |
| Facilitator | Huỳnh Gia Âu (`23127153`) |
| Screens touched | D1 · D2 list (detail reopen uncertain) · facilitator showed D3 date filter briefly after task |

### Task outcome

| Metric | Value |
|---|---|
| Success | **Partial** |
| Time on task (s) | 510 |
| Time on task (mm:ss) | 08:30 |
| Error / hesitation count | 5 |

**Friction points (UI element):**

1. Multiple empty submits; bottom alert unread until facilitator probe “what are you looking for?”.
2. Missing breadcrumb + weak sense of place between create and My Requests.
3. Locale inconsistency reduced confidence.
4. After create, found list but could not reliably identify/open own request detail before time cap → **Partial**.
5. (Observer) On D3, facilitator demonstrated **Từ/Đến** date filter accepting From `2026-12-31` > To `2026-01-01` with empty-result copy only — participant commented filters “look broken” when shown.

**Think-aloud (verbatim-style):**

- “Mình bấm Submit mãi… à thông báo dưới cùng.”
- “Không biết mình đang ở đâu trong hệ thống.”
- “Tạo rồi nhưng không chắc cái nào là của mình.”
- (After D3 demo) “From sau To mà vẫn chạy — filter này dễ hiểu nhầm.”

### SUS (1–5)

| # | Item | Score |
|---|---|---:|
| 1 | I think that I would like to use this system frequently | 3 |
| 2 | I found the system unnecessarily complex | 4 |
| 3 | I thought the system was easy to use | 2 |
| 4 | I would need the support of a technical person to use this system | 3 |
| 5 | I found the various functions in this system were well integrated | 2 |
| 6 | I thought there was too much inconsistency in this system | 4 |
| 7 | I would imagine that most people would learn to use this system very quickly | 3 |
| 8 | I found the system very cumbersome to use | 4 |
| 9 | I felt very confident using the system | 2 |
| 10 | I needed to learn a lot of things before I could get going with this system | 3 |
| | **SUS (0–100)** | **35.0** |

### Probes

| Probe | Response |
|---|---|
| Clarity | Often unclear what to do next after errors and after create. |
| Error recovery | Hard — bottom alert + no focus move to first invalid field. |
| Speed | Felt slow / frustrating. |
| Trust | Low–medium; unsure the request was findable again. |

---

## Session aggregate cross-check

| P | Success | Time (s) | Errors | SUS |
|---|---|---:|---:|---:|
| P1 | Success | 228 | 2 | 75.0 |
| P2 | Success | 295 | 3 | 60.0 |
| P3 | Partial | 445 | 5 | 42.5 |
| P4 | Success | 365 | 4 | 62.5 |
| P5 | Partial | 510 | 5 | 35.0 |
| **n=5** | 3 Success / 2 Partial / 0 Fail | mean **368.6** · median **365** | mean **3.8** | mean **55.0** |
