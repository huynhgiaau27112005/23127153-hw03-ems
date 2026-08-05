# Task 2 — Aggregate usability metrics & ranked findings

**Source sessions:** `sessions_P1-P5.md` · **SUS detail:** `sus_scores.md`  
**SUT:** https://prod-dev.ems-fitus.cloud/ · Scenario D (D1/D2 primary; D3 observer)

---

## Aggregate metrics

| Metric | Value |
|---|---|
| Participants (n) | 5 |
| Task success (Completed) | **3 / 5 (60%)** — P1, P2, P4 |
| Partial | **2 / 5 (40%)** — P3, P5 (created but could not confidently reopen detail) |
| Fail | **0 / 5** |
| Mean time on task | **368.6 s** (06:09) |
| Median time on task | **365 s** (06:05) |
| Min / Max time | 228 s / 510 s |
| Mean error / hesitation count | **3.8** per session |
| Total errors (sum) | **19** |
| Mean SUS | **55.0** (below ~68 average) |

### Time & errors by participant (must match sessions)

| P | Success | Time (s) | Errors | SUS |
|---|---|---:|---:|---:|
| P1 | Success | 228 | 2 | 75.0 |
| P2 | Success | 295 | 3 | 60.0 |
| P3 | Partial | 445 | 5 | 42.5 |
| P4 | Success | 365 | 4 | 62.5 |
| P5 | Partial | 510 | 5 | 35.0 |
| **Aggregate** | **60% Success** | mean **368.6** · median **365** | mean **3.8** | mean **55.0** |

### Task completion per screen

| Screen | Goal | Completed | Notes |
|---|---|---:|---|
| **D1** Create `/complaints/new` | Submit a support request | **5 / 5** | All participants eventually submitted; most hit empty-submit validation first |
| **D2** List `/complaints` | Find own request in list | **4 / 5** | P5 uncertain which row was theirs |
| **D2** Detail `/complaints/:id` | Open detail / status | **3 / 5** | P3, P5 Partial (no confident reopen) |
| **D3** Admin list (observer) | Date filter sanity | n/a (not participant-operated) | From > To accepted — noted with P5 |

---

## Findings ranked (Nielsen severity 0–4)

| Sev | ID | Title | Screens | Heuristic |
|---:|---|---|---|---|
| **3** | U-001 | Combined required-field alert only at page bottom; focus stays on Submit | D1 | Nielsen #1, #9 · Visibility of system status / Help users recognize & recover |
| **3** | U-005 | Admin date filter accepts From > To without validation | D3 | Nielsen #5 · Error prevention |
| **2** | U-002 | Mixed VI/EN localisation (`document.title` vs EN chrome) | D1, D2 (, D3) | Nielsen #4 · Consistency & standards |
| **2** | U-004 | Missing breadcrumb — weak sense of place create ↔ list ↔ detail | D1, D2, D3 | Nielsen #2, #6 · Match real world / Recognition |
| **2** | U-003 | Social floating action button overlaps / competes with form & list chrome | D1, D2 | Nielsen #8 · Aesthetic & minimalist design |

Severity scale used: **0** not a problem · **1** cosmetic · **2** minor · **3** major · **4** catastrophe.

---

## Prioritised recommendations (mapped to findings)

| Priority | Recommendation | Addresses |
|---|---|---|
| P0 | Add **per-field inline validation**; on failed submit move focus to the first invalid field; keep bottom summary only as secondary | U-001 |
| P0 | Reject invalid date ranges (**From ≤ To**); show an explicit range error | U-005 |
| P1 | Unify locale: `document.title`, H1, labels, and chrome must share one language per view | U-002 |
| P1 | Add breadcrumbs (e.g. Support requests → Create / #id) with clickable parents | U-004 |
| P2 | Reposition or auto-hide Social FAB when it intersects primary CTAs | U-003 |

---

## Cross-checks performed

- SUS item sums → per-participant scores → mean **55.0** recomputed in `sus_scores.md`.
- Success / time / error cells equal `sessions_P1-P5.md` totals above.
- Findings align with Task 1B fails: IA02-06/07, IA01-06, IA03-03, IA03-09, IA02-08.
