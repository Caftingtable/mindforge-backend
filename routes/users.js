const express = require('express');
const router = express.Router();
const client = require('../db');

router.get('/', async (req, res) => {
  try {
    const users = await client.db('MindForgeDB').collection('Users').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;