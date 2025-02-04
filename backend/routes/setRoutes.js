// setRoutes.js
const express = require('express');
const Set = require('../models/Set');
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router();

// Fetch set details based on setNumber
router.get('/fetchSetDetails', async (req, res) => {
  const { setNumber } = req.query;

  if (!setNumber) {
    return res.status(400).json({ error: 'Set number is required' });
  }

  try {
    const setData = await Set.findOne({ "sets.setNumber": setNumber });
    if (!setData) {
      return res.status(404).json({ error: 'Set not found' });
    }

    const setDetails = setData.sets.find(set => set.setNumber == setNumber);
    if (!setDetails) {
      return res.status(404).json({ error: 'Set details not found' });
    }

    res.json({ sets: [setDetails] });
  } catch (error) {
    console.error('Error fetching set details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to store sets data
router.post('/add', authenticateUser, async (req, res) => {
  const { sets } = req.body;

  try {
    const newSet = new Set({
      user: req.user._id, 
      sets: sets, 
    });

    await newSet.save();
    res.status(201).json({ message: 'Sets stored successfully!' });
  } catch (error) {
    console.error('Error storing sets:', error);
    res.status(500).json({ message: 'Error storing sets data' });
  }
});

module.exports = router;
