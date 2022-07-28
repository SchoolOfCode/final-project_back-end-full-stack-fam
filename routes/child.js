import express from "express";
import { getChildData, postChildData } from "../models/child.js";

const childRouter = express.Router();

// GET ALL CHILD DATA
childRouter.get("/", async (req, res) => {
  console.log(req)
  const data = await getChildData();
  res.json({ success: true, payload: data });
});

// POST NEW CHILD DATA
childRouter.post("/", async (req, res) => {
  const data = req.body
  const result = await postChildData(data);
  console.log(`POST request made to child: ${JSON.stringify(req.body)}`)
  res.status(200).json({ success: true, payload: result });
});

export default childRouter;

