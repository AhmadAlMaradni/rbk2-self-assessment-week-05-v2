var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

// var router  = express.Router();

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */

   // get request for /users page
app.get('/users',function(req , res){
	User.findAll().then(function(users){
		res.send(JSON.stringify(users))
	})
	
})
   
    // get request for index page
app.get('/',function(req , res){
	res.send('user')
})


module.exports = { 
  app: app,
  User: User
};
