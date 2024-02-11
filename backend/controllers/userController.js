const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};


