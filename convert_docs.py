#!/usr/bin/env python3
import os
import sys
from pathlib import Path
from markitdown import MarkItDown

md = MarkItDown()

root = Path("тест спец")
docx_files = list(root.rglob("*.docx"))

# Skip temp files (start with ~$)
docx_files = [f for f in docx_files if not f.name.startswith("~$")]

print(f"Барлығы: {len(docx_files)} docx файл")

success = 0
failed = 0

for i, docx_path in enumerate(docx_files, 1):
    md_path = docx_path.with_suffix(".md")
    try:
        result = md.convert(str(docx_path))
        md_path.write_text(result.text_content, encoding="utf-8")
        print(f"[{i}/{len(docx_files)}] ✅ {docx_path.name}")
        success += 1
    except Exception as e:
        print(f"[{i}/{len(docx_files)}] ❌ {docx_path.name} — {e}")
        failed += 1

print(f"\nДайын! ✅ {success} сәтті | ❌ {failed} қате")
