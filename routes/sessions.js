const express = require('express');
const router = express.Router();
const client = require('../db');

router.get('/', async (req, res) => {
  try {
    const sessions = await client.db('MindForgeDB').collection('Sessions').find().toArray();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
});

module.exports = router;
