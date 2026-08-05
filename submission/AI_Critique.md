# AI Critique — HW03 (GUI & Usability Testing on EMS)

**Student:** Huỳnh Gia Âu · MSSV `23127153` · Nhóm 2
**Word count:** ~275

---

The AI was fast at producing checklist rows and execution tables, and consistently wrong in one
specific way: it optimised for a document that *looked* complete rather than for evidence that
*was* true. Three failures showed the same root cause. It reported a D1 summary of Pass/Fail counts
that contradicted its own 40-row matrix, because it wrote the summary from memory of what it had
done instead of recounting the rows it had just written. It reused a single screenshot for several
different Fail findings — each finding had *a* file, so the deliverable checklist was satisfied while
the evidence was not. And on the admin screen it navigated to `/complaints` instead of
`/dashboard/admin/complaints`, then began scoring: the page rendered plausibly, so nothing in its
output signalled the wrong role.

The most instructive failure was the opposite direction. It marked `IA02-02` as Fail on D1 because
the required-field asterisk was absent from the DOM text — but the asterisk is rendered through a CSS
`::after` rule and is plainly visible to a user. The AI trusted the representation it could query
over the interface a human actually sees, which for GUI testing is exactly backwards. The bias
recurred in accessibility: unless contrast, colour-only status and keyboard navigation were named in
the prompt, they simply did not appear; the same held for bilingual EN/VI consistency, the most
widespread real defect in EMS.

The principle I take from this: AI is a fast generator and an unreliable witness. Every claim it
makes must be re-derived from an artefact I can inspect — recount the rows, hash the screenshots,
verify the URL — and the verification has to be structurally separate from the agent that produced
the work, because self-review reproduces the original blind spot.
