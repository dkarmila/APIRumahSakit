let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
require('./config/config.js');
global.config = require('./config/configJwt');
let verifyToken = require('./middleware/verifyToken');
let User   = require('./login/loginModel');

let app = express();
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
	next();
});
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8825));

let login = require("./login/loginRoute.js");
app.use("/api", login);

let diagnosaRoute = require("./diagnosa/diagnosaRoute.js");
app.use('/api', diagnosaRoute);

let diagnosaDetailRoute = require("./diagnosadetail/diagnosaDetailRoute.js");
app.use('/api', diagnosaDetailRoute);

let ruangInapRoute = require("./ruanginap/ruangInapRoute.js");
app.use('/api', ruangInapRoute);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});