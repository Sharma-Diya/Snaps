import fs from 'fs';
import express from "express";
// Define the file path for tags data
const tagsDataFile = './data/tags.json';

const router = express.Router();

router.get('/', (req, res) => {
  const tagsData = JSON.parse(fs.readFileSync( "./data/tags.json", "utf8"));
  res.json(tagsData);
});

// Function to load tags from the tags.json file
// export const loadTags = () => {
//   try {
//     const data = fs.readFileSync(tagsDataFile, 'utf-8');
//     return JSON.parse(data);  // Return the parsed tags data
//   } catch (err) {
//     console.error('Error reading tags data:', err);
//     return ["nature", "city", "beach", "mountain"];  // Default tags if file is missing
//   }
// };
export default router;
