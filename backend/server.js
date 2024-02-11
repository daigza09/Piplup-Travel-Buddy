// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();

mongoose.connect('mongodb://localhost:8080', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
