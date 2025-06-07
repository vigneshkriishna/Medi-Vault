const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { authenticateToken } = require('../middleware/auth');

// Public contact form submission route
router.post('/submit', contactController.submitContactForm);

// Authenticated user contact route
router.post('/', authenticateToken, contactController.submitUserContactForm);

module.exports = router; 