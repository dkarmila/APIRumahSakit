let mongoose = require('mongoose');

let login = mongoose.Schema(
    {
        Username: String,
	    Password: String
    },
    {
        collection: 'Login'
    }
);

let Login = module.exports = mongoose.model('Login', login);