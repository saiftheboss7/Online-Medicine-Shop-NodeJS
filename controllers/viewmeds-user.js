var express = require('express');
var userModel = require.main.require('./model/medModel');
var router = express.Router();


router.get('/', (req, res)=>{
	
	if(req.session.type =='CUSTOMER'){
	userModel.getAll(function(results) {

		var user = {
		List: results
		};

		res.render('user/all-medicine', user);
		});	
	}
	

	else {
        res.redirect("/login");
        }
		
});




module.exports = router;