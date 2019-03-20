var express = require('express');
var userModel = require.main.require('./model/medModel');
var router = express.Router();


function getDateTime() {

    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}
router.get('/', (req, res)=>{

    var user = {
        message: ''
        };
    
    if(req.session.type =='ADMIN'){
        res.render('admin/add-new-medicine', user);
        }

    else {
        res.redirect("/login");
        }
});

router.post('/', (req, res)=>{
    
     var product = {
        name : req.body.medicine_name,
        price : req.body.price,
        med_desc : req.body.med_desc,
        category : req.body.category,
        image : 'dist/img/medicine.png',
        vendor : req.body.vendor,
        type: req.body.medType,
        availability: req.body.availability,
        message : 'Medicine Added',
        list : ''
    };

    userModel.insert(product, function(success){
		if(success){
			res.render('admin/add-new-medicine', product);
		}else{
            product.message = "Adding Hotel Was Failed";
			res.render('admin/add-new-medicine', product);
		}
    });
     

});



module.exports = router;