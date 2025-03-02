import express from 'express';
import cors from 'cors';  
import "dotenv/config";
import photosRoute from "./routes/photos.js";
import tagsRoute from "./routes/tags.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(cors({ origin: '*' })); 


app.use(express.json()); 
app.use('/photos', express.static('public/Images'));

app.use('/photos', photosRoute);
app.use('/tags', tagsRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
