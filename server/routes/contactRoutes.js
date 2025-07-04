const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { authenticateToken } = require('../middleware/auth');

// Very simple implementation to avoid any issues
router.post('/submit', contactController.submitContactForm);

module.exports = router;