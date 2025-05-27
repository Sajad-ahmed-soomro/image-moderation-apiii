const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  token: { type: String, required: true },
  endpoint: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usage', usageSchema);
