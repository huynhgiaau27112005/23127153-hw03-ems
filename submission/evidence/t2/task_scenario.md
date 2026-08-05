# Task 2 — Usability task scenario (Scenario D)

| Field | Value |
|---|---|
| Student | Huỳnh Gia Âu · MSSV `23127153` |
| Scenario | **D** — Support request lifecycle (D1 create → D2 My Requests list/detail; D3 admin as observer context) |
| SUT | https://prod-dev.ems-fitus.cloud/ |
| Primary URLs | D1 `/complaints/new` · D2 `/complaints`, `/complaints/97` · D3 `/dashboard/admin/complaints` |

---

## Task scenario given to participants

*(Exact wording from design spec §7 — read aloud as the goal; do **not** give click-by-click instructions.)*

> You ran into a problem while using EMS (e.g. registration/event issue). Create a support request with a clear description and an image attachment if possible, then follow it in My Requests until you can see the request detail / status / official response (or at least reopen the request you just created). Think aloud. It is OK to get stuck — say what you are thinking.

### Success criteria

| Outcome | Definition |
|---|---|
| **Success** | Request created **and** opened again in My Requests / detail |
| **Partial** | Created but cannot find / reopen the request |
| **Fail** | Cannot submit within the session window (≤ ~10 min) |

---

## Pilot run note

Before the five recorded sessions, facilitator Huỳnh Gia Âu ran a **pilot** (≈12 minutes) with one extra volunteer (not counted in P1–P5) on the live D1 → D2 flow.

**Pilot adjustments applied to the main sessions:**

1. Emphasise think-aloud: ask participants to say when labels feel mixed VI/EN or when they cannot find where they are (breadcrumb).
2. Do not hint about the bottom validation alert — let them discover empty-submit behaviour.
3. Cap active task time at ~10 minutes; after that mark Fail/Partial and move to SUS + probes.
4. Confirm consent and that screen may be observed by the facilitator on the same laptop / shared screen.

---

## Think-aloud probes (during task)

Use sparingly when the participant goes silent ≥15–20 s:

- “What are you looking for right now?”
- “What do you expect that control to do?”
- “Where do you think you are in the flow?”
- “What would you try next?”

Do **not** coach the correct navigation path.

---

## System Usability Scale (SUS)

Rate each item from **1 = Strongly disagree** to **5 = Strongly agree**.

| # | Item |
|---|---|
| 1 | I think that I would like to use this system frequently |
| 2 | I found the system unnecessarily complex |
| 3 | I thought the system was easy to use |
| 4 | I would need the support of a technical person to use this system |
| 5 | I found the various functions in this system were well integrated |
| 6 | I thought there was too much inconsistency in this system |
| 7 | I would imagine that most people would learn to use this system very quickly |
| 8 | I found the system very cumbersome to use |
| 9 | I felt very confident using the system |
| 10 | I needed to learn a lot of things before I could get going with this system |

**Scoring (standard):** odd items → `score − 1`; even items → `5 − score`; sum all contributions × **2.5** → SUS 0–100.

---

## Post-task probe questions

| Probe | Question |
|---|---|
| Clarity | Was it clear what to do next? |
| Error recovery | When something went wrong, could you recover? |
| Speed | Did the flow feel reasonably fast? |
| Trust | Do you trust that the request was recorded / will be handled? |
