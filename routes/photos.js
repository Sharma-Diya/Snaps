import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import express from "express";
import { timeStamp } from 'console';

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
    res.json(photo.comments);
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
    timeStamp: Date.now() 
  }
  photo.comments.push(newComment);
  fs.writeFileSync("./data/photos.json", JSON.stringify(photo, null, 2));
  res.json(newComment);

  // if (newComment) {
  //   savePhotoData(photos);
  //   res.status(201).json(newComment);
  // } else {
  //   res.status(404).send('Photo not found');
  // }
});


// Define the file path for photos data
const photosDataFile = './data/photos.json';

// Function to load photos from the photos.json file
// export const loadPhotos = () => {
//   try {
//     const data = fs.readFileSync(photosDataFile, 'utf-8');
//     return JSON.parse(data); // Return parsed photos data
//   } catch (err) {
//     console.error('Error reading photos data:', err);
//     return []; // Return an empty array if there's an error reading the file
//   }
// };

export default router;