// Backend/app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the connectDB function

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define a test route
app.get('/', (req, res) => {
  res.send('API is running...');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
