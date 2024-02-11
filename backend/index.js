// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
// Add any additional middleware as needed

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application if unable to connect to the database
});

// Routes
app.use('/api/users', userRoutes); // Mount user routes

// Start the server
const PORT = process.env.PORT || 8080; // Use the provided port or default to 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

