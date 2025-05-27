const express = require('express');
const router = express.Router();
const { createToken, listTokens, revokeToken } = require('../controllers/authController');
const { authenticateToken, adminOnly } = require('../middleware/authMiddleware');

router.use(authenticateToken, adminOnly);

router.post('/tokens', createToken);
router.get('/tokens', listTokens);
router.delete('/tokens/:token', revokeToken);

module.exports = router;
