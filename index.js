import express from 'express';
import cors from 'cors';  // Import the cors package
import "dotenv/config";
import photosRoute from "./routes/photos.js";
import tagsRoute from "./routes/tags.js";

// import { loadPhotos } from './routes/photos.js';
// import { loadTags } from './routes/tags.js';
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins (you can customize this as needed)
app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(cors({ origin: '*' })); // Allow all origins for simplicity (adjust this in production)


app.use(express.json());  // To parse incoming JSON requests
app.use('/photos', express.static('public/Images'));

// Serve static photos (images) directly from a folder
app.use('/photos', photosRoute);
app.use('/tags', tagsRoute);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
// app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
