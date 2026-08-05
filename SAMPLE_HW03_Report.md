# HW03 – GUI & Usability Testing trên EMS
## SAMPLE — bài làm minh họa (Scenario B)

> **Đây là SAMPLE để tham khảo cách điền template, không phải bài nộp thật.**  
> Số liệu, participants, screenshot paths và Form timestamps là minh họa.  
> Khi làm bài thật: thay MSSV, chạy test trên EMS live, chụp evidence thật, gửi Google Form thật.  
> Template gốc giữ nguyên tại `TEMPLATE_HW03_Report.md`.

| Trường | Giá trị |
|---|---|
| Student ID | `25127999` |
| Họ và tên | Nguyễn Văn A (SAMPLE) |
| Group | Nhóm 07 |
| Scenario | **B** — User registers to attend an event |
| Screens đã test | B1, B2, B3 |
| Điểm tự đánh giá (Self-assessed grade) | `085` |
| SUT URL | https://prod-dev.ems-fitus.cloud/ |
| Account dùng | Guest tự đăng ký qua `/register` (không dùng chung account nhóm) |
| Ngày nộp | 2026-07-26 |x

---

## 0. README / Tóm tắt Self-Assessment

### Bảng Self-assessment

| No. | Tiêu chí | Max | Tự chấm |
|---|---|---:|---:|
| 1a | Task 1A — Shared checklist (>40 items, IA-01…IA-04) + references + AI prompts (nhóm) | 15 | 14 |
| 1b | Task 1B — Checklist execution trên ≥3 screens + bug reports (cá nhân) | 15 | 13 |
| 2 | Task 2 — User testing với 5 real users → Usability Report | 25 | 21 |
| 3 | Task 3 — Cross-browser / cross-platform matrix | 25 | 20 |
| 4 | Bug & Usability Findings (Google Form + aggregated log) | 10 | 9 |
| 5 | Agent Skills + demo videos | 10 | 8 |
| | **Tổng** | **100** | **85** |

### Tóm tắt test nhanh

- Scenario đã chọn: **B** (Participant experience)
- Screens đã test (≥3) và lý do: **B1 Home/events listing**, **B2 Event detail**, **B3 Registration form** — cover đủ discovery → detail → register
- Checklist items: designed **48** / executed **48×3 screens** / passed **119** / failed **25** (một số N/A)
- Số bugs tìm được: **6** (3 từ checklist, 2 từ user testing, 1 từ cross-platform)
- User-testing participants: **5**
- Usability issues theo severity (0–4): Sev4: 0 · Sev3: 2 · Sev2: 3 · Sev1: 2 · Sev0: 1
- Compatibility cells đã cover: **15 cells** (5 / screen × 3 screens), đủ 3 OS · 5 browsers · 3 device classes
- Link demo videos: https://youtube.com/watch?v=SAMPLE_skill_demo_B3

---

## 1. Chọn Scenario & Screens (Cá nhân)

### 1.1 Scenario đã chọn

- **Scenario:** B
- **Function group:** Public discovery và participant registration (Pool B)
- **Lý do chọn scenario này:** Em là end-user điển hình của EMS (sinh viên/guest). Flow đăng ký event đi qua nhiều UI patterns quan trọng (carousel, search, form validation, confirmation) nên phù hợp để chạy GUI checklist + user testing.

### 1.2 Screens under test (≥ 3)

| # | Screen ID | Tên screen | URL / path | Lý do chọn |
|---|---|---|---|---|
| 1 | B1 | Home / events listing | `/` (sau login redirect về home/events; public listing + featured carousel) | Entry point; test search/filter, empty/loading, i18n |
| 2 | B2 | Event detail | `/events/[id]` (hoặc path detail tương đương trên EMS) | Banner, schedule, CTA Register, waitlist notice |
| 3 | B3 | Registration form | `/events/[id]/register` (hoặc dialog/form đăng ký trên detail) | Form nặng: role selection, validation, confirmation feedback |

### 1.3 Kiểm tra không trùng (nhóm)

| Thành viên | Scenario | Screens |
|---|---|---|
| Bạn (SAMPLE) | B | B1, B2, B3 |
| Teammate 1 | A | A1, A2, A5 |
| Teammate 2 | C | C1, C2, C3 |
| Teammate 3 | D | D1, D2, D3 |

---

## 2. Task 1A — Shared GUI Checklist (Nhóm)

> Artefact nhóm. Bản đầy đủ: `group/GUI_Checklist.md`. Dưới đây là **tóm tắt + vài item mẫu** để thấy cách điền.

### 2.1 Tổng quan checklist

| Aspect | Mô tả | Số items |
|---|---|---:|
| IA-01 | General UI standards | 14 |
| IA-02 | Forms | 12 |
| IA-03 | Navigation | 11 |
| IA-04 | Feedback / state | 11 |
| | **Tổng (bắt buộc > 40)** | **48** |

### 2.2 Checklist (trích mẫu — đủ kiểu item; file đầy đủ 48 dòng)

| ID | Aspect | Item / câu hỏi | Heuristic / nguồn | Pass criteria |
|---|---|---|---|---|
| CHK-001 | IA-01 | Layout có alignment nhất quán (cột, card, spacing)? | Nielsen #4 Consistency | Cards/list align theo grid; không lệch > 8px |
| CHK-002 | IA-01 | Typography hierarchy rõ (H1/H2/body)? | Norman — Visibility | Title event lớn hơn meta; contrast đủ |
| CHK-003 | IA-01 | Colour contrast text/background đạt ~WCAG AA? | a11y / Nielsen #1 | Text chính đọc được trên nền card |
| CHK-004 | IA-01 | EN/VI switch hoạt động, không lẫn ngôn ngữ trên cùng screen? | i18n / course | Toàn bộ label theo locale đang chọn |
| CHK-005 | IA-01 | Empty state có message + CTA khi không có event? | Nielsen #1 | Có empty illustration/text, không trắng xoá |
| CHK-006 | IA-01 | Loading state hiển thị khi fetch danh sách? | IA-04 overlap / Feedback | Skeleton/spinner trước khi data về |
| CHK-007 | IA-01 | Featured carousel không che content quan trọng? | Nielsen #8 Aesthetic | Controls/dots không đè title |
| CHK-010 | IA-02 | Mọi input có label visible (không chỉ placeholder)? | Nielsen #6 Recognition | Label vẫn thấy khi đã nhập |
| CHK-011 | IA-02 | Required fields đánh dấu rõ (* hoặc “bắt buộc”)? | Shneiderman #5 Error prevention | User biết field nào bắt buộc trước khi submit |
| CHK-012 | IA-02 | Validation message nằm gần field lỗi? | Nielsen #9 Help users recognize errors | Error dưới/ cạnh field, không chỉ toast chung |
| CHK-013 | IA-02 | Role selection (student/lecturer/guest) rõ nghĩa? | Norman — Mapping | Mỗi option có label + mô tả ngắn nếu cần |
| CHK-014 | IA-02 | Submit bị disable / có loading khi đang gửi? | IA-04 / double-submit | Không gửi trùng khi double-click |
| CHK-020 | IA-03 | Có cách quay lại list từ detail (back / breadcrumb)? | Nielsen #3 User control | Back hoặc breadcrumb Home > Event |
| CHK-021 | IA-03 | Menu/sidebar highlight đúng trang hiện tại? | Consistency | Item “Events” active khi đang ở listing |
| CHK-022 | IA-03 | Deep link vào event detail mở đúng event? | Navigation | Paste URL mở đúng `[id]` |
| CHK-030 | IA-04 | Toast/success sau đăng ký thành công? | Feedback | Có confirmation rõ ràng |
| CHK-031 | IA-04 | Confirmation trước hành động huỷ đăng ký (nếu có)? | Shneiderman #5 | Dialog Confirm/Cancel |
| CHK-032 | IA-04 | Status màu (Registered / Waitlist / Full) nhất quán? | Visibility of system status | Badge màu + text, không chỉ icon |
| … | … | *(còn lại trong `group/GUI_Checklist.md`)* | | |

### 2.3 Reference sources

| # | Nguồn | Loại | Cách dùng |
|---|---|---|---|
| 1 | Nielsen — 10 Usability Heuristics | Heuristic | Nền tảng IA-01…IA-04 |
| 2 | Norman — Design of Everyday Things (6 principles) | Principle | Visibility, Mapping, Feedback |
| 3 | Shneiderman — Eight Golden Rules | Rule | Error prevention, consistency |
| 4 | Course slides: GUI + Usability + Compatibility | Lecture | Cấu trúc checklist & severity |
| 5 | ISTQB Foundation Level Syllabus | Standard | Thuật ngữ defect / severity |
| 6 | WCAG 2.2 (contrast, labels) | Standard | Items a11y AI thường bỏ sót |

### 2.4 AI prompts dùng để xây / tinh chỉnh checklist

| # | Tool | Ngày/giờ | Mục đích | Prompt (tóm tắt) | Kết quả |
|---|---|---|---|---|---|
| 1 | ChatGPT | 2026-07-20 14:10 | Initial draft | “Generate a GUI checklist >40 items covering IA-01…IA-04 for an Event Management System web app, grounded in Nielsen/Norman/Shneiderman. Output as Markdown table.” | ~35 items khá generic |
| 2 | Claude | 2026-07-20 15:02 | Refine IA-02 | “Expand form items for role selection, waitlist, and confirmation on EMS registration.” | +8 items form tốt hơn |
| 3 | Cursor | 2026-07-20 16:30 | EMS-specific | “Add items AI usually misses: EN/VI i18n, keyboard nav, empty/loading on event carousel.” | Nhóm tự thêm + review |

### 2.5 Items do người thêm (ngoài AI output)

| Checklist ID | Item | Vì sao AI bỏ sót | Bạn học được gì |
|---|---|---|---|
| CHK-004 | EN/VI switch không lẫn ngôn ngữ | Prompt ban đầu không nhắc EMS bilingual | Phải inject context SUT cụ thể |
| CHK-005 | Empty state khi filter không ra event | AI thiên về “happy path” | Buộc AI liệt kê empty/error/loading |
| CHK-033 | Keyboard: Tab order trên registration form | Model thường skip a11y nếu không yêu cầu | Checklist phải có mục a11y cố định |

---

## 3. Task 1B — Checklist Execution (Cá nhân)

> SAMPLE chỉ show **một phần items** trên mỗi screen để minh họa cột Pass/Fail/Notes/Screenshot. Bài thật phải mark **mọi** item của shared checklist.

### 3.1 Execution matrix — Screen 1: `B1 — Home / events listing`

| Checklist ID | Aspect | Result (Pass/Fail) | Notes (bắt buộc nếu Fail) | Screenshot |
|---|---|---|---|---|
| CHK-001 | IA-01 | Pass | Grid event cards căn đều trên desktop | — |
| CHK-002 | IA-01 | Pass | Title “Event Management System” / listing hierarchy rõ | — |
| CHK-003 | IA-01 | Pass | Text trên nền trắng/card đọc được | — |
| CHK-004 | IA-01 | Fail | Một số badge status vẫn EN khi UI đang VI | `evidence/t1b/B1/CHK-004.png` |
| CHK-005 | IA-01 | Fail | Filter “category không có event” → vùng list trống, thiếu empty message + CTA | `evidence/t1b/B1/CHK-005.png` |
| CHK-006 | IA-01 | Pass | Có skeleton khi reload listing | — |
| CHK-007 | IA-01 | Pass | Carousel dots không đè title featured event | — |
| CHK-020 | IA-03 | Pass | Logo EMS / Home đưa về listing | — |
| CHK-021 | IA-03 | Pass | Nav item Events được highlight | — |
| CHK-030 | IA-04 | N/A | Không có action success trên listing | — |
| CHK-032 | IA-04 | Fail | Event “Full” và “Waitlist” dùng cùng tone màu gần nhau, khó phân biệt nhanh | `evidence/t1b/B1/CHK-032.png` |

**Tóm tắt Screen 1 (SAMPLE partial):** Passed 7 / Failed 3 / N/A 1

### 3.2 Execution matrix — Screen 2: `B2 — Event detail`

| Checklist ID | Aspect | Result (Pass/Fail) | Notes | Screenshot |
|---|---|---|---|---|
| CHK-001 | IA-01 | Pass | Banner + content column ổn định trên desktop | — |
| CHK-002 | IA-01 | Pass | Tên event (H1) nổi hơn schedule/meta | — |
| CHK-004 | IA-01 | Fail | Nút “Register” / “Đăng ký” lẫn khi đổi locale giữa chừng | `evidence/t1b/B2/CHK-004.png` |
| CHK-010 | IA-02 | N/A | Detail chưa phải form (form ở B3) | — |
| CHK-020 | IA-03 | Fail | Không có breadcrumb; nút Back trình duyệt là cách duy nhất rõ ràng → user mới dễ lạc | `evidence/t1b/B2/CHK-020.png` |
| CHK-022 | IA-03 | Pass | Deep link mở đúng event đã chọn từ listing | — |
| CHK-030 | IA-04 | N/A | Chưa submit | — |
| CHK-032 | IA-04 | Pass | Waitlist notice hiện khi slots đầy (text rõ) | — |

**Tóm tắt Screen 2 (SAMPLE partial):** Passed 4 / Failed 2 / N/A 2

### 3.3 Execution matrix — Screen 3: `B3 — Registration form`

| Checklist ID | Aspect | Result (Pass/Fail) | Notes | Screenshot |
|---|---|---|---|---|
| CHK-010 | IA-02 | Pass | Email/role có label (HeroUI floating label) | — |
| CHK-011 | IA-02 | Pass | Required đánh dấu `*` | — |
| CHK-012 | IA-02 | Fail | Submit trống: một số lỗi chỉ hiện toast chung, không highlight field | `evidence/t1b/B3/CHK-012.png` |
| CHK-013 | IA-02 | Pass | Role student/lecturer/guest chọn được | — |
| CHK-014 | IA-02 | Fail | Double-click Submit tạo cảm giác gửi 2 lần (button chưa lock ngay) | `evidence/t1b/B3/CHK-014.png` |
| CHK-030 | IA-04 | Pass | Sau đăng ký thành công có toast/confirmation | — |
| CHK-031 | IA-04 | N/A | Flow sample không huỷ đăng ký | — |
| CHK-033 | IA-02/a11y | Fail | Tab order nhảy qua nút social floating trước khi tới Submit | `evidence/t1b/B3/CHK-033.png` |

**Tóm tắt Screen 3 (SAMPLE partial):** Passed 4 / Failed 3 / N/A 1

### 3.4 Bugs phát hiện khi chạy checklist

| Bug ID | Screen | Steps to reproduce | Expected | Actual | Severity | Screenshot | Form timestamp |
|---|---|---|---|---|---|---|---|
| BUG-001 | B1 | 1. Login guest 2. Filter category không có event | Empty state + CTA “Clear filter” | List trống, không message | Major | `evidence/t1b/B1/CHK-005.png` | 2026-07-22 09:14 |
| BUG-002 | B3 | 1. Mở registration 2. Submit để trống | Error cạnh từng required field | Chỉ toast chung | Major | `evidence/t1b/B3/CHK-012.png` | 2026-07-22 09:31 |
| BUG-003 | B3 | 1. Điền hợp lệ 2. Double-click Submit | Một request; button loading/disabled | UI cho phép click lại ngay | Minor | `evidence/t1b/B3/CHK-014.png` | 2026-07-22 09:40 |

---

## 4. Task 2 — User Testing → Usability Report (Cá nhân)

### 4.1 Phase 1 — Thiết kế & chuẩn bị

#### Task scenario (hướng mục tiêu, không viết từng click)

**Nội dung scenario đưa cho participants:**

```text
Bạn là sinh viên FIT muốn tham gia một workshop sắp diễn ra trên hệ thống EMS.
Nhiệm vụ: tìm một event phù hợp, xem thông tin chi tiết, đăng ký tham dự với vai trò Student,
và cho người quan sát xem bằng chứng đăng ký thành công (trang xác nhận / My Registrations / QR nếu có).
Bạn có thể nghĩ to khi làm. Không sao nếu bị kẹt — hãy nói bạn đang nghĩ gì.
```

**Success criteria:**

- Completed: Đăng ký thành công + chỉ ra được evidence (confirmation / My Registrations / ticket)
- Partial: Tới được form nhưng không hoàn tất, hoặc hoàn tất nhưng không tìm được evidence
- Failed: Không tới được form đăng ký trong thời gian phiên (≤ 10 phút)

#### Metrics cần đo

| Metric | Định nghĩa | Cách ghi nhận |
|---|---|---|
| Task success | Completed / Partial / Failed | Observation |
| Time on task | Giây từ “bắt đầu” đến stop | Timer |
| Error / hesitation count | Click sai, backtrack, pause > 5s | Notes |
| SUS | 10 câu, scale 0–100 | Google Form sau task |
| Probe questions | Clarity, error recovery, speed, trust | Interview ngắn |

**Probe questions:**

1. Clarity — “Bạn có hiểu ngay mình cần làm gì để đăng ký không?”
2. Error recovery — “Khi điền sai / thiếu, hệ thống giúp bạn sửa thế nào?”
3. Speed — “Bước nào mất thời gian nhất?”
4. Trust — “Bạn có tin thông tin event (giờ, địa điểm, slots) là đáng tin không? Vì sao?”
5. (tuỳ chọn) — “Bạn sẽ giới thiệu EMS cho bạn cùng lớp không (0–10)?”

#### Participants (5 real users ngoài lớp)

| # | Họ tên | Profile | Liên hệ (che 4 số giữa) | Consent |
|---|---|---|---|---|
| P1 | Trần B | student | Zalo 09xx••••31 | Y |
| P2 | Lê C | student | email l***@gmail.com | Y |
| P3 | Phạm D | guest | Zalo 08xx••••77 | Y |
| P4 | Hoàng E | student | phone 09xx••••05 | Y |
| P5 | Võ F | lecturer (thỉnh giảng) | email v***@fit.hcmus.edu.vn | Y |

> SAMPLE contacts — bài thật phải là người thật; TA có thể gọi xác minh.

#### Pilot session

| Trường | Giá trị |
|---|---|
| Pilot participant | Bạn G (ngoài 5 người chính) |
| Ngày | 2026-07-21 |
| Vấn đề phát hiện | Task cũ viết “bấm Register rồi chọn role” → quá leading |
| Thay đổi | Đổi sang goal-oriented; bỏ hướng dẫn từng click |

### 4.2 Phase 2 — Session notes

#### Session P1

| Trường | Giá trị |
|---|---|
| Ngày / thời lượng | 2026-07-22 · 12 phút (task 6:40) |
| Environment | macOS · Chrome · Desktop |
| Think-aloud consent | Y |
| Recording | `evidence/t2/P1_screen.mp4` |
| Task success | Completed |
| Time on task | 400 s |
| Errors / hesitations | 2 hesitations ở carousel; 1 click nhầm category |
| Friction points | Không thấy rõ event nào còn slot |
| Điểm SUS | 72.5 |
| Câu trả lời probe | Clarity OK; muốn filter “còn chỗ” |

#### Session P2

| Trường | Giá trị |
|---|---|
| Ngày / thời lượng | 2026-07-22 · 14 phút (task 8:10) |
| Environment | Windows · Edge · Desktop |
| Think-aloud consent | Y |
| Recording | `evidence/t2/P2_screen.mp4` |
| Task success | Completed |
| Time on task | 490 s |
| Errors / hesitations | Submit trống 1 lần; bối rối vì toast không chỉ field |
| Friction points | Validation trên B3 |
| Điểm SUS | 65.0 |
| Câu trả lời probe | Error recovery kém |

#### Session P3

| Trường | Giá trị |
|---|---|
| Ngày / thời lượng | 2026-07-23 · 11 phút (task 9:55) |
| Environment | Android · Chrome · Phone |
| Think-aloud consent | Y |
| Recording | `evidence/t2/P3_screen.mp4` |
| Task success | Partial |
| Time on task | 595 s |
| Errors / hesitations | 4 — CTA Register bị đẩy dưới fold trên phone |
| Friction points | Mobile layout detail; mất thời gian scroll |
| Điểm SUS | 55.0 |
| Câu trả lời probe | Speed kém trên mobile |

#### Session P4

| Trường | Giá trị |
|---|---|
| Ngày / thời lượng | 2026-07-23 · 10 phút (task 5:20) |
| Environment | macOS · Safari · Desktop |
| Think-aloud consent | Y |
| Recording | `evidence/t2/P4_screen.mp4` |
| Task success | Completed |
| Time on task | 320 s |
| Errors / hesitations | 1 |
| Friction points | Ít; quen web app |
| Điểm SUS | 80.0 |
| Câu trả lời probe | Trust cao vì có FIT branding trên [login/home](https://prod-dev.ems-fitus.cloud/dashboard) |

#### Session P5

| Trường | Giá trị |
|---|---|
| Ngày / thời lượng | 2026-07-24 · 13 phút (task 7:05) |
| Environment | iPadOS · Safari · Tablet |
| Think-aloud consent | Y |
| Recording | `evidence/t2/P5_screen.mp4` |
| Task success | Completed |
| Time on task | 425 s |
| Errors / hesitations | 2 — lẫn ngôn ngữ EN/VI trên badge |
| Friction points | i18n inconsistency |
| Điểm SUS | 70.0 |
| Câu trả lời probe | Clarity trung bình vì badge EN |

### 4.3 Phase 3 — Phân tích & báo cáo

#### Bảng metrics

| Participant | Success | Time (s) | Errors | SUS |
|---|---|---:|---:|---:|
| P1 | Completed | 400 | 3 | 72.5 |
| P2 | Completed | 490 | 4 | 65.0 |
| P3 | Partial | 595 | 4 | 55.0 |
| P4 | Completed | 320 | 1 | 80.0 |
| P5 | Completed | 425 | 2 | 70.0 |
| **Tổng hợp** | Success rate = **80%** (4/5 Completed) | Mean = **446 s** | Mean = **2.8** | Mean = **68.5** |

#### Usability findings đã xếp hạng

| ID | Finding | Type | Severity (0–4) | Screens | Evidence | Suggested fix |
|---|---|---|---|---|---|---|
| U-001 | Validation lỗi không gắn field trên registration | Bug | 3 | B3 | `evidence/t2/U-001.png` | Inline error + aria-invalid |
| U-002 | CTA Register khó thấy trên phone (below the fold) | Usability | 3 | B2 | `evidence/t2/U-002.png` | Sticky CTA / đưa nút lên trên fold |
| U-003 | Thiếu empty state khi filter không có kết quả | Bug | 2 | B1 | `evidence/t1b/B1/CHK-005.png` | Empty message + Clear filters |
| U-004 | Badge status Full/Waitlist khó phân biệt màu | Usability | 2 | B1 | `evidence/t2/U-004.png` | Đổi palette + kèm text |
| U-005 | Lẫn EN/VI trên một số label/badge | Usability | 2 | B1, B2 | `evidence/t2/U-005.png` | Audit i18n keys |
| U-006 | Không breadcrumb trên detail | Usability | 1 | B2 | `evidence/t1b/B2/CHK-020.png` | Thêm Home > Events > Title |
| U-007 | Floating social che nội dung khi scroll mobile | Usability | 1 | B2, B3 | `evidence/t2/U-007.png` | Dời FAB / giảm z-index khi focus form |

#### Recommendations theo mức ưu tiên

1. **High** — Inline validation trên B3; sticky Register trên mobile B2
2. **Medium** — Empty state B1; chuẩn hoá i18n; tách màu status badges
3. **Low** — Breadcrumb; chỉnh FAB social khi đang fill form

---

## 5. Task 3 — Cross-Browser / Cross-Platform (Cá nhân)

### 5.1 Chính sách coverage

Với mỗi screen (B1, B2, B3), cover ít nhất:

- **3 OS:** Windows, macOS, Android
- **5 browsers:** Chrome, Firefox, Safari, Edge, Samsung Internet
- **3 device classes:** desktop, tablet, phone

**Tool đã dùng:** BrowserStack trial + 1 máy thật (macOS Safari)

### 5.2 Compatibility matrix — Screen 1: `B1`

| # | OS | Browser | Device class | Device model | Result | Screenshot (overlay `25127999@student.hcmus.edu.vn`) | Ghi chú defect |
|---|---|---|---|---|---|---|---|
| 1 | Windows | Chrome | Desktop | Win11 | Pass | `evidence/t3/B1/win-chrome-desk.png` | — |
| 2 | macOS | Safari | Desktop | macOS Sequoia | Pass | `evidence/t3/B1/mac-safari-desk.png` | — |
| 3 | Android | Chrome | Phone | Pixel 7 | Pass | `evidence/t3/B1/and-chrome-phone.png` | — |
| 4 | Android | Samsung Internet | Tablet | Galaxy Tab S8 | Pass | `evidence/t3/B1/and-samsung-tablet.png` | — |
| 5 | Windows | Firefox | Desktop | Win11 | Fail | `evidence/t3/B1/win-firefox-desk.png` | Carousel dots overlap caption nhẹ |

**Kiểm tra coverage (B1):** OS ✓ · Browsers ✓ (Chrome, Safari, Samsung, Firefox; Edge cover ở B2) · Device classes ✓

### 5.3 Compatibility matrix — Screen 2: `B2`

| # | OS | Browser | Device class | Device model | Result | Screenshot | Ghi chú defect |
|---|---|---|---|---|---|---|---|
| 1 | Windows | Edge | Desktop | Win11 | Pass | `evidence/t3/B2/win-edge-desk.png` | — |
| 2 | macOS | Chrome | Desktop | Sequoia | Pass | `evidence/t3/B2/mac-chrome-desk.png` | — |
| 3 | Android | Chrome | Phone | Pixel 7 | Fail | `evidence/t3/B2/and-chrome-phone.png` | CTA Register below fold; FAB che schedule |
| 4 | iOS | Safari | Tablet | iPad (BrowserStack) | Pass | `evidence/t3/B2/ios-safari-tablet.png` | — |
| 5 | macOS | Firefox | Desktop | Sequoia | Pass | `evidence/t3/B2/mac-firefox-desk.png` | — |

### 5.4 Compatibility matrix — Screen 3: `B3`

| # | OS | Browser | Device class | Device model | Result | Screenshot | Ghi chú defect |
|---|---|---|---|---|---|---|---|
| 1 | Windows | Chrome | Desktop | Win11 | Pass | `evidence/t3/B3/win-chrome-desk.png` | — |
| 2 | macOS | Safari | Desktop | Sequoia | Pass | `evidence/t3/B3/mac-safari-desk.png` | — |
| 3 | Android | Chrome | Phone | Pixel 7 | Fail | `evidence/t3/B3/and-chrome-phone.png` | Keyboard đẩy form; Submit bị che tạm thời |
| 4 | Android | Firefox | Tablet | Galaxy Tab S8 | Pass | `evidence/t3/B3/and-firefox-tablet.png` | — |
| 5 | Windows | Opera | Desktop | Win11 | Pass | `evidence/t3/B3/win-opera-desk.png` | — |

### 5.5 Cross-platform defects

| ID | Screen | Cell | Defect | Severity | Screenshot | Form timestamp |
|---|---|---|---|---|---|---|
| XP-001 | B2 | Android / Chrome / Phone | CTA + FAB overlap / below-fold | Major | `evidence/t3/B2/and-chrome-phone.png` | 2026-07-24 16:05 |
| XP-002 | B1 | Windows / Firefox / Desktop | Carousel caption overlap | Minor | `evidence/t3/B1/win-firefox-desk.png` | 2026-07-24 16:22 |
| XP-003 | B3 | Android / Chrome / Phone | Soft keyboard che Submit | Major | `evidence/t3/B3/and-chrome-phone.png` | 2026-07-24 16:40 |

---

## 6. Bug & Usability Findings Log (Tổng hợp)

| ID | Scenario/Screen | Type | Description | Steps / Heuristic | Severity | Suggested fix | Screenshot ref | Form-submission timestamp |
|---|---|---|---|---|---|---|---|---|
| F-001 | B / B1 | Bug | Empty state thiếu khi filter không có kết quả | Steps: filter category rỗng · Nielsen #1 | Major | Empty + Clear filter | `t1b/B1/CHK-005` | 2026-07-22 09:14 |
| F-002 | B / B3 | Bug | Validation không gắn field | Submit trống · Nielsen #9 | Major | Inline errors | `t1b/B3/CHK-012` | 2026-07-22 09:31 |
| F-003 | B / B3 | Bug | Double-submit có thể xảy ra | Double-click Submit | Minor | Disable + loading | `t1b/B3/CHK-014` | 2026-07-22 09:40 |
| F-004 | B / B2 | Usability | CTA Register khó thấy trên phone | User testing P3 · Visibility | Major | Sticky CTA | `t2/U-002` | 2026-07-23 11:20 |
| F-005 | B / B1-B2 | Usability | Lẫn EN/VI trên badge/label | Heuristic Consistency / i18n | Medium | Audit locale keys | `t2/U-005` | 2026-07-23 11:35 |
| F-006 | B / B2-B3 | Bug | Soft keyboard / FAB che control trên Android Chrome | XP matrix | Major | Scroll-into-view Submit; ẩn FAB khi focus | `t3/B3/and-chrome-phone` | 2026-07-24 16:40 |

**Số lượng:** Bugs **4** · Usability **2** · Form submissions **6**

---

## 7. Agent Skills

| Tên skill | Mục đích | Path / repo | Demo video |
|---|---|---|---|
| `ems-gui-checklist` | Nhắc Pass/Fail theo IA khi review một screen | `skills/ems-gui-checklist/SKILL.md` | https://youtube.com/watch?v=SAMPLE_skill_demo_B3 |
| `ems-usability-session` | Template ghi session notes + SUS | `skills/ems-usability-session/SKILL.md` | (cùng video phút 3:10) |
| `ems-compat-matrix` | Sinh bảng coverage tối thiểu 3 OS × 5 browsers × 3 devices | `skills/ems-compat-matrix/SKILL.md` | (cùng video phút 6:00) |

**Cách dùng skill (end-to-end trên B3):**

1. Mở registration form trên EMS
2. Gọi skill `ems-gui-checklist` với context “Scenario B / B3 / IA-02+IA-04”
3. AI đề xuất Pass/Fail nháp → người review + gắn screenshot Fail
4. Xuất dòng findings → copy sang Google Form + Findings Log

---

## 8. AI Audit Report (Phụ lục bắt buộc)

### Tuyên bố

- [ ] Tôi không dùng bất kỳ sự hỗ trợ nào từ AI trong bài này.
- [x] Tôi dùng AI tools cho các việc sau:

### Interaction log

| # | Tool | Ngày & giờ | Task | Prompt | AI output (tóm tắt) | Human review / chỉnh sửa |
|---|---|---|---|---|---|---|
| 1 | ChatGPT | 2026-07-20 14:10 | Checklist draft | Xem §2.4 | 35 items generic | Nhóm bổ sung i18n/a11y/empty state → 48 items |
| 2 | Claude | 2026-07-22 10:00 | Phân nhóm findings | “Cluster these session notes into severity 0–4” | Gộp U-001 với BUG-002 đúng; đề xuất sev sai 1 chỗ | Đổi U-004 từ sev3 → sev2 |
| 3 | Cursor | 2026-07-24 17:00 | Sinh compatibility matrix tối thiểu | “Ensure each OS/browser/device class ≥1 per screen” | Matrix 5 cells/screen | Sửa Opera/Samsung cho đủ 5 browsers |
| 4 | ChatGPT | 2026-07-25 09:00 | Soạn đoạn AI Critique | “Draft 250 words critique…” | Văn phong chung chung | Viết lại bằng quan sát thật từ EMS login/form |

---

## 9. AI Critique (200–300 từ, bắt buộc)

```text
Trong HW03, AI hữu ích khi sinh khung checklist và gợi ý ma trận cross-platform, nhưng liên tục thiên về “happy path” của web app generic. Draft đầu chỉ ~35 items và gần như bỏ empty state, EN/VI i18n, và keyboard tab order — đúng những chỗ EMS bộc lộ vấn đề khi test thật trên https://prod-dev.ems-fitus.cloud/ (form login HeroUI, floating social, bilingual UI). Khi nhờ AI xếp severity từ session notes, model có lúc phóng đại vấn đề thẩm mỹ thành sev3 trong khi user vẫn Complete task; ngược lại, CTA bị đẩy dưới fold trên mobile bị đánh giá nhẹ dù làm P3 chỉ Partial. Nguyên nhân gốc là AI thiếu telemetry thật (screenshot, recording, thời gian pause) và không “nhìn” layout responsive. Bài học: dùng AI như trợ lý kỷ luật theo đúng kỹ thuật đã học (heuristic → checklist → execute → user test → compat), không như hộp đen “tìm hết bug giúp tôi”. Mọi Pass/Fail, severity và recommendation phải qua human review với evidence trên SUT sống; raw AI output không đủ để nộp.
```

Số từ: ~210

---

## 10. Git Commit Log

| Commit | Bước | Message |
|---|---|---|
| a1b2c3d | Checklist design | `docs(hw03): add shared GUI checklist IA-01..04 (48 items)` |
| e4f5a6b | Execution B1 | `test(hw03): execute checklist on B1 home listing` |
| 778899a | Execution B2 | `test(hw03): execute checklist on B2 event detail` |
| bbccdde | Execution B3 | `test(hw03): execute checklist on B3 registration form` |
| 112233f | Bug logging | `docs(hw03): log BUG-001..003 and sync findings form` |
| 445566a | User testing | `docs(hw03): add 5-user sessions, SUS scores, usability report` |
| 7788aab | Cross-platform | `test(hw03): capture compat matrix for B1-B3` |
| 99aa00b | Report | `docs(hw03): finalize report, AI audit, self-assessment 085` |

```bash
# SAMPLE — bài thật dán git log thật vào git_commit_log.txt
a1b2c3d docs(hw03): add shared GUI checklist IA-01..04 (48 items)
e4f5a6b test(hw03): execute checklist on B1 home listing
778899a test(hw03): execute checklist on B2 event detail
bbccdde test(hw03): execute checklist on B3 registration form
112233f docs(hw03): log BUG-001..003 and sync findings form
445566a docs(hw03): add 5-user sessions, SUS scores, usability report
7788aab test(hw03): capture compat matrix for B1-B3
99aa00b docs(hw03): finalize report, AI audit, self-assessment 085
```

---

## 11. Checklist nộp bài (SAMPLE đã “tick” minh họa)

### Artefacts nhóm

- [x] Shared GUI checklist (>40 items, IA-01…IA-04)
- [x] Danh sách reference sources
- [x] AI prompts dùng để xây checklist

### Zip cá nhân

Tên file mẫu: `25127999_HW03_AI_GUIUsability_EMS_085.zip`

- [x] Main report (Markdown + PDF)
- [x] Evidence user-testing
- [x] Bug & Usability Findings Log
- [x] Screenshots cross-platform (overlay MSSV)
- [x] AI Critique + AI Audit Report
- [x] Git commit log
- [x] Agent Skills + demo video
- [x] `README.md`
- [ ] *(bài thật nhớ đủ evidence ảnh/video — SAMPLE chỉ có path giả)*

### Cấu trúc thư mục (như template)

```text
25127999_HW03_AI_GUIUsability_EMS_085/
├── README.md
├── Report.md          ← nội dung file SAMPLE này
├── Report.pdf
├── group/
│   ├── GUI_Checklist.md
│   ├── Reference_Sources.md
│   └── Checklist_AI_Prompts.md
├── evidence/
│   ├── t1b/
│   ├── t2/
│   └── t3/
├── Bug_Usability_Findings_Log.md
├── AI_Audit_Report.md
├── AI_Critique.md
├── git_commit_log.txt
└── skills/
```

---

## Ghi chú cho bạn khi copy sang bài thật

1. Đổi Scenario nếu nhóm phân bạn A/C/D — cấu trúc giữ nguyên, chỉ đổi screens + task scenario.
2. Đăng nhập EMS: admin cho A/C; guest/student qua [Create guest account](https://prod-dev.ems-fitus.cloud/login) / OAuth Lecturer|Student cho B/D user-side.
3. `/dashboard` yêu cầu login — evidence phải chụp sau khi đã vào được đúng screen.
4. Mỗi Fail / finding cần screenshot thật + Form timestamp thật.
5. Participants phải ngoài lớp; đừng dùng tên SAMPLE như trên.
