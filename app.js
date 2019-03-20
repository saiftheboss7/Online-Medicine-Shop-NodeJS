//DECLARATION
var express 		= require('express');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var register        = require('./controllers/register');
var login			= require('./controllers/login');
var logout			= require('./controllers/logout');
var adminDashboard  = require('./controllers/adminDashboard');
var userDashboard  = require('./controllers/userDashboard');
var anh             = require('./controllers/adminAddNewMedicine');
var viewmedicines      = require('./controllers/viewmedicines');
var viewmeds      = require('./controllers/viewmeds-user');
var adminAllUsers    = require('./controllers/adminAllUsers');
var adminaddnewuser    = require('./controllers/adminAddNewUser');
var home			= require('./controllers/home');
var orders        = require('./controllers/adminAllOrders');
/*
var adminDashboard  = require('./controllers/adminDashboard');

var anh             = require('./controllers/adminAddNewHotel');
var adminAddNewRoom = require('./controllers/adminAddNewRoom');
var viewhotels      = require('./controllers/viewHotels');
var viewroom        = require('./controllers/viewroom');
var hotelEnquiry    = require('./controllers/hotelEnquiry');
*/
var app  			= express();
var port 			= 3000;


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/', home);
app.use('/register', register);
app.use('/assets',express.static('assets'));
app.use('/userdashboard', userDashboard);
app.use('/admindashboard', adminDashboard);
app.use('/logout', logout);
app.use('/addnewmedicine', anh);
app.use('/viewmeds', viewmeds);
app.use('/viewmedicines', viewmedicines);
app.use('/viewmeds',express.static('assets'));
app.use('/userdashboard/assets/',express.static('assets'));
app.use('/viewmedicines',express.static('assets'));
app.use('/ordermed/:id',express.static('assets'));
app.use('/viewmedicines/edit/:id',express.static('assets'));
app.use('/allusers', adminAllUsers);
app.use('/addnewuser', adminaddnewuser);
app.use('/orders', orders);
app.use('/orders',express.static('assets'));
app.use('/allusers/edit/:id',express.static('assets'));


/*
app.use('/home', home);

app.use('/home', home);


app.use('/addnewhotel', anh);
app.use('/viewhotels', viewhotels);
app.use('/viewroom', viewroom);
app.use('/addroom', adminAddNewRoom);

app.use('/enquiry', hotelEnquiry);



app.use('/admindashboard/assets/',express.static('assets'));
app.use('/hotel-room/assets',express.static('assets'));
app.use('/hotel-room/:id/assets',express.static('assets'));

app.use('/viewroom/edit/:id',express.static('assets')); */



//ROUTES

// app.get('/', function(req, res) {
// 	res.redirect('/home');

// });



//SERVER STARTUP
app.listen(port, ()=>console.log('server started at'+port+"..."));