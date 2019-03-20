var express = require('express');
var userModel = require.main.require('./model/medModel');
var router = express.Router();


router.get('/', (req, res)=>{
	
	if(req.session.type =='ADMIN'){
	userModel.getAll(function(results) {

		var user = {
		List: results
		};

		res.render('admin/all-medicine', user);
		});	
	}
	

	else {
        res.redirect("/login");
        }
		
});

 router.get('/edit/:id', (req, res)=>{

	if(req.session.type =='ADMIN'){
    
	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			var allData= {
				result : result[0],
				message : ''
			};
			res.render('admin/edit-meds', allData);
		}else{
			res.redirect('/');
		}
	});

	}

	else {
        res.redirect("/login");}
});

router.post('/edit/:id', (req, res)=>{
	var result = {
		name : req.body.medicine_name,
        price : req.body.price,
        med_desc : req.body.med_desc,
        category : req.body.category,
        vendor : req.body.vendor,
        type: req.body.medType,
        availability: req.body.availability
	};
	var user ={
		id: req.params.id,
		result : result,
		message : 'Medicine Info Updated'
	};
	
	userModel.updateMedInfo(user, function(success){
		if(success){
			res.redirect('/viewmedicines');
		}else{
			res.send('Updating Failed');
		}
	});
});

router.get('/delete/:id', (req, res)=>{

	userModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/viewmedicines');
		}
		else{
			res.redirect('/admindashboard');
		}
	});
});	




module.exports = router;