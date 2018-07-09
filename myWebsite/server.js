import express, { static } from 'express';
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(static('public')); //for css file
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index');
});

app.route('/resume/:name').get((req,res) =>{
	const requestedResumeName = req.params['name'];
	res.send({
		resume: {
			name: requestedResumeName,
			school: "Texas Tech University",
			gpa: 3.5
		}
	});
})
app.route('/resume/:name').post((req,res) =>{
	app.send(201, req.body); //default send method status code is 200
	//but 201 is status code for something 'created'
	
})
app.get('/projects', function(req,res){
	res.send('Projects');
})
app.listen(3000,function(){
	console.log('Listening on port 3000.');
})