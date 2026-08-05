# Agent-skill demo — recording script (for the YouTube demo required by §8)

**Student:** Huỳnh Gia Âu · MSSV `23127153`
**Skill demonstrated:** `ems-gui-checklist` (executing the shared GUI checklist end-to-end on one EMS screen)
**Recommended screen:** **D3** — admin support request management (richest screen: status tabs, multi-filter, date range, respond form)
**Target length:** 4–6 minutes
**Where to paste the link when done:** `submission/README.md` → *Demo videos* row, and `submission/Report.md` → §7 *Demo video*. Both must show the same URL.

---

## Before you hit record

1. QuickTime Player → *File* → *New Screen Recording* (or `Cmd+Shift+5`). Record the full screen with microphone on.
2. Have two browser tabs ready: the EMS admin list `https://prod-dev.ems-fitus.cloud/dashboard/admin/complaints` (logged in as `admin@gmail.com`) and this repo open in Cursor.
3. Put your student ID visibly on screen — either a sticky note window with `23127153 · Huỳnh Gia Âu · hgau23@clc.fitus.edu.vn` or the terminal showing `git config user.name`.

---

## Segment 1 — Identify yourself (0:00–0:25)

Say: “Xin chào, em là Huỳnh Gia Âu, MSSV 23127153, nhóm 2. Đây là demo Agent Skill `ems-gui-checklist` cho HW03, Scenario D trên hệ thống EMS.” Show the ID on screen while saying it.

## Segment 2 — Show the skill itself (0:25–1:15)

1. Open `submission/skills/ems-gui-checklist/SKILL.md` in Cursor.
2. Point at the three things that make it reusable: the **Inputs** section (screen ID D1/D2/D3), the **Procedure** (load checklist IDs → score Pass/Fail/N/A → Fail requires note + screenshot), and the **evidence path rule** `evidence/t1b/{screen}/{ID}.png`.
3. Say why the path rule matters: it is what makes every Fail traceable to a file a grader can open.

## Segment 3 — Invoke the skill on D3 (1:15–3:00)

1. In Cursor chat, invoke the skill on screen D3 (e.g. “Use the `ems-gui-checklist` skill to execute the checklist on screen D3”).
2. Let it load `submission/group/GUI_Checklist.md` and start scoring — show the agent reading the checklist IDs.
3. Show the live EMS screen next to it so the audience sees the scoring is against real UI, not imagination.

## Segment 4 — Show one real Fail being evidenced (3:00–4:30)

Use **IA02-08** (the date-filter defect) because it is quick and visual:

1. On the admin list, set **Từ ngày = 31/12/2026** and **Đến ngày = 01/01/2026**.
2. Point out that the app accepts From > To with no validation and no error — only an empty result (`Không có yêu cầu phù hợp.`).
3. Show the resulting evidence file `submission/evidence/t1b/D3/IA02-08.png` with the `23127153` overlay, and the matching row in `submission/evidence/t1b/D3_execution.md`.

## Segment 5 — Show the output artefact + close (4:30–5:30)

1. Open `submission/evidence/t1b/D3_execution.md`: summary **25 Pass / 4 Fail / 11 N/A** out of 40, and the four Fail rows each pointing at a real PNG.
2. Say the reuse claim plainly: the same skill produced D1, D2 and D3 with identical structure, so it works on any other EMS screen.
3. Close with: “Toàn bộ evidence và commit history có trong repo public `23127153-hw03-ems`.”

---

## After recording

1. Upload to YouTube. Visibility **Unlisted** is enough (the TA needs the link, not public search).
2. Title suggestion: `HW03 – Agent Skill demo (ems-gui-checklist) on EMS D3 – 23127153 Huỳnh Gia Âu`.
3. Paste the URL into **both** places listed at the top of this file, then re-run the packaging step so the zip contains the updated files.

## Honesty note

Until the URL is filled in, `README.md` records the Agent-Skills demo as **not yet submitted** and the
self-assessed score for that criterion is reduced accordingly. Do not leave a fabricated link.
