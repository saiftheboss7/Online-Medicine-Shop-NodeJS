var express = require('express');
var userModel = require.main.require('./model/userModel');
var router = express.Router();


router.get('/', (req, res)=>{

		res.render('admin/add-new-user');
});

router.post('/', (req, res)=>{

	var user = {
	username : req.body.username,
	password : req.body.password,
	name : req.body.name,
	email : req.body.email,
	usertype : req.body.usertype
	};


		userModel.checkUser(user, function(result) {
			if(result.length == 0) {
				userModel.insertUser(user, function(success){
					if(success){
						res.redirect('/allusers');
					}else{
						res.send("Failed");
					} 
				});
			}
		});	


});

	

module.exports = router;