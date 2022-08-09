import { pool } from "../db/index.js";

export async function getParentData() {
  const data = await pool.query("SELECT * FROM parent;");
  console.log("GET request from parent", data.rows);
  return data.rows;
}

export async function postParentData(parentData) {
  const { firstname, lastname, passcode, student_id, email } = parentData;
  const response = await pool.query(
    `INSERT INTO parent (
      firstname,
      lastname,
      passcode,
      student_id,
      email
    ) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,[
      firstname, 
      lastname, 
      passcode,
      student_id,
      email
    ]
  );
  return response.rows;
}
