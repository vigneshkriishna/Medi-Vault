const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Contact form submission route
router.post('/submit', contactController.submitContactForm);

module.exports = router; 