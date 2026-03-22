import Database from "better-sqlite3";

const db = new Database("data.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS cache (
        id INTEGER PRIMARY KEY,
        text TEXT UNIQUE,
        response TEXT
    )
`,
).run();

export function getCached(text) {
  return db.prepare("SELECT response FROM cache WHERE text=?").get(text);
}

export function saveCache(text, response) {
  db.prepare("INSERT OR IGNORE INTO cache (text, response) VALUES (?, ?)").run(
    text,
    response,
  );
}
