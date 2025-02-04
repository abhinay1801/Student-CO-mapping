// Set.js (models)
const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sets: [
    {
      setNumber: { type: Number, required: true },
      questions: [{ type: String }],
      coNumbers: [{ type: Number }]
    }
  ]
});

module.exports = mongoose.model('Set', setSchema);
