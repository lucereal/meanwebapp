const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //MW so we can make req to our api from different domain
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	school: {
		type: String,
		required: true
	},
	password: {
		type: Number,

	}
});



//connect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('connected to database' + config.database);
});
//on error
mongoose.connection.on('error', (err) => {
	console.log('database error: ' + err);
});

const User = mongoose.model('Resume', UserSchema, 'Resumes');

getUserByName = function (name) {
	User.find(name).then(data => {
		return data;
	})

}

function getUserByUsername(username) {
	const query = { name: username }

	return new Promise(function (resolve, reject) {
		User.findOne(query).then(data => {
			resolve(data);
		}).catch(err => {
			reject(Error('It broke'));
		})
	});
};

function createNewUser(user) {
	//console.log("new user: \n" + JSON.stringify(user));
	return new Promise(function (resolve, reject) {
		User.create(user).then(data => {
			resolve("User created successfully");
		}).catch(err => {
			reject("Unable to create user");
		})
	});
}

const users = require('./routes/users');

//Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


//routes
//app.use('/users', users);

app.get('/', function (req, res) {
	app.send('invlalid endpoint');
});

app.route('/resume').get((req, res, next) => {
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
app.route('/resume').post((req, res) => {
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


app.route('/register').post((req, res) => {
	const name = req.body.name;
	const school = req.body.school;
	const gpa = req.body.gpa;
	// console.log(req.body.name);
	// console.log(school);
	// console.log(gpa);
	let user = {
		name: name,
		school: school,
		gpa: gpa
	}

	getUserByUsername(name).then(data => {

		if (data) {
			//console.log("Found user: \n" + data);
			res.json({success:false,msg:"user already exists"})
		} else {
			createNewUser(user).then(data => {
				//console.log(data);
				res.json({success:true, msg:data})
			}).catch(err => {
				//console.log(err);
				res.json({success:false, msg:err})
			})
		}

	}).catch(err =>{
		console.log(err);
		res.json({success:false,msg:"unknown error, could not getUserbyUsername in db"})
	})

}); //end post('register')


app.listen(3000, function () {
	console.log('Listening on port 3000.');
})