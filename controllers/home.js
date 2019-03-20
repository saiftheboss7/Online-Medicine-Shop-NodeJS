var express = require('express');
var userModel = require.main.require('./model/medModel');
var router = express.Router();


router.get('/', (req, res)=>{

	userModel.getAll(function(results){
		if(results.length > 0){
			
			var allData = {
				name: req.session.name,
				result: results
			};
			res.render('home/meds', allData);
		}
	});	
});	


router.get('/ordermed/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			var allData= {
				result : result[0],
				message : ''
			};
			res.render('med-booking', allData);
		}else{
			res.redirect('/');
		}
	});	
});


router.post('/ordermed/:id', (req, res)=>{

	var user = {
		product_id: req.params.id,
		orderedBy: req.body.name,
		email: req.body.email,
		quantity: parseInt(req.body.quantity),
		phone: req.body.phone,
		totalprice: 0,
		price: 0,
		message: "Order placed successfully"
	};

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			user.price = result[0].price;

			user.totalprice = user.price * parseInt(user.quantity);
			
  
			userModel.insertOrder(user, function(results) {
				res.redirect('/');
			});
		  }
});	
});


	


module.exports = router;