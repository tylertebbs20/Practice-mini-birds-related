var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  updated_at: { type: Date, defaul: Date.now },
  level: { type: Number, min: 0, max: 100 },
  location:  { type: String },
  member: { type: Boolean }
});

//anytime I am about to save a user, call the following function
userSchema.pre('update', function(next){
	//to alter the user do "this"
	this.updated_at = new Date();
	next();
});

var User = mongoose.model('User', userSchema);
 
module.exports = User;



