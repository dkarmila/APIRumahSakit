var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let verifyToken = require('../middleware/verifyToken');
let User = require('./loginModel');
global.config = require('../config/configJwt');
//let UserController = require('./loginController.js');

router.post('/login/authenticate', function(req, res){
    let data = {
        Username: req.body.Username,
        Password: req.body.Password
    };
    User.findOne(data).lean().exec(function(err, user){
        if(err){
            return res.json({error: true});
        }
        if(!user){
            return res.status(404).json({'message':'User not found!'});
        }
        console.log(user);
        let token = jwt.sign(user, global.config.jwt_secret, {
            expiresIn: 1440 // expires in 1 hour
        });
        console.log(token);
        res.json({error:false,token:token});
    });
});

module.exports=router;