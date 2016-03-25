/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	signup : function (req,res){
		var params = req.params.all();
		var name = params.name;
		var pass  = params.password;
		User.create({
			name : name,
			password : pass
		}).exec(function createCB(err,created){
			if(err)
			{
				var outcome = {
					result : 'failure',
					message : 'error'
				}
				return res.send(outcome);
			}
			else {
				var outcome = {
					result : 'success',
					message : 'created'
				}
				return res.send(outcome);
			}
		});
	},
	login : function(req,res){
		var params= req.params.all();
		User.find({name : params.name,password : params.password}).exec(function findCB(err,found){
			if(found.length>0){
				var outcome = {
					result : 'success',
					message : 'loggedIn'
				}
				return res.send(outcome);
			}
			else{
				var outcome = {
					result : 'failure',
					message : 'wrongInfo'
				}
				return res.send(outcome);
			}
		});
	}
};

