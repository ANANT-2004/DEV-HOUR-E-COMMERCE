const express = require('express');
const router = express.Router();
const User = require('./models/User');

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({ message: 'Invalid email or password' });
    return;
  }

  if (user.password !== password) {
    res.status(401).json({ message: 'Invalid email or password' });
    return;
  }

  res.status(200).json({ message: 'Login successful' });
});

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = new User({ email, password });
  await user.save();

  res.status(201).json({ message: 'Signup successful' });
});

module.exports = router;