const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //MW so we can make req to our api from different domain
const app = express();
const path = require('path');



app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
//app.use(static('public')); //for css file
//app.set('view engine', 'ejs');

app.get('/', function(req,res){
	//res.render('index');
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
app.get('/projects', function(req,res){
	res.send('Projects');
})
app.listen(3000,function(){
	console.log('Listening on port 3000.');
})