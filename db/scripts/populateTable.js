import { mockData } from "../../libs/mock-data.js";
import { pool } from "../index.js";

async function populateMockData() {
    for (let i=0; i < mockData.length; i++) {
        const res = await pool.query(
            `INSERT INTO test (item, completed) VALUES ($1, $2);`,
            [mockData[i].item, mockData[i].completed]
        );
    } console.log("ITEM ADDED")
}

populateMockData();