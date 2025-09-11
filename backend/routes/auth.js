const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;

// Hardcoded credentials (for demonstration purposes)
const credentials = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD
};

// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === credentials.username && password === credentials.password) {
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = { router, authenticateJWT };