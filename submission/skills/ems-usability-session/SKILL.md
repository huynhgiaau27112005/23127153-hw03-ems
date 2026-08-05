---
name: ems-usability-session
description: >-
  Run a Scenario D usability session on EMS support screens: load the task
  script, capture success/time/errors/SUS/probes into a session table.
  Use when facilitating Task 2 user testing or writing session notes.
---

# EMS Usability Session Capture

Facilitate one Scenario D usability session and record metrics into a fixed session table.

## Binding

| Field | Value |
| --- | --- |
| Student | `23127153` |
| Scenario | D — User creates a support request and follows it |
| Primary screens | **D1** create request; **D2** My Requests list/detail (D3 optional observer context) |
| Evidence root | `submission/evidence/t2/` |

## Task script (load and read aloud as goal — not click steps)

> You ran into a problem while using EMS (e.g. registration/event issue). Create a support request with a clear description and an image attachment if possible, then follow it in My Requests until you can see the request detail / status / official response (or at least reopen the request you just created). Think aloud. It is OK to get stuck — say what you are thinking.

### Success criteria

| Outcome | Definition |
| --- | --- |
| Completed | Request created **and** opened again in My Requests / detail |
| Partial | Created but cannot find / reopen the request |
| Failed | Cannot submit within the session window (≤ ~10 min) |

## Procedure

1. Load the task script above; do **not** give step-by-step click instructions.
2. Record environment (OS, browser, device, EMS URL, facilitator).
3. Start timer when the participant begins; observe think-aloud.
4. Capture during/after the session:
   - **Success** — Completed / Partial / Failed
   - **Time on task** — seconds (and mm:ss)
   - **Errors / hesitations** — count + short notes
   - **Friction notes** — blockers, confusing labels, recovery attempts
   - **SUS** — 10 standard items, then score 0–100
   - **Probes** — clarity, error recovery, speed, trust (short answers)
5. Fill the session table template below into `submission/evidence/t2/` (one file per participant or one combined log).

## Session table template

```markdown
# Usability Session — P{n}

| Field | Value |
| --- | --- |
| Participant | P{n} — {Name} · {Profile} |
| Consent | Y/N |
| Date / time | |
| Environment | OS · Browser · Device · EMS URL |
| Facilitator | 23127153 |
| Screens touched | D1 / D2 (/ D3) |

## Task outcome

| Metric | Value |
| --- | --- |
| Success | Completed / Partial / Failed |
| Time on task (s) | |
| Time on task (mm:ss) | |
| Error / hesitation count | |
| Friction notes | |

## SUS (1=Strongly disagree … 5=Strongly agree)

| # | Item | Score (1–5) |
| --- | --- | --- |
| 1 | I think that I would like to use this system frequently | |
| 2 | I found the system unnecessarily complex | |
| 3 | I thought the system was easy to use | |
| 4 | I would need the support of a technical person to use this system | |
| 5 | I found the various functions in this system were well integrated | |
| 6 | I thought there was too much inconsistency in this system | |
| 7 | I would imagine that most people would learn to use this system very quickly | |
| 8 | I found the system very cumbersome to use | |
| 9 | I felt very confident using the system | |
| 10 | I needed to learn a lot of things before I could get going with this system | |
| | **SUS score (0–100)** | |

SUS formula: odd items → `score - 1`; even items → `5 - score`; sum × 2.5.

## Probe questions

| Probe | Response |
| --- | --- |
| Clarity — Was it clear what to do next? | |
| Error recovery — When something went wrong, could you recover? | |
| Speed — Did the flow feel reasonably fast? | |
| Trust — Do you trust that the request was recorded / will be handled? | |

## Screenshots / notes

- Path pattern: `evidence/t2/P{n}_{label}.png`
```

## Output checklist

- [ ] Scenario D task script loaded (goal-oriented, not click recipe)
- [ ] Success / time / errors captured
- [ ] SUS 10 items + 0–100 score
- [ ] Probes (clarity, error recovery, speed, trust) filled
- [ ] Session table saved under `submission/evidence/t2/`
