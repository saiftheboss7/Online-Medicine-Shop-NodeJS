var express = require('express');
var userModel = require.main.require('./model/userModel');
var mysql = require('mysql');
var router = express.Router();


router.get('/', (req, res)=>{
	res.render('register');
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
						res.send('Successfully Inserted <a href="/login">Now login</a>');
					}else{
						res.send("Failed");
					} 
				});
			}
		});	


});




module.exports = router;