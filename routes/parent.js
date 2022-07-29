import express from "express";
import { getParentData, postParentData, putParentData, patchParentData } from "../models/parent.js";

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
  console.log(`PUT requst made to parent: ${JSON.stringify(result)}`);
  res.status(204).json({ success: true });
})


// PATCH PARENT DATA BY ID
parentRouter.patch("/:id", async (req,res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await patchParentData(id, data);
  res.status(204).json({success: true });
})

// DELETE PARENT DATA BY ID 
parentRouter.delete("/:id", async (req,res) => {
  const id = req.params.id;
  await deleteParentData(id);
  res.status(204);
})

export default parentRouter;
