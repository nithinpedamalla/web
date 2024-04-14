// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/auth', require('./routes/Auth'));

app.listen(PORT, () => console.log(`Server running on port PORT`));
