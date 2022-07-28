import { pool } from "../index.js";

async function createChildTable() {
    const created = await pool.query(
      `CREATE TABLE IF NOT EXISTS child (
        id SERIAL PRIMARY KEY,
        studentid TEXT NOT NULL,
        name TEXT NOT NULL,
        scoreone INT NOT NULL,
        timecompleted TIME NOT NULL,
        datecompleted DATE NOT NULL 
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
  