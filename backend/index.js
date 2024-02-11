// Import required modules
const express = require("express");
const router = express.Router();
const Amadeus = require('amadeus');
//const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

const amadeus = new Amadeus({
    clientId: process.env.API_KEY,
    clientSecret: process.env.API_SECRET,
  });
  const port = 3000;
// Middleware
app.use(express.static("public"));

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
// Add any additional middleware as needed

//calling the API for suggestions input
app.get("/api/autocomplete", async (request, response) => {
    try {
      const { query } = request;
      const { data } = await amadeus.referenceData.locations.get({
        keyword: query.keyword,
        subType: Amadeus.location.city,
      });
      response.json(data);
    } catch (error) {
      console.error(error.response);
      response.json([]);
    }
  });

//calling the API to recieve the cheapest flights available 
app.get("/api/search", async (request, response) => {
    try {
      const { query } = request;
      const { data } = await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: query.origin,
        destinationLocationCode: query.destination,
        departureDate: query.departureDate,
        adults: query.adults,
        children: query.children,
        infants: query.infants,
        travelClass: query.travelClass,
        ...(query.returnDate ? { returnDate: query.returnDate } : {}),
      });
      response.json(data);
    } catch (error) {
      console.error(error.response);
      response.json([]);
    }
  });


// Connect to MongoDB database
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit the application if unable to connect to the database
// });

// Routes
app.use('/api/users', userRoutes); // Mount user routes

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

// const PORT = process.env.PORT || 8080; // Use the provided port or default to 8080
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

