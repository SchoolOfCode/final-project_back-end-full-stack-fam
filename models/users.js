import { pool } from "../db/index.js";

export async function getMockData() {
  const data = await pool.query("SELECT * FROM test;");
  console.log("The test is", data.rows);
  return data.rows;
}

export async function postMockData(mockData) {
  const { item, completed } = mockData;
  console.log(item)
  const response = await pool.query(
    `INSERT INTO test (
      item,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [item, completed]
  );
  return response.rows;
}
