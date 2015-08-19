var User = require('./../models/user');


//.save and .create do the same thing but the syntax is slightly different. 
module.exports = {
	create: function(req, res) {
		User.create(req.body, function(err, response){
			if(err) return res.status(500).json(err);
			else return res.json(response);
		});
	}
}

