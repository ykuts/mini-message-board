const express = require('express');
const router = express.Router();
const messages = require('../messages'); // Import the shared messages array

// Index route to display all messages
router.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

// Route to display a single message
router.get('/message/:id', (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];

  if (message) {
    res.render('message', { message });
  } else {
    res.status(404).send('Message not found');
  }
});

module.exports = router;
