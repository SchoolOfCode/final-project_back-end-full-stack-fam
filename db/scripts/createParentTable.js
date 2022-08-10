import { pool } from "../index.js";

async function createParentTable() {
  const created = await pool.query(
    `CREATE TABLE IF NOT EXISTS parent (
      id SERIAL PRIMARY KEY,
      firstname TEXT NOT NULL,
      lastname TEXT NOT NULL,
      passcode INT NOT NULL,
      childname TEXT NOT NULL REFERENCES child (name),
      email TEXT NOT NULL
    );`
  );
  console.log("parent table created", created.command);
}

try {
  await createParentTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
};
