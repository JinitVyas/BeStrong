const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the connectDB function
const authRoutes = require('./routes/authRoutes'); // Import the auth routes
const cors = require('cors'); // Import cors


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB

// Initialize Express
const app = express();

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Use the authentication routes for handling /register
app.use('/api', authRoutes); // Prefix all routes with /api

// Define a test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
