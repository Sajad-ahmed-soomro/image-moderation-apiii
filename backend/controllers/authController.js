const Token = require('../models/Token');
const crypto = require('crypto');

exports.createToken = async (req, res) => {
  try {
    const { isAdmin = false } = req.body;

    const newToken = crypto.randomBytes(16).toString('hex');

    const tokenDoc = new Token({
      token: newToken,
      isAdmin,
      createdAt: new Date(),
      revoked: false
    });

    await tokenDoc.save();

    res.status(201).json({ token: newToken, isAdmin });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create token' });
  }
};

exports.listTokens = async (req, res) => {
  try {
    const tokens = await Token.find({}, '-_id token isAdmin createdAt revoked');
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tokens' });
  }
};

exports.revokeToken = async (req, res) => {
  try {
    const { token } = req.params;
    const tokenDoc = await Token.findOne({ token });
    if (!tokenDoc) return res.status(404).json({ error: 'Token not found' });

    tokenDoc.revoked = true;
    await tokenDoc.save();

    res.json({ message: 'Token revoked' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to revoke token' });
  }
};
