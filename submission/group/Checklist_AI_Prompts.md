# Checklist AI Prompts & Human-refined Items (Nhóm 2)

**Student:** Huỳnh Gia Âu · MSSV `23127153` · Nhóm 2  
**Source checklist:** `checklist.md` → normalized in `GUI_Checklist.md`

## 1. Prompts dùng để xây / tinh chỉnh checklist

| # | Tool | Ngày/giờ | Mục đích | Prompt (tóm tắt) | Kết quả |
| --- | --- | --- | --- | --- | --- |
| 1 | ChatGPT | 2026-07-26 10:15 | Initial draft IA-01…IA-04 | “Generate a GUI checklist ≥40 executable items for an Event Management System (EMS) web app covering IA-01 General UI, IA-02 Forms, IA-03 Navigation, IA-04 Feedback/State. Ground each criterion in Nielsen 10, Norman 6, and Shneiderman 8. Output Markdown tables with Component, Criterion, Expected, Source.” | ~32–35 items khá generic; thiếu i18n EN/VI, contrast Pass/Fail, double-submit, toast timing |
| 2 | Cursor (Composer) | 2026-07-26 14:40 | EMS-specific + Scenario D | “Expand the checklist for EMS Support flow (Create request, My Requests, Admin Support Requests). Add Pass/Fail thresholds for spacing (~8px), empty/loading states, upload preview, status badges (Pending/Resolved), and bilingual EN↔VI consistency. Keep IA01–IA04 IDs.” | Bổ sung mục EMS (upload 4:3/24:9, support statuses); vẫn còn vài tiêu chí mơ hồ |
| 3 | ChatGPT | 2026-07-27 16:20 | Human review pass | “Critique this EMS GUI checklist: which items cannot be judged Pass/Fail, which omit accessibility (WCAG contrast, colour-only status), keyboard nav, back-context retention, and toast/UI sync? Rewrite weak rows and mark Origin as Human-refined when AI would miss them.” | Nhóm đánh dấu Human-refined; siết criterion để thực thi trên D1/D2/D3 |

## 2. Items Human-refined (kéo từ Origin “Human-refined” trong checklist)

Ví dụ `IA*-EX` giữ lại để minh họa kiểu viết; **không** tính vào 40 tiêu chí thực thi.

| Checklist ID | Component / Item | Vì sao AI bỏ sót / cần người tinh chỉnh | Bạn học được gì |
| --- | --- | --- | --- |
| IA01-EX | Button / visual style | AI nêu “nhất quán” quá chung, chưa đủ điều kiện Pass/Fail | Tiêu chí phải quan sát được (nhãn/màu/kiểu xuyên màn) |
| IA01-04 | Colour / Contrast | AI hay bỏ a11y/contrast nếu prompt không nhắc | Luôn inject WCAG / contrast vào prompt |
| IA01-06 | i18n EN / VI | AI generic bỏ bilingual; EMS bắt buộc EN↔VI | Context SUT (locale) phải có trong prompt |
| IA01-09 | Responsive / Overflow | AI hay bỏ mobile overflow / truncation dữ liệu dài | Buộc kiểm tra viewport + text dài đặc thù EMS |
| IA02-EX | Required field / validation | Có validation nhưng bỏ vị trí lỗi + cách khắc phục | Error placement + recovery là bắt buộc |
| IA03-EX | Sidebar / tab / back action | Kiểm tra link hoạt động nhưng bỏ giữ ngữ cảnh khi Back | State restoration (scroll/filter) quan trọng |
| IA03-01 | Sidebar / Navigation menu | Có menu nhưng bỏ mức nổi bật của active state | Active affordance phải đủ rõ để Pass/Fail |
| IA03-02 | Back / Return action | Chỉ kiểm tra nút Back có click được | Back phải giữ màn hình + filter + scroll |
| IA03-05 | Main menu / Dropdown menu | Đánh giá tên menu phụ thuộc nghiệp vụ | Cần review ngôn ngữ UI theo domain EMS |
| IA03-06 | Menu hierarchy | AI đếm độ sâu nhưng không đánh giá nhóm chức năng | Information architecture cần phán đoán người |
| IA03-10 | Responsive navigation | Layout responsive ≠ trải nghiệm mở/đóng menu thật | Kiểm trên thiết bị/viewport thật |
| IA04-EX | Toast / status feedback | Chỉ yêu cầu “có toast”, bỏ kịp thời + đồng bộ UI | Toast + status sync phải đi cùng nhau |
| IA04-02 | Toast / notification | Bỏ thời gian hiển thị và vị trí che CTA | Timing + non-blocking placement |
| IA04-04 | Status badge / label | Bỏ accessibility / colour-only status | Status phải có text/icon, không chỉ màu |
| IA04-07 | Submit button / form control | Dễ miss double-submit khi mạng chậm | Disable/processing state khi submit |
| IA04-08 | Empty state / no-result state | AI ưu tiên happy path | Empty/no-result là kịch bản bắt buộc |
