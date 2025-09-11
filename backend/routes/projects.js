const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateJWT } = require('./auth');

const router = express.Router();

// Project routes
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    res.json(db.projects);
  });
});

router.post('/', authenticateJWT, (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const newProject = { id: Date.now(), ...req.body };
    db.projects.push(newProject);
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(newProject);
    });
  });
});

router.put('/:id', authenticateJWT, (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const projectIndex = db.projects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }
    db.projects[projectIndex] = { ...db.projects[projectIndex], ...req.body };
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(db.projects[projectIndex]);
    });
  });
});

router.delete('/:id', authenticateJWT, (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const projectIndex = db.projects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }
    db.projects.splice(projectIndex, 1);
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
