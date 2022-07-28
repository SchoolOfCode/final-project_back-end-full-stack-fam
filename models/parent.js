import { pool } from "../db/index.js";

export async function getParentData() {
  const data = await pool.query("SELECT * FROM parent;");
  console.log("GET request from parent", data.rows);
  return data.rows;
}

export async function postParentData(parentData) {
  const { firstname, lastname, passcode, studentid, email } = parentData;
  const response = await pool.query(
    `INSERT INTO parent (
      firstname,
      lastname,
      passcode,
      studentid,
      email
    ) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,[
      firstname, 
      lastname, 
      passcode,
      studentid,
      email
    ]
  );
  return response.rows;
}
