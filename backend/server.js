console.clear();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Loads environment variables
require('dotenv').config();

// Creates express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware to allow us to parse JSON
app.use(cors());
app.use(express.json());

// Connec to our MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected');
})

const usersRouter = require('./routes/users.js');

app.use('/users', usersRouter);

// Starts the server on our port (5000)
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})