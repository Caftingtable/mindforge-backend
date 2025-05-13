const express = require('express');
const router = express.Router();
const client = require('../db');

router.get('/', async (req, res) => {
  try {
    const bookings = await client.db('MindForgeDB').collection('Bookings').find().toArray();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;