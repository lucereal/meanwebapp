const express = require('express');

const app = express();

app.use(express.static('public')); //for css file
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index');
});

app.get('/resume', function(req,res){
	res.send('Resume will go here');
})

app.get('/projects', function(req,res){
	res.send('Projects');
})
app.listen(3000,function(){
	console.log('Listening on port 3000.');
})