import { pool } from "../db/index.js";

export async function getChildData() {
  const data = await pool.query("SELECT * FROM child;");
  console.log("GET request from child", data.rows);
  return data.rows;
}

export async function postChildData(childData) {
  const {name, scoreone, timecompleted, datecompleted } = childData;
  const response = await pool.query(
    `INSERT INTO child (
      name,
      scoreone,
      timecompleted,
      datecompleted
    ) VALUES ($1,$2,$3,$4) RETURNING *;`,[
      name,
      scoreone,
      timecompleted,
      datecompleted
    ]
  );
  console.log("POST request has worked :)")
  return response.rows;
}
