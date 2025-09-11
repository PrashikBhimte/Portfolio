const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateJWT } = require('./auth');

const router = express.Router();

// Experience routes
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    res.json(db.experience);
  });
});

router.post('/', authenticateJWT, (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const newExperience = { id: Date.now(), ...req.body };
    db.experience.push(newExperience);
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(newExperience);
    });
  });
});

router.put('/:id', authenticateJWT, (req, res) => {
  const experienceId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const experienceIndex = db.experience.findIndex(e => e.id === experienceId);
    if (experienceIndex === -1) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    db.experience[experienceIndex] = { ...db.experience[experienceIndex], ...req.body };
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(db.experience[experienceIndex]);
    });
  });
});

router.delete('/:id', authenticateJWT, (req, res) => {
  const experienceId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const experienceIndex = db.experience.findIndex(e => e.id === experienceId);
    if (experienceIndex === -1) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    db.experience.splice(experienceIndex, 1);
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
