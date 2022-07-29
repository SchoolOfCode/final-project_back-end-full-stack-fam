import { pool } from "../db/index.js";

//GET ALL
export async function getParentData() {
  const data = await pool.query("SELECT * FROM parent;");
  console.log("GET request from parent", data.rows);
  return data.rows;
}

//POST 
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

//PUT
export async function putParentData(id, parentData) {
  const { firstname, lastname, passcode, studentid, email } = parentData;
  console.log(`put request for ${firstname}`)
  const response = await pool.query(
    `UPDATE parent
    SET firstname = ($1),
        lastname = ($2),
        passcode = ($3),
        studentid = ($4),
        email = ($5)
    WHERE id=(${id}) RETURNING *;`,
    [
      firstname,
      lastname,
      passcode,
      studentid,
      email
    ]     
  );
  return response.rows
}

