const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateJWT } = require('./auth');

const router = express.Router();

// Hero routes
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    res.json(db.hero);
  });
});

router.put('/', authenticateJWT, (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    db.hero = req.body;
    fs.writeFile(path.join(__dirname, '../db.json'), JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(db.hero);
    });
  });
});

module.exports = router;
