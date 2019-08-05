var express = require('express')
var app = express()
var mongoose = require('mongoose')


if(process.env.MLAB_USERNAME_WEBDEV) {
   var username = process.env.MLAB_USERNAME_WEBDEV;
   var password = process.env.MLAB_PASSWORD_WEBDEV;
   connectionString = 'mongodb://' + username + ':' + password;
   connectionString += '@ds019638.mlab.com:19638/heroku_674vnd6l';
   mongoose.connect(connectionString, {useNewUrlParser: true});
}

//mongoose.connect('mongodb://localhost:27017/wbdv-su19', {useNewUrlParser: true});

var pageSchema = mongoose.Schema({
	title: String
}, {collection: 'students'});

var pageModel = mongoose.model('PageModel', pageSchema)

pageModel.find()
	.then(students => console.log(students))


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure CORS
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin",
       "http://localhost:4200");
   res.header("Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods",
       "GET, POST, PUT, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Credentials", "true");
   next();
});

var universityService = require(
	'./services/university.service.server.js')
universityService(app)

app.listen(process.env.PORT || 3000)

