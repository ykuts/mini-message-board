const express = require('express');
const router = express.Router();
const messages = require('../messages'); // Import the shared messages array

// Route to display the new message form
router.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission
router.post('/', (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect('/');
});

module.exports = router;
