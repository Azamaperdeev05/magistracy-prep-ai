import os
import re
import json
import uuid
import time
import random
import urllib.request
import urllib.error
import sqlite3
from concurrent.futures import ThreadPoolExecutor, as_completed

# Load env variables from backend/.env
def load_env():
    env = {}
    env_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../backend/.env"))
    print(f"Loading env from {env_path}")
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip().strip('"').strip("'")
    return env

ENV = load_env()
API_KEY = ENV.get("DASHSCOPE_API_KEY")
API_URL = ENV.get("DASHSCOPE_API_URL", "https://ws-0xupo36814pi68qv.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1")
MODEL = "qwen3.5-omni-plus-2026-03-15"

if not API_KEY:
    raise ValueError("DASHSCOPE_API_KEY not found in backend/.env")

def get_additional_options(question_text, existing_options, correct_option_texts, count_needed, topic):
    # Sleep small random delay to prevent concurrent burst
    time.sleep(random.uniform(0.1, 0.4))
    
    prompt = (
        "Сен дерекқорлар (Databases / SQL) пәні бойынша білікті қазақ тілді оқытушысың.\n"
        "Маған келесі сұрақ үшін қосымша бұрыс жауаптар (дистракторлар) керек.\n\n"
        f"Сұрақ: {question_text}\n"
        f"Тақырып: {topic}\n\n"
        "Қазіргі бар нұсқалар:\n"
    )
    for idx, opt in enumerate(existing_options):
        letter = chr(65 + idx)
        prompt += f" {letter}) {opt}\n"
        
    prompt += f"\nДұрыс жауап(тар): {', '.join(correct_option_texts)}\n\n"
    prompt += (
        f"Маған сұрақтың мәні мен деңгейіне сай келетін, бірақ БҰРЫС болып табылатын дәл {count_needed} дана жаңа нұсқа дайындап бер.\n"
        "Нұсқалар қазақ тілінде, қысқа, нақты әрі логикалық тұрғыдан бұрыс (бірақ студентті шатастыратындай сенімді) болуы тиіс.\n"
        "Қазіргі бар нұсқаларды мүлдем қайталама.\n\n"
        "Жауапты келесі қатаң JSON форматында ғана қайтар (басқа ештеңе жазба, тек JSON):\n"
        "{\n"
        '  "new_options": [\n'
        '    "жаңа бұрыс нұсқа 1",\n'
        '    "жаңа бұрыс нұсқа 2"\n'
        "  ]\n"
        "}\n"
    )

    data = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": "Сен тек қатаң түрде JSON форматта жауап беретін көмекшісің."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.3
    }
    
    url = f"{API_URL.rstrip('/')}/chat/completions"
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        }
    )
    
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=30) as response:
                resp_body = response.read().decode("utf-8")
                resp_json = json.loads(resp_body)
                content = resp_json["choices"][0]["message"]["content"].strip()
                
                if content.startswith("```"):
                    content = re.sub(r"^```(?:json)?\n", "", content)
                    content = re.sub(r"\n```$", "", content)
                    content = content.strip()
                
                parsed = json.loads(content)
                new_opts = parsed.get("new_options", [])
                if len(new_opts) == count_needed:
                    return new_opts
                if not new_opts and isinstance(parsed, dict):
                    for val in parsed.values():
                        if isinstance(val, list) and len(val) == count_needed:
                            return val
                print(f"Warning: requested {count_needed} options but got {len(new_opts)}. Retrying...")
        except Exception as e:
            # Handle rate limit (HTTP 429) specifically by backoff
            if hasattr(e, 'code') and e.code == 429:
                sleep_time = 5 * (attempt + 1)
                print(f"Rate limit (429) hit. Sleeping for {sleep_time}s...")
                time.sleep(sleep_time)
            else:
                print(f"Error on attempt {attempt+1}: {e}")
                time.sleep(2)
            
    print(f"AI calls failed completely for: {question_text[:40]}... Using fallback options.")
    return [f"Сұрақтың тақырыбына қатысты бұрыс нұсқа {i+1}" for i in range(count_needed)]

def process_single_question(idx, q, total_qs):
    options = q.get("options", [])
    
    # Self-healing: Filter out any previous dummy options
    options = [o for o in options if "бұрыс нұсқа" not in o["text"] and "Басқа бұрыс" not in o["text"]]
    
    num_options = len(options)
    if num_options >= 8:
        return idx, None
        
    topic = q.get("topic", "Дерекқорлар")
    text = q.get("text", "")
    correct_ids = q.get("correctOptionIds", [])
    
    correct_texts = [o["text"] for o in options if o["id"] in correct_ids]
    existing_texts = [o["text"] for o in options]
    count_needed = 8 - num_options
    
    new_opt_texts = get_additional_options(text, existing_texts, correct_texts, count_needed, topic)
    
    new_options = []
    for o_text in new_opt_texts:
        new_options.append({
            "id": str(uuid.uuid4()),
            "text": o_text
        })
        
    return idx, new_options

def process_ts_file(filepath, var_name):
    print(f"Processing file: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read().strip()
        
    content_clean = re.sub(r'as\s+Question\s*\[\s*\]\s*;?\s*$', '', content)
    content_clean = content_clean.strip()
    if content_clean.endswith(';'):
        content_clean = content_clean[:-1].strip()
        
    start_idx = content_clean.find('[')
    end_idx = content_clean.rfind(']')
    if start_idx == -1 or end_idx == -1:
        print(f"Error: Array not found in {filepath}")
        return
        
    array_str = content_clean[start_idx:end_idx+1]
    
    # We do not use re.sub(r'//.*', '', ...) to avoid stripping double-slashes inside string literals.
    cleaned = re.sub(r'/\*.*?\*/', '', array_str, flags=re.DOTALL)
    cleaned = re.sub(r',\s*([\]}])', r'\1', cleaned)
    
    try:
        questions = json.loads(cleaned)
    except Exception as e:
        print(f"JSON load failed on {filepath}: {e}")
        raise e
        
    total_qs = len(questions)
    
    # Collect questions that need expansion (including ones with fallback dummy options)
    questions_to_expand = []
    for idx, q in enumerate(questions):
        opts = q.get("options", [])
        has_fallbacks = any("бұрыс нұсқа" in o["text"] or "Басқа бұрыс" in o["text"] for o in opts)
        if len(opts) < 8 or has_fallbacks:
            questions_to_expand.append((idx, q))
            
    if not questions_to_expand:
        print(f"  No updates needed for {filepath}.")
        return questions
        
    print(f"  {filepath}: {len(questions_to_expand)} / {total_qs} questions need option expansion (or self-healing). Processing concurrently...")
    
    # Execute API calls concurrently (gentle 2 workers)
    results_map = {}
    with ThreadPoolExecutor(max_workers=2) as executor:
        futures = {
            executor.submit(process_single_question, idx, q, total_qs): idx 
            for idx, q in questions_to_expand
        }
        
        completed_count = 0
        for future in as_completed(futures):
            idx, new_options = future.result()
            if new_options:
                results_map[idx] = new_options
            completed_count += 1
            if completed_count % 5 == 0 or completed_count == len(questions_to_expand):
                print(f"    Completed {completed_count}/{len(questions_to_expand)} api tasks...")
                
    # Apply results back
    for idx, new_options in results_map.items():
        # First clean existing dummy options
        questions[idx]["options"] = [o for o in questions[idx]["options"] if "бұрыс нұсқа" not in o["text"] and "Басқа бұрыс" not in o["text"]]
        # Then extend with new clean options
        questions[idx]["options"].extend(new_options)
        
    # Generate new TypeScript contents
    new_content = "import { Question } from '../../../../types';\n\n"
    topic_name = questions[0].get("topic", "Дерекқорлар")
    new_content += f"// db / {topic_name}\n"
    json_str = json.dumps(questions, ensure_ascii=False, indent=2)
    new_content += f"export const {var_name} = {json_str} as Question[];\n"
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"  Successfully updated {filepath} on disk!")
        
    return questions

def sync_to_sqlite(all_questions):
    db_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../backend/magiscore.db"))
    print(f"Syncing questions to SQLite database: {db_path}")
    if not os.path.exists(db_path):
        print(f"SQLite DB not found at {db_path}. Skipping DB sync.")
        return
        
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    try:
        cursor.execute("INSERT OR IGNORE INTO subjects (id, name) VALUES ('db', 'Мағлұматтарқоры (Databases)')")
        
        synced_count = 0
        for q in all_questions:
            q_id = q["id"]
            subject_id = q["subjectId"]
            text = q["text"]
            code_snippet = q.get("codeSnippet")
            reading_passage = q.get("readingPassage")
            q_type = q["type"]
            topic = q["topic"]
            difficulty = q.get("difficulty", "medium")
            language_level = q.get("languageLevel")
            hint = q.get("hint")
            correct_ids_str = ",".join(q["correctOptionIds"])
            
            cursor.execute(
                """
                INSERT INTO questions (id, subject_id, text, code_snippet, reading_passage, type, topic, correct_option_ids, difficulty, language_level, hint)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(id) DO UPDATE SET
                    text=excluded.text,
                    code_snippet=excluded.code_snippet,
                    reading_passage=excluded.reading_passage,
                    type=excluded.type,
                    topic=excluded.topic,
                    correct_option_ids=excluded.correct_option_ids,
                    difficulty=excluded.difficulty,
                    language_level=excluded.language_level,
                    hint=excluded.hint
                """,
                (q_id, subject_id, text, code_snippet, reading_passage, q_type, topic, correct_ids_str, difficulty, language_level, hint)
            )
            
            cursor.execute("DELETE FROM options WHERE question_id = ?", (q_id,))
            for opt in q["options"]:
                cursor.execute(
                    "INSERT INTO options (id, question_id, text) VALUES (?, ?, ?)",
                    (opt["id"], q_id, opt["text"])
                )
                
            synced_count += 1
            
        conn.commit()
        print(f"Successfully synced {synced_count} questions to SQLite database!")
        
    except Exception as e:
        conn.rollback()
        print(f"Error during SQLite synchronization: {e}")
        raise e
    finally:
        conn.close()

def main():
    base_dir = os.path.abspath(os.path.dirname(__file__))
    db_dir = os.path.join(base_dir, "db")
    
    file_mappings = [
        ("1-relational-model/relationalModel.ts", "db1RelationalModelQuestions"),
        ("2-data-integrity/dataIntegrity.ts", "db2DataIntegrityQuestions"),
        ("3-dbms-architecture/dbmsArchitecture.ts", "db3DbmsArchitectureQuestions"),
        ("4-er-modeling/erModeling.ts", "db4ErModelingQuestions"),
        ("5-keys-and-relationships/keysAndRelationships.ts", "db5KeysAndRelationshipsQuestions"),
        ("6-sql-basics/sqlBasics.ts", "db6SqlBasicsQuestions"),
        ("7-sql-queries/sqlQueries.ts", "db7SqlQueriesQuestions"),
        ("8-subqueries/subqueries.ts", "db8SubqueriesQuestions"),
        ("9-database-design/databaseDesign.ts", "db9DatabaseDesignQuestions"),
        ("10-normalization/normalization.ts", "db10NormalizationQuestions"),
        ("11-sql-server-architecture/sqlServerArchitecture.ts", "db11SqlServerArchitectureQuestions"),
    ]
    
    all_qs = []
    for rel_path, var_name in file_mappings:
        filepath = os.path.join(db_dir, rel_path)
        if os.path.exists(filepath):
            qs = process_ts_file(filepath, var_name)
            if qs:
                all_qs.extend(qs)
        else:
            print(f"Warning: File {filepath} does not exist. Skipping.")
            
    if all_qs:
        sync_to_sqlite(all_qs)

if __name__ == "__main__":
    main()
