const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);
async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    app.use('/api/users', require('./routes/users'));
    app.use('/api/tutors', require('./routes/tutors'));
    app.use('/api/sessions', require('./routes/sessions'));
    app.use('/api/bookings', require('./routes/bookings'));
    app.use('/api/auth', require('./routes/auth'));

    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  } catch (err) {
    console.error(err);
  }
}
run();