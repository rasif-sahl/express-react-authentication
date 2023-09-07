// app.js
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import routes from './routes.js';

const app = express();
const port = 4000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend domain
  credentials: true, // Enable credentials (e.g., cookies, authorization headers)
};

app.use(cors(corsOptions));

// Use routes defined in the routes.js file
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
