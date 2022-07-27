import express from "express";
import { mockData } from "../libs/mock-data.js";
import { getMockData, postMockData } from "../models/users.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  console.log(req)
  const data = await getMockData();
  res.json({ success: true, payload: data });
});

// POST
router.post("/", async (req, res) => {
  const mockData = req.body;
  console.log(`the body is ${JSON.stringify(mockData)}`);
  const result = await postMockData(mockData);
  res.status(200).json({ success: true, payload: result });
});

export default router;
