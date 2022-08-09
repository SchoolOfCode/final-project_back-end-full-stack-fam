import { pool } from "../db/index.js";

// GET ALL STUDENT DATA BY PARENT EMAILS
export async function getByEmail(email){
  if(email === null){
      return "no email found"
  }
  // email = email.replace(/[^0-9a-z]/gi, '')
  console.log(`finding child data of user with the ${email}`)
  const res = await pool.query(`SELECT * FROM child RIGHT JOIN parent ON child.student_id = parent.student_id WHERE email = '%${email}%'`)
  for (let i = 0 ; i < res.rows.length ; i++){
  console.log(`returned resource matching search: ${JSON.stringify(res.rows[i].link)}`)
  }
  return res.rows
}


//GET ALL
export async function getParentData() {
  const data = await pool.query("SELECT * FROM parent;");
  console.log("GET request from parent", data.rows);
  return data.rows;
}

//POST 
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

//PATCH
export async function patchParentData(id, parentData) {
  const { column, newvalue } = parentData;
  console.log(`patch request for ${column} on row with id ${id}`)
  const response = await pool.query(
    `UPDATE parent
    SET ${column} = ($1)
    WHERE id=(${id}) RETURNING *;`,
    [
      newvalue
    ]     
  );
  return response.rows
}
