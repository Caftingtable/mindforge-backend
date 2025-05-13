const express = require('express');
const router = express.Router();
const client = require('../db');

router.get('/', async (req, res) => {
  try {
    const tutors = await client.db('MindForgeDB').collection('Tutors').find().toArray();
    res.json(tutors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tutors' });
  }
});

module.exports = router;