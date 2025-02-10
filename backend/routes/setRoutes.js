// // setRoutes.js
// const express = require('express');
// const Set = require('../models/Set');
// const authenticateUser = require('../middleware/authMiddleware');
// const router = express.Router();

// // Fetch set details based on setNumber
// router.get('/fetchSetDetails', async (req, res) => {
//   const { setNumber } = req.query;

//   if (!setNumber) {
//     return res.status(400).json({ error: 'Set number is required' });
//   }

//   try {
//     const setData = await Set.findOne({ "sets.setNumber": setNumber });
//     if (!setData) {
//       return res.status(404).json({ error: 'Set not found' });
//     }

//     const setDetails = setData.sets.find(set => set.setNumber == setNumber);
//     if (!setDetails) {
//       return res.status(404).json({ error: 'Set details not found' });
//     }

//     res.json({ sets: [setDetails] });
//   } catch (error) {
//     console.error('Error fetching set details:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Route to store sets data
// router.post('/add', authenticateUser, async (req, res) => {
//   const { sets } = req.body;

//   try {
//     const newSet = new Set({
//       user: req.user._id, 
//       sets: sets, 
//     });

//     await newSet.save();
//     res.status(201).json({ message: 'Sets stored successfully!' });
//   } catch (error) {
//     console.error('Error storing sets:', error);
//     res.status(500).json({ message: 'Error storing sets data' });
//   }
// });

// module.exports = router;













const express = require("express");
const Set = require("../models/Set");
const authenticateUser = require("../middleware/authMiddleware");
const router = express.Router();

// ✅ Fetch all unique subjects for the logged-in user
router.get("/fetchSubjects", authenticateUser, async (req, res) => {
  try {
    const subjects = await Set.find({ user: req.user._id }).distinct("subject");
    res.json({ subjects });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Fetch set details based on setNumber and subject
// ✅ Fetch all sets for a given subject
//authenticateUser
router.get("/fetchSets", authenticateUser,async (req, res) => {
  const { subject } = req.query;

  if (!subject) {
    return res.status(400).json({ error: "Subject is required" });
  }

  try {
    const setData = await Set.findOne({ subject: subject});

    if (!setData) {
      return res.status(404).json({ error: "No sets found for this subject" });
    }

    res.json({ sets: setData.sets });
  } catch (error) {
    console.error("Error fetching sets:", error);
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ Store sets data with subject
router.post("/add", authenticateUser, async (req, res) => {
  const { sets, subject } = req.body;

  if (!subject) {
    return res.status(400).json({ error: "Subject is required" });
  }

  try {
    // ✅ Check if the subject exists
    let existingSet = await Set.findOne({ subject: subject });

    if (existingSet) {
      // ✅ Update existing sets (remove old sets and add new ones)
      existingSet.sets = sets;
      await existingSet.save();
      return res.status(200).json({ message: "Sets updated successfully!" });
    }

    // ✅ Insert new subject with sets
    const newSet = new Set({
      user: req.user._id,
      subject: subject,
      sets: sets,
    });

    await newSet.save();
    res.status(201).json({ message: "Sets stored successfully!" });
  } catch (error) {
    console.error("Error storing sets:", error);
    res.status(500).json({ message: "Error storing sets data" });
  }
});


module.exports = router;
