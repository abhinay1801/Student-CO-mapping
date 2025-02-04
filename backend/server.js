const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const setRoutes = require('./routes/setRoutes');


const app = express();
dotenv.config();

// Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 


// MongoDB connection
mongoose.connect(process.env.MONGO_URI,
   //{ useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/sets', setRoutes); // Set routes

// Port 
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});