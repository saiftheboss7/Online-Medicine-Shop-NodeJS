var express = require('express');
var router = express.Router();
var userModel = require.main.require('./model/userModel');


router.get('/', (req, res)=>{
	if(req.session.type == "CUSTOMER"){
			res.render('login/userDashboard');
		}

			else{
				res.redirect('/login');
			}

});

router.post('/', (req, res)=>{
	/* if(req.session.name != 'khalid' && req.session.name != null ){
		 userModel.getUsers(function(result) {
			  obj = {
				getUsers: result
			  };
		
			  console.log(obj);

			  userModel.getHotels(function(results) {
				  getHotels = results;
				  console.log(getHotels);
		
		
				  userModel.getTours(function(results) {
					  getTours = results;
					  console.log(getTours);
		
					  //After successful completion of all 3 queries send data back to cliend(front-end)
					  //its better to create new obj everytime and send it
					  //store all the data in obj and send back to client
					  var obj = {};
					  obj.getUsers = result;
					  obj.getHotels = getHotels;
					  obj.getTours = getTours;
					  obj.name = req.body.uname;

					  console.log(obj.print);
					  res.render('login/userDashboard', obj);
				  });
				});
			  });
			}

			else{
				res.render('login');
			} */

});



router.get('/profile', (req, res)=>{

	profileid = req.session.uid;

	userModel.get(profileid, function(result){

		if(result.length > 0){
			res.render('user/profile', result[0]);
		}
	});	
});

router.post('/profile', (req, res)=>{

	var user ={
		id: req.session.uid,
		name: req.body.name,
		email: req.body.email,
		password : req.body.password
	};

	userModel.updateProfile(user, function(success){
		if(success){
			res.redirect('/userdashboard/profile');
		}else{
			res.send("Failed");
		}
	});

});




module.exports = router;