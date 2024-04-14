// models/User.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  operations: {
    type: Number,
    required: true
  },
  

});

module.exports = mongoose.model('Patient', patientSchema);
