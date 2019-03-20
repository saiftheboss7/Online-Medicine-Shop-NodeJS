var express = require('express');
var router = express.Router();


router.get('/', (req, res)=>{

	if(req.session.type =='ADMIN'){
		res.render('login/admindashboard');
	}

	else {
		res.redirect("/login");
	}

});

router.post('/', (req, res)=>{


});




module.exports = router;