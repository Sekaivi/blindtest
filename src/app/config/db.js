import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.join(process.cwd(), "test.sqlite"));

console.log("Connecté à SQLite : test.sqlite");

export default db;
