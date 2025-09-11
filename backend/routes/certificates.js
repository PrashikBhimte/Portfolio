const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateJWT } = require('./auth');

const router = express.Router();

// Certificate routes
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    res.json(db.certificates);
  });
});

router.post('/', authenticateJWT, (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const newCertificate = { id: Date.now(), ...req.body };
    db.certificates.push(newCertificate);
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(newCertificate);
    });
  });
});

router.put('/:id', authenticateJWT, (req, res) => {
  const certificateId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const certificateIndex = db.certificates.findIndex(c => c.id === certificateId);
    if (certificateIndex === -1) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    db.certificates[certificateIndex] = { ...db.certificates[certificateIndex], ...req.body };
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(db.certificates[certificateIndex]);
    });
  });
});

router.delete('/:id', authenticateJWT, (req, res) => {
  const certificateId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const certificateIndex = db.certificates.findIndex(c => c.id === certificateId);
    if (certificateIndex === -1) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    db.certificates.splice(certificateIndex, 1);
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
