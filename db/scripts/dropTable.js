import { pool } from "../index.js";

async function dropTable() {
  const dropped = await pool.query("DROP TABLE IF EXISTS test;");
  console.log("test table deleted", dropped.command);
}

try {
  await dropTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
