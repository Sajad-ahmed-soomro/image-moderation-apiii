const Token = require('../models/Token');
const Usage = require('../models/Usage');



async function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }
    const tokenValue = authHeader.split(' ')[1];
    const tokenDoc = await Token.findOne({ token: tokenValue, revoked: false });
    if (!tokenDoc) {
      return res.status(403).json({ error: 'Invalid or revoked token' });
    }

    // Log usage here or later
    await Usage.create({
      token: tokenValue,
      endpoint: req.originalUrl,
      timestamp: new Date()
    });

    req.tokenDoc = tokenDoc;
    req.token = tokenValue;  // <== ADD THIS
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

function adminOnly(req, res, next) {
  if (!req.tokenDoc.isAdmin) {
    return res.status(403).json({ error: 'Admin privileges required' });
  }
  next();
}

module.exports = { authenticateToken, adminOnly };
