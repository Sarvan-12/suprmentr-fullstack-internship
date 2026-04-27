const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

// @route   POST /api/auth/signup
// @desc    Register user
router.post('/signup', async (req, res, next) => {
  const { username, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ username, email, password, role: role || 'user' });
    await user.save();

    const payload = {
      user: { id: user.id, role: user.role }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) return next(err);
        res.status(201).json({ token, message: `User registered successfully as ${user.role}` });
      }
    );
  } catch (err) {
    next(err);
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: { id: user.id, role: user.role }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) return next(err);
        res.json({ token, message: `Logged in as ${user.role}` });
      }
    );
  } catch (err) {
    next(err);
  }
});

// @route   GET /api/auth/user
// @desc    User Route (Any logged in user)
router.get('/user', auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ message: 'Welcome to the User Profile', user });
  } catch (err) {
    next(err);
  }
});

// @route   GET /api/auth/admin
// @desc    Admin Route (Only Admins)
router.get('/admin', auth, roleCheck(['admin']), async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json({ 
      message: 'Welcome Admin! Here is the user management dashboard.',
      totalUsers: users.length,
      users 
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
