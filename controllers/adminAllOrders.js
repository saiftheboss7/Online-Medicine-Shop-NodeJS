var express = require('express');
var userModel = require.main.require('./model/medModel');
var router = express.Router();


router.get('/', (req, res)=>{

	userModel.getAllOrders(function(results) {

		var user = {
		List: results
		};

		res.render('admin/all-orders', user);
		});


});



module.exports = router;