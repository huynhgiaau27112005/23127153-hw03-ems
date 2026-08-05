---
name: ems-gui-checklist
description: >-
  Execute the shared EMS GUI checklist (Pass/Fail/N/A) on one Scenario D screen
  (D1, D2, or D3). Use when running Task 1 Part B checklist execution, scoring
  IA checklist IDs, or capturing Fail screenshots under evidence/t1b.
---

# EMS GUI Checklist Execution

Guide Pass/Fail execution of the shared group GUI checklist on one EMS Scenario D screen.

## Binding

| Field | Value |
| --- | --- |
| Student | `23127153` |
| Scenario | D — Support request lifecycle |
| Screens | **D1** create support request + image; **D2** My Requests list/detail; **D3** Admin Support Requests |
| Checklist | `submission/group/GUI_Checklist.md` |
| Evidence root | `submission/evidence/t1b/` |

## Inputs

1. **Screen ID** — required: `D1` | `D2` | `D3`
2. Optional: subset of checklist IDs (default = all executable `IA0N-01`…`IA0N-10`; skip `*-EX` examples)

## Procedure

1. Confirm the screen ID is one of D1/D2/D3.
2. Open `submission/group/GUI_Checklist.md` and load every executable checklist ID (exclude `IA01-EX`…`IA04-EX` unless explicitly requested).
3. Navigate the live EMS UI to the chosen screen.
4. For each checklist ID, score **Pass**, **Fail**, or **N/A**:
   - **Pass** — criterion met on this screen.
   - **Fail** — criterion violated; must add a short defect note **and** a screenshot.
   - **N/A** — criterion does not apply to this screen/component; note why.
5. On **Fail**, save the screenshot using this exact path pattern:

```text
evidence/t1b/{screen}/{ID}.png
```

Examples: `evidence/t1b/D1/IA02-09.png`, `evidence/t1b/D3/IA04-03.png`.

Paths are relative to `submission/` (i.e. full path `submission/evidence/t1b/{screen}/{ID}.png`).

6. Write/update the execution table for the screen (e.g. `submission/evidence/t1b/{screen}_execution.md`) with columns:

| Checklist ID | Result (Pass/Fail/N/A) | Notes | Screenshot |
| --- | --- | --- | --- |
| IA01-01 | Pass | … | — |
| IA02-06 | Fail | Inline error missing recovery hint | `evidence/t1b/D1/IA02-06.png` |

7. Every Fail row must reference a real screenshot file at the pattern above. Pass/N/A rows leave Screenshot empty or `—`.

## Output checklist

- [ ] Screen ID accepted and validated (D1/D2/D3)
- [ ] Checklist IDs loaded from `submission/group/GUI_Checklist.md`
- [ ] Each ID scored Pass / Fail / N/A
- [ ] Every Fail has notes + `evidence/t1b/{screen}/{ID}.png`
