// routes/moderateRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // stores in /uploads
const { moderateImage } = require('../controllers/moderateController');
const { authenticateToken } = require('../middleware/authMiddleware');
router.post('/moderate', authenticateToken, upload.single('image'), moderateImage);



module.exports = router;
