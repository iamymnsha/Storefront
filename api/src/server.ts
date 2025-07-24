import express from 'express';
const app = express();

// Set the port number for the server
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Backend');
});

// Start the server and listen on Port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});