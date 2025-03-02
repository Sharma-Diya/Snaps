import fs from 'fs';
import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  const tagsData = JSON.parse(fs.readFileSync( "./data/tags.json", "utf8"));
  res.json(tagsData);
});

export default router;
