const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateJWT } = require('./auth');

const router = express.Router();

// Education routes
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    res.json(db.education);
  });
});

router.post('/', authenticateJWT, (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const newEducation = { id: Date.now(), ...req.body };
    db.education.push(newEducation);
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(newEducation);
    });
  });
});

router.put('/:id', authenticateJWT, (req, res) => {
  const educationId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const educationIndex = db.education.findIndex(e => e.id === educationId);
    if (educationIndex === -1) {
      return res.status(404).json({ error: 'Education not found' });
    }
    db.education[educationIndex] = { ...db.education[educationIndex], ...req.body };
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(db.education[educationIndex]);
    });
  });
});

router.delete('/:id', authenticateJWT, (req, res) => {
  const educationId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const educationIndex = db.education.findIndex(e => e.id === educationId);
    if (educationIndex === -1) {
      return res.status(404).json({ error: 'Education not found' });
    }
    db.education.splice(educationIndex, 1);
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.status(204).send();
    });
  });
});

module.exports = router;
