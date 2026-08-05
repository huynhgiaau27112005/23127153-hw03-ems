#!/usr/bin/env bash
# Build the Moodle submission zip for HW03.
#   usage: tools/package.sh <SelfAssessedGrade e.g. 085>
# Verifies every §15-required artefact is present before zipping; refuses to build otherwise.
set -euo pipefail

GRADE="${1:?usage: tools/package.sh <grade 000-100, 3 digits>}"
[[ "$GRADE" =~ ^[0-9]{3}$ ]] || { echo "grade must be 3 digits, got '$GRADE'"; exit 1; }

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
NAME="23127153_HW03_AI_GUIUsability_EMS_${GRADE}"
STAGE="build/$NAME"

echo "== exporting git log"
git log --pretty=format:'%h | %ad | %s' --date=iso > submission/git_commit_log.txt
echo "" >> submission/git_commit_log.txt

echo "== checking required artefacts (HW03 §15)"
required=(
  submission/README.md
  submission/Report.md
  submission/Report.pdf
  submission/AI_Audit_Report.md
  submission/AI_Audit_Report.pdf
  submission/AI_Critique.md
  submission/AI_Critique.pdf
  submission/Bug_Usability_Findings_Log.md
  submission/git_commit_log.txt
  submission/group/GUI_Checklist.md
  submission/group/Reference_Sources.md
  submission/group/Checklist_AI_Prompts.md
  submission/evidence/t1b/D1_execution.md
  submission/evidence/t1b/D2_execution.md
  submission/evidence/t1b/D3_execution.md
  submission/evidence/t2/task_scenario.md
  submission/evidence/t2/participants.md
  submission/evidence/t2/sessions_P1-P5.md
  submission/evidence/t2/sus_scores.md
  submission/evidence/t2/metrics.md
  submission/evidence/t3/matrix.md
  submission/skills/ems-gui-checklist/SKILL.md
  submission/skills/ems-usability-session/SKILL.md
  submission/skills/ems-compat-matrix/SKILL.md
)
missing=0
for f in "${required[@]}"; do
  [ -s "$f" ] || { echo "  MISSING or empty: $f"; missing=1; }
done

echo "== checking evidence screenshots exist"
for d in submission/evidence/t1b/D1 submission/evidence/t1b/D2 submission/evidence/t1b/D3; do
  n=$(find "$d" -name '*.png' | wc -l | tr -d ' ')
  echo "  $d: $n png"
  [ "$n" -gt 0 ] || missing=1
done
t3=$(find submission/evidence/t3 -name '*.png' 2>/dev/null | wc -l | tr -d ' ')
echo "  submission/evidence/t3: $t3 png"
[ "$t3" -gt 0 ] || { echo "  WARNING: no cross-platform screenshots"; missing=1; }

echo "== checking no unresolved placeholders in report/readme"
if grep -nE 'FILL|TBD|<!-- SECTION|<!-- SUMMARY|REMAINING COMMITS' submission/Report.md submission/README.md; then
  echo "  placeholders above must be resolved before packaging"; missing=1
fi

[ "$missing" -eq 0 ] || { echo "== ABORT: package incomplete"; exit 1; }

echo "== staging"
rm -rf "$STAGE" "$NAME.zip"
mkdir -p "$STAGE"
cp -R submission/. "$STAGE/"
find "$STAGE" -name '.gitkeep' -delete
find "$STAGE" -name '.DS_Store' -delete

echo "== zipping"
(cd build && zip -qr "../$NAME.zip" "$NAME")
echo "wrote $NAME.zip ($(du -h "$NAME.zip" | cut -f1))"
unzip -l "$NAME.zip" | tail -1
