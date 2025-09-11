const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateJWT } = require('./auth');

const router = express.Router();

// Testimonial routes
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    res.json(db.testimonials);
  });
});

router.post('/', authenticateJWT, (req, res) => {
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const newTestimonial = { id: Date.now(), ...req.body };
    db.testimonials.push(newTestimonial);
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(newTestimonial);
    });
  });
});

router.put('/:id', authenticateJWT, (req, res) => {
  const testimonialId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const testimonialIndex = db.testimonials.findIndex(t => t.id === testimonialId);
    if (testimonialIndex === -1) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    db.testimonials[testimonialIndex] = { ...db.testimonials[testimonialIndex], ...req.body };
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to write data' });
        return;
      }
      res.json(db.testimonials[testimonialIndex]);
    });
  });
});

router.delete('/:id', authenticateJWT, (req, res) => {
  const testimonialId = parseInt(req.params.id, 10);
  fs.readFile(path.join(__dirname, '../db.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    const db = JSON.parse(data);
    const testimonialIndex = db.testimonials.findIndex(t => t.id === testimonialId);
    if (testimonialIndex === -1) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    db.testimonials.splice(testimonialIndex, 1);
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
