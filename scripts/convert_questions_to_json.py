#!/usr/bin/env python3
"""Convert TypeScript question files to iOS JSON bundle."""

import json
import os
import re
from pathlib import Path

QUESTIONS_DIR = Path("data/questions")
OUTPUT_DIR = Path("ios/MagisCore/Data/Questions")
TYPES_TS = Path("types.ts")

ENUM_REPLACEMENTS = {
    "SubjectId.M001_PEDAGOGIKA": "m001_pedagogika",
    "SubjectId.M001_PSYCHOLOGY": "m001_psychology",
    "SubjectId.M002_PEDAGOGIKA": "m002_pedagogika",
    "SubjectId.M002_SPEECH_DEV": "m002_speech_dev",
    "QuestionType.SINGLE": "SINGLE",
    "QuestionType.MULTIPLE": "MULTIPLE",
    "QuestionType.AUDIO": "AUDIO",
    "Difficulty.EASY": "easy",
    "Difficulty.MEDIUM": "medium",
    "Difficulty.HARD": "hard",
}

SUBJECT_MAP = {
    "english": "english",
    "tgo": "tgo",
    "algo": "algo",
    "db": "db",
    "m001": "m001",
    "m002": "m002",
}

# Also track subject from the "subjectId" field in objects
SUBJECT_BY_FIELD_VALUE = {
    "english": "english",
    "tgo": "tgo",
    "algo": "algo",
    "db": "db",
    "m001_pedagogika": "m001",
    "m001_psychology": "m001",
    "m002_pedagogika": "m002",
    "m002_speech_dev": "m002",
}


def clean_ts_source(text: str) -> str:
    """Clean TypeScript and return valid JSON."""
    lines = text.split("\n")
    cleaned = []
    for line in lines:
        # Strip import lines
        if line.strip().startswith("import "):
            continue
        # Strip comments
        line = re.sub(r"//.*", "", line)
        # Strip type annotations from variable declarations
        line = re.sub(r":\s*Question\[\]\s*=\s*", " = ", line)
        line = re.sub(r":\s*QuestionType\[\]\s*=\s*", " = ", line)
        line = re.sub(r":\s*Question\[\]\[\]\s*=\s*", " = ", line)
        line = re.sub(r":\s*Question\b", "", line)
        # Strip const/export keywords
        line = re.sub(r"\bexport\s+", "", line)
        line = re.sub(r"\bconst\s+", "var ", line)
        # Replace enum refs
        for enum_ref, replacement in ENUM_REPLACEMENTS.items():
            line = line.replace(enum_ref, json.dumps(replacement))
        cleaned.append(line)

    # Join and clean up
    text = "\n".join(cleaned)
    # Remove trailing commas before ] or }
    text = re.sub(r",\s*(\])", r"\1", text)
    text = re.sub(r",\s*(\})", r"\1", text)
    return text


def extract_arrays(text: str) -> list[list[dict]]:
    """Extract all array literals from cleaned source."""
    # Find all top-level arrays (between [ and ])
    arrays = []
    depth = 0
    start = -1
    for i, ch in enumerate(text):
        if ch == "[" and (i == 0 or text[i - 1] not in "'\"`"):
            if depth == 0:
                start = i
            depth += 1
        elif ch == "]" and depth > 0:
            depth -= 1
            if depth == 0 and start >= 0:
                arr_str = text[start : i + 1]
                try:
                    arr = json.loads(arr_str)
                    if isinstance(arr, list):
                        arrays.append(arr)
                except json.JSONDecodeError:
                    pass
                start = -1
    return arrays


def subject_from_question(q: dict):
    """Determine subject from question object."""
    sid = q.get("subjectId", "")
    return SUBJECT_BY_FIELD_VALUE.get(sid)


def file_belongs_to_subject(filepath: Path):
    """Determine which subject a file belongs to from its path."""
    parts = filepath.relative_to(QUESTIONS_DIR).parts
    for p in parts:
        if p in SUBJECT_MAP:
            return SUBJECT_MAP[p]
    return None


def process_question_file(filepath: Path):
    """Process a single .ts file and return {subject: questions}."""
    subjects = {}
    default_subject = file_belongs_to_subject(filepath)
    text = filepath.read_text(encoding="utf-8")
    cleaned = clean_ts_source(text)
    arrays = extract_arrays(cleaned)

    for arr in arrays:
        for q in arr:
            if not isinstance(q, dict):
                continue
            subj = subject_from_question(q) or default_subject
            if subj:
                subjects.setdefault(subj, []).append(q)
    return subjects


def main():
    os.chdir(Path(__file__).resolve().parent.parent)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    all_subjects: dict[str, list[dict]] = {}
    total_questions = 0

    ts_files = sorted(QUESTIONS_DIR.rglob("*.ts"))
    for fp in ts_files:
        # Skip index files (they reference other files)
        if fp.name == "index.ts":
            continue
        subj_questions = process_question_file(fp)
        for subj, questions in subj_questions.items():
            all_subjects.setdefault(subj, []).extend(questions)
            total_questions += len(questions)

    # Deduplicate by question id
    for subj in all_subjects:
        seen = set()
        unique = []
        for q in all_subjects[subj]:
            qid = q.get("id", "")
            if qid not in seen:
                seen.add(qid)
                unique.append(q)
        all_subjects[subj] = unique

    for subj, questions in all_subjects.items():
        output_file = OUTPUT_DIR / f"{subj}.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)
        print(f"  {subj}: {len(questions)} questions -> {output_file.name}")

    print(f"\nTotal: {total_questions} questions across {len(all_subjects)} subjects")


if __name__ == "__main__":
    main()
