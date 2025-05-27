const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  revoked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Token', tokenSchema);
