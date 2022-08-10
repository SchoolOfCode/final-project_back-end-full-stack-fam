import { pool } from "../index.js";

async function createChildTable() {
    const created = await pool.query(
      `CREATE TABLE IF NOT EXISTS child (
        student_id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        scoreone INT NOT NULL,
        timecompleted TEXT NOT NULL,
        datecompleted TEXT NOT NULL 
      );`
    );
    console.log("child table created", created.command);
  }
  
  try {
    await createChildTable();
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  };
  