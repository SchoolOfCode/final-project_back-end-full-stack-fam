import { mockChildData } from "../../libs/mockChildData.js";
import { pool } from "../index.js";

async function populateChildTable() {
    for (let i=0; i < mockChildData.length; i++) {
        const res = await pool.query(
            `INSERT INTO child (studentid, name, scoreone, timecompleted, datecompleted) VALUES ($1, $2, $3, $4, $5);`,[
                mockChildData[i].studentid, 
                mockChildData[i].name, 
                mockChildData[i].scoreone,
                mockChildData[i].timecompleted,
                mockChildData[i].datecompleted
            ]
        );
    } console.log("CHILD TABLE POPULATED")
}

populateChildTable();