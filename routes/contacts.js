const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
    res.json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
});

router.post('/', (req, res) => {
  res.send('Add contact')
});

router.put('/:id', (req, res) => {
  res.send('Update contact')
});

router.delete('/:id', (req, res) => {
  res.send('Delete contact')
});

module.exports = router;