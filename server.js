import express from 'express';
var app = express();
import path from 'path';

app.use(express.static('build')); // express middleware to serve static files; build is folder it looks into for static files

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('running on port:3000');
});