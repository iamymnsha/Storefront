import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '.env.local'});

const app = express();

console.log(process.env.PORT); // Log the port to verify it's loaded correctly

// Set the port number for the server
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from Backend');
});

// Start the server and listen on Port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});