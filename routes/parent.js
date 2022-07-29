import express from "express";
import { getParentData, postParentData, putParentData } from "../models/parent.js";

const parentRouter = express.Router();

// GET ALL PARENT DATA
parentRouter.get("/", async (req, res) => {
  console.log(req)
  const data = await getParentData();
  res.json({ success: true, payload: data });
});

// POST NEW PARENT DATA
parentRouter.post("/", async (req, res) => {
  const data = req.body
  const result = await postParentData(data);
  console.log(`POST request made to parent: ${JSON.stringify(req.body)}`);
  res.status(201).json({ success: true, payload: result });
});

// PUT PARENT DATA BY ID 
parentRouter.put("/:id", async (req,res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await putParentData(id, data);
  console.log(`PUT requst made to parent: ${JSON.stringify(req.body)}`);
  res.status(200).json({ success: true, payload: result });
})

export default parentRouter;
