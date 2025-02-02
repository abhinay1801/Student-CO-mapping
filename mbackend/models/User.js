// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;



// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   isFirstTime: {
//     type: Boolean,
//     default: true
//   }
// });

// module.exports = mongoose.model('User', userSchema);




// User.js (in models folder)

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isFirstTime: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', userSchema);
