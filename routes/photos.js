import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import express from "express";

const router = express.Router();

// Route to get all photos
router.get('/', (req, res) => {
  const photosData = JSON.parse(fs.readFileSync( "./data/photos.json", "utf8"));
  res.json(photosData);
});

// Route to get a specific photo by ID
router.get('/:id', (req, res) => {
  const photosData = JSON.parse(fs.readFileSync( "./data/photos.json", "utf8"));
  const { id } = req.params;
  const photo = photosData.find((photo) => photo.id === id);
  if (photo) {
    res.json(photo);
  } else {
    res.status(404).send('Photo not found');
  }
});

// Route to get comments of a specific photo by ID
router.get('/:id/comments', (req, res) => {
  const photosData = JSON.parse(fs.readFileSync( "./data/photos.json", "utf8"));

  const { id } = req.params;
  const photo = photosData.find((photo) => photo.id === id);
  if (photo) {
    res.json(photo.comments || []);
  } else {
    res.status(404).send('Photo not found');
  }
});

// Route to add a comment to a specific photo by ID
router.post('/:id/comments', (req, res) => {
  const photosData = JSON.parse(fs.readFileSync( "./data/photos.json", "utf8"));
  const { id } = req.params;
  const photo = photosData.find((photo) => photo.id === id);
  const { name, comment} = req.body;
  const newComment = {
    id: uuidv4(),
    name,
    comment,
    timestamp: Date.now() 
  }
  photo.comments.push(newComment);
  fs.writeFileSync("./data/photos.json", JSON.stringify(photosData, null, 2));
  res.status(201).json(photo.comments);
});

export default router;