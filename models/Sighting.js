var mongoose = require('mongoose');
var birdSchema = require('./bird.js');
var userSchema = require('./user.js');

var sightingSchema = new mongoose.Schema({
  
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bird: [birdSchema],
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 },
});


module.exports = mongoose.model('Sighting', sightingSchema);
