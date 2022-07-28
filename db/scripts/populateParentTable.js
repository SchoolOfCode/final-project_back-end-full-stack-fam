import { mockParentData } from "../../libs/mockParentData.js";
import { pool } from "../index.js";

async function populateParentTable() {
    for (let i=0; i < mockParentData.length; i++) {
        const res = await pool.query(
            `INSERT INTO parent (firstname, lastname, passcode, studentid, email) VALUES ($1, $2, $3, $4, $5);`,[
                mockParentData[i].firstname, 
                mockParentData[i].lastname, 
                mockParentData[i].passcode,
                mockParentData[i].studentid,
                mockParentData[i].email
            ]
        );
    } console.log("PARENT TABLE POPULATED")
}

populateParentTable();