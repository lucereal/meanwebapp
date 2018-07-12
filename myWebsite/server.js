const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //MW so we can make req to our api from different domain
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('connected to database' + config.database);
});
//on error
mongoose.connection.on('error', (err) => {
	console.log('database error: ' + err);
});

const users = require('./routes/users');

//Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use(express.static(path.join(__dirname, 'public')));


//routes
//app.use('/users', users);

app.get('/', function(req,res){
	app.send('invlalid endpoint');
});

app.route('/resume').get((req,res,next) =>{
	//const requestedResumeName = req.body.name;
	res.json({
		success: true,
		resume: {
			name: "dav",
			school: "Texas Tech University",
			gpa: 3.5
		}
	});
})
app.route('/resume').post( (req,res) =>{
	const requestedResumeName = req.body.name;
	console.log(req.body.name);
	res.json({
		success: true,
		resume: {
			name: requestedResumeName,
			school: "Texas Tech University",
			gpa: 3.5
		}
	});
	
})

app.listen(3000,function(){
	console.log('Listening on port 3000.');
})