# HW03 – GUI & Usability Testing trên EMS

| Trường | Giá trị |
|---|---|
| Student ID | `MSSV` |
| Họ và tên | |
| Group | |
| Scenario | A / B / C / D |
| Screens đã test | vd. A1, A2, A3 |
| Điểm tự đánh giá (Self-assessed grade) | `/100` |
| SUT URL | https://prod-dev.ems-fitus.cloud/ |
| Ngày nộp | YYYY-MM-DD |

---

## 0. README / Tóm tắt Self-Assessment

> Giữ thêm một file `README.md` độc lập trong zip, chứa bảng này và phần tóm tắt test ngắn.

### Bảng Self-assessment

| No. | Tiêu chí | Max | Tự chấm |
|---|---|---:|---:|
| 1a | Task 1A — Shared checklist (>40 items, IA-01…IA-04) + references + AI prompts (nhóm) | 15 | |
| 1b | Task 1B — Checklist execution trên ≥3 screens + bug reports (cá nhân) | 15 | |
| 2 | Task 2 — User testing với 5 real users → Usability Report | 25 | |
| 3 | Task 3 — Cross-browser / cross-platform matrix | 25 | |
| 4 | Bug & Usability Findings (Google Form + aggregated log) | 10 | |
| 5 | Agent Skills + demo videos | 10 | |
| | **Tổng** | **100** | |

### Tóm tắt test nhanh

- Scenario đã chọn:
- Screens đã test (≥3) và lý do:
- Checklist items: designed / executed / passed / failed:
- Số bugs tìm được:
- User-testing participants: 5
- Usability issues theo severity (0–4):
- Compatibility cells đã cover:
- Link demo videos:

---

## 1. Chọn Scenario & Screens (Cá nhân)

### 1.1 Scenario đã chọn

- **Scenario:** A / B / C / D
- **Function group:**
- **Lý do chọn scenario này:**

### 1.2 Screens under test (≥ 3)

| # | Screen ID | Tên screen | URL / path | Lý do chọn |
|---|---|---|---|---|
| 1 | vd. A1 | | | |
| 2 | vd. A2 | | | |
| 3 | vd. A3 | | | |

### 1.3 Kiểm tra không trùng (nhóm)

Xác nhận không có thành viên nào cùng sở hữu **cùng scenario** và **cùng bộ screens**.

| Thành viên | Scenario | Screens |
|---|---|---|
| Bạn | | |
| Teammate 1 | | |
| Teammate 2 | | |
| Teammate 3 | | |

---

## 2. Task 1A — Shared GUI Checklist (Nhóm)

> Artefact của nhóm. Giữ một bản copy trong zip cá nhân. Checklist đầy đủ có thể đặt tại `group/GUI_Checklist.md` hoặc Excel.

### 2.1 Tổng quan checklist

| Aspect | Mô tả | Số items |
|---|---|---:|
| IA-01 | General UI standards (layout, alignment, typography, colour, consistency, i18n EN/VI, empty/loading) | |
| IA-02 | Forms (labels, validation, error placement, required fields, uploads, rich-text) | |
| IA-03 | Navigation (menus, breadcrumbs, tabs, sidebar, DnD, back/return, deep links) | |
| IA-04 | Feedback / state (toasts, badges, confirmations, progress, status colours, real-time) | |
| | **Tổng (bắt buộc > 40)** | |

### 2.2 Checklist (trích hoặc link file đầy đủ)

| ID | Aspect | Item / câu hỏi | Heuristic / nguồn | Pass criteria |
|---|---|---|---|---|
| CHK-001 | IA-01 | | Nielsen #… / Norman / Shneiderman / course | |
| CHK-002 | IA-01 | | | |
| … | … | … | … | … |

> File đầy đủ: `group/GUI_Checklist.md` (hoặc `.xlsx`)

### 2.3 Reference sources

| # | Nguồn | Loại | Cách dùng |
|---|---|---|---|
| 1 | Nielsen — 10 Usability Heuristics | Heuristic | |
| 2 | Norman — Design of Everyday Things (6 principles) | Principle | |
| 3 | Shneiderman — Eight Golden Rules | Rule | |
| 4 | Course slides: GUI + Usability + Compatibility | Lecture | |
| 5 | ISTQB Foundation Level Syllabus | Standard | |
| 6 | | | |

### 2.4 AI prompts dùng để xây / tinh chỉnh checklist

| # | Tool | Ngày/giờ | Mục đích | Prompt (tóm tắt hoặc đầy đủ) | Kết quả |
|---|---|---|---|---|---|
| 1 | | | Initial draft | | |
| 2 | | | Refine IA-02 | | |
| 3 | | | Thêm items đặc thù EMS | | |

### 2.5 Items do người thêm (ngoài AI output)

Với mỗi item bạn thêm sau khi review AI output:

| Checklist ID | Item | Vì sao AI bỏ sót | Bạn học được gì |
|---|---|---|---|
| | | Prompt quality / model limit / đặc thù EMS / a11y / i18n / … | |

---

## 3. Task 1B — Checklist Execution (Cá nhân)

Chạy **shared checklist** trên **từng** screen (≥ 3). Đánh dấu mỗi item Pass/Fail. Bắt buộc có Notes khi Fail. Screenshot chỉ cho **các item Failed**.

### 3.1 Execution matrix — Screen 1: `[Screen ID — Tên]`

| Checklist ID | Aspect | Result (Pass/Fail) | Notes (bắt buộc nếu Fail) | Screenshot |
|---|---|---|---|---|
| CHK-001 | IA-01 | Pass / Fail | | `evidence/t1b/screen1/CHK-001.png` |
| CHK-002 | IA-01 | | | |
| … | … | … | … | … |

**Tóm tắt Screen 1:** Passed __ / Failed __ / N/A __

### 3.2 Execution matrix — Screen 2: `[Screen ID — Tên]`

| Checklist ID | Aspect | Result (Pass/Fail) | Notes (bắt buộc nếu Fail) | Screenshot |
|---|---|---|---|---|
| CHK-001 | IA-01 | | | |
| … | … | … | … | … |

**Tóm tắt Screen 2:** Passed __ / Failed __ / N/A __

### 3.3 Execution matrix — Screen 3: `[Screen ID — Tên]`

| Checklist ID | Aspect | Result (Pass/Fail) | Notes (bắt buộc nếu Fail) | Screenshot |
|---|---|---|---|---|
| CHK-001 | IA-01 | | | |
| … | … | … | … | … |

**Tóm tắt Screen 3:** Passed __ / Failed __ / N/A __

### 3.4 Bugs phát hiện khi chạy checklist

| Bug ID | Screen | Steps to reproduce | Expected | Actual | Severity | Screenshot | Form timestamp |
|---|---|---|---|---|---|---|---|
| BUG-001 | | 1. … 2. … 3. … | | | Critical / Major / Minor / Trivial | | |
| BUG-002 | | | | | | | |

> Đồng thời log mỗi finding lên Google Form: https://forms.gle/CJQFQCAXcsDbXDMM9  
> Tổng hợp vào `Bug_Usability_Findings_Log.md`.

---

## 4. Task 2 — User Testing → Usability Report (Cá nhân)

### 4.1 Phase 1 — Thiết kế & chuẩn bị

#### Task scenario (hướng mục tiêu, không viết từng click)

> Ví dụ (Scenario B): “Đăng ký một workshop sắp tới và cho tôi xem check-in QR của bạn.”

**Nội dung scenario đưa cho participants:**

```text
[Viết mục tiêu tại đây]
```

**Success criteria:**

- Completed:
- Partial:
- Failed:

#### Metrics cần đo

| Metric | Định nghĩa | Cách ghi nhận |
|---|---|---|
| Task success | Completed / Partial / Failed | Observation |
| Time on task | Số giây từ lúc bắt đầu đến kết thúc | Timer |
| Error / hesitation count | Click sai, backtrack, pause lâu | Notes |
| SUS hoặc UEQ-S | Questionnaire sau task | Form |
| Probe questions | Clarity, error recovery, speed, trust | Interview |

**Probe questions:**

1. Clarity —
2. Error recovery —
3. Speed —
4. Trust —
5. (tuỳ chọn) —

#### Participants (5 real users ngoài lớp)

| # | Họ tên | Profile (student/lecturer/guest) | Liên hệ (che 4 số giữa) | Consent (Y/N) |
|---|---|---|---|---|
| P1 | | | vd. Zalo 09xx••••12 / email | |
| P2 | | | | |
| P3 | | | | |
| P4 | | | | |
| P5 | | | | |

> TA có thể gọi ngẫu nhiên 2 participants. Mạo danh → 0 điểm Task 2.

#### Pilot session

| Trường | Giá trị |
|---|---|
| Pilot participant | |
| Ngày | |
| Vấn đề phát hiện ở task / flow | |
| Thay đổi trước khi chạy session thật | |

### 4.2 Phase 2 — Session notes (một khối cho mỗi participant)

#### Session P1

| Trường | Giá trị |
|---|---|
| Ngày / thời lượng | |
| Environment (OS/browser/device) | |
| Think-aloud consent | Y/N |
| Recording | path hoặc link |
| Task success | Completed / Partial / Failed |
| Time on task | |
| Errors / hesitations | |
| Friction points | |
| Điểm SUS / UEQ-S | |
| Câu trả lời probe (ngắn) | |

Lặp lại cho **P2 … P5**.

### 4.3 Phase 3 — Phân tích & báo cáo

#### Bảng metrics

| Participant | Success | Time (s) | Errors | SUS / UEQ-S |
|---|---|---:|---:|---:|
| P1 | | | | |
| P2 | | | | |
| P3 | | | | |
| P4 | | | | |
| P5 | | | | |
| **Tổng hợp** | Success rate = | Mean = | Mean = | Mean = |

#### Usability findings đã xếp hạng

| ID | Finding | Type (Bug / Usability) | Severity (0–4) | Screens | Evidence | Suggested fix |
|---|---|---|---|---|---|---|
| U-001 | | | | | `evidence/t2/...` | |
| U-002 | | | | | | |

#### Recommendations theo mức ưu tiên

1. High —
2. Medium —
3. Low —

---

## 5. Task 3 — Cross-Browser / Cross-Platform (Cá nhân)

### 5.1 Chính sách coverage

Với mỗi screen, cover ít nhất một lần mỗi loại sau:

- **3 OS:** vd. Windows, macOS, Android/iOS
- **5 browsers:** vd. Chrome, Firefox, Safari, Edge, Opera (hoặc Samsung Internet)
- **3 device classes:** desktop, tablet, phone

Không bắt buộc đủ mọi tổ hợp 3×5×3, nhưng mỗi OS / browser / device class phải xuất hiện ≥ một lần **cho mỗi screen**.

**Tool đã dùng:** BrowserStack / LambdaTest / Sauce Labs / real devices —

### 5.2 Compatibility matrix — Screen 1: `[Screen ID]`

| # | OS | Browser | Device class | Device model | Result (Pass/Fail) | Screenshot (có overlay `MSSV@….edu.vn`) | Ghi chú defect |
|---|---|---|---|---|---|---|---|
| 1 | Windows | Chrome | Desktop | | | `evidence/t3/s1/...` | |
| 2 | macOS | Safari | Desktop | | | | |
| 3 | Android | Chrome | Phone | | | | |
| 4 | | Firefox | Tablet | | | | |
| 5 | | Edge | | | | | |
| … | | Opera / … | | | | | |

**Kiểm tra coverage (Screen 1):** OS ✓/✗ · Browsers ✓/✗ · Device classes ✓/✗

### 5.3 Compatibility matrix — Screen 2: `[Screen ID]`

| # | OS | Browser | Device class | Device model | Result | Screenshot | Ghi chú defect |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| … | | | | | | | |

### 5.4 Compatibility matrix — Screen 3: `[Screen ID]`

| # | OS | Browser | Device class | Device model | Result | Screenshot | Ghi chú defect |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| … | | | | | | | |

### 5.5 Cross-platform defects

| ID | Screen | Cell (OS/Browser/Device) | Defect | Severity | Screenshot | Form timestamp |
|---|---|---|---|---|---|---|
| XP-001 | | | | | | |

---

## 6. Bug & Usability Findings Log (Tổng hợp)

> Phải khớp với các submission trên Google Form. Các cột theo yêu cầu §7.

| ID | Scenario/Screen | Type (Bug \| Usability) | Description | Steps / Heuristic | Severity | Suggested fix | Screenshot ref | Form-submission timestamp |
|---|---|---|---|---|---|---|---|---|
| F-001 | | Bug | | | | | | |
| F-002 | | Usability | | | | | | |

**Số lượng:** Bugs __ · Usability __ · Form submissions __

---

## 7. Agent Skills

| Tên skill | Mục đích | Path / repo | Demo video (YouTube) |
|---|---|---|---|
| | GUI checklist execution | `skills/...` | |
| | Heuristic / usability assist | | |
| | Compatibility matrix runs | | |

**Cách dùng skill (end-to-end trên một screen/flow):**

1.
2.
3.

---

## 8. AI Audit Report (Phụ lục bắt buộc)

### Tuyên bố

- [ ] Tôi không dùng bất kỳ sự hỗ trợ nào từ AI trong bài này.
- [ ] Tôi dùng AI tools cho các việc sau:

### Interaction log

| # | Tool | Ngày & giờ | Task | Prompt | AI output (tóm tắt hoặc đính kèm) | Human review / chỉnh sửa |
|---|---|---|---|---|---|---|
| 1 | ChatGPT / Claude / Gemini / Copilot / Cursor | | Checklist draft | | | |
| 2 | | | Usability analysis | | | |
| 3 | | | Cross-platform plan | | | |
| 4 | | | Soạn report | | | |

> Các prompts checklist của nhóm (Task 1A) cũng ghi vào đây.

---

## 9. AI Critique (200–300 từ, bắt buộc)

> AI sai / thiên lệch / thiếu ở đâu? Vì sao? Bạn học được nguyên tắc gì khi cộng tác với AI?

```text
[Viết 200–300 từ tại đây]
```

Số từ: __

---

## 10. Git Commit Log

> Mỗi bước testing một commit. Đính kèm log đầy đủ trong `git_commit_log.txt`.

| Commit | Bước | Message |
|---|---|---|
| | Checklist design | |
| | Checklist execution — screen 1 | |
| | Checklist execution — screen 2 | |
| | Checklist execution — screen 3 | |
| | Bug logging | |
| | User-testing design / sessions / analysis | |
| | Cross-platform run(s) | |
| | Report / packaging | |

```bash
# Dán `git log --oneline` (hoặc format đầy đủ hơn) bên dưới, hoặc trỏ tới git_commit_log.txt
```

---

## 11. Checklist nộp bài

### Artefacts nhóm (nộp 1 lần / nhóm; giữ bản copy trong mỗi zip)

- [ ] Shared GUI checklist (>40 items, IA-01…IA-04)
- [ ] Danh sách reference sources
- [ ] AI prompts dùng để xây checklist

### Nội dung zip cá nhân

Tên file: `<StudentID>_HW03_AI_GUIUsability_EMS_<SelfAssessedGrade>.zip`  
Ví dụ: `25127001_HW03_AI_GUIUsability_EMS_090.zip`

- [ ] Main report (Markdown + PDF)
- [ ] Evidence user-testing (scenario, 5 participants đã mask, session notes, SUS/UEQ-S, metrics, recordings nếu có)
- [ ] Bug & Usability Findings Log (khớp Google Form)
- [ ] Screenshots cross-platform (có overlay `MSSV@….edu.vn`)
- [ ] AI Critique + AI Audit Report (Markdown + PDF)
- [ ] Git commit log (text file)
- [ ] Agent Skills + link demo videos
- [ ] `README.md` với bảng self-assessment + tóm tắt test
- [ ] Tài liệu hỗ trợ / thư mục evidence

### Gợi ý cấu trúc thư mục trong zip

```text
MSSV_HW03_AI_GUIUsability_EMS_XXX/
├── README.md
├── Report.md
├── Report.pdf
├── group/
│   ├── GUI_Checklist.md          # hoặc .xlsx
│   ├── Reference_Sources.md
│   └── Checklist_AI_Prompts.md
├── evidence/
│   ├── t1b/                      # screenshots checklist Fail
│   ├── t2/                       # notes user-testing, SUS, recordings
│   └── t3/                       # screenshots cross-platform
├── Bug_Usability_Findings_Log.md
├── AI_Audit_Report.md
├── AI_Critique.md
├── git_commit_log.txt
└── skills/
    └── ...
```
