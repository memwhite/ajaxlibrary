//Hello World
/*var app = require('express')();

	var httpListeningTool = require('http').Server(app);
	app.get('/', function(request, response){
		response.send('<h1>Hello World</h1>')
	});

	httpListeningTool.listen(3000, function(){
		console.log('listening on *:3000')

	});
	*/


	//Accessing express module
	var app = require('express')();
	//Using http - module that is innate to Node.js (already built in)
	//('http') -built in node module - we're passing in the app variable though the built in server function
	var http = require('http').Server(app);
	
	//app.get - first argument is a path
	//second argument is callback
	// '/' root directory
	app.get('/', function(req, res){
		res.sendFile(__dirname + '/index.html');
	});

	//Prints to the console.

	//Wildcard - whatever your server is 3000
	http.listen(3000, function(){
		console.log('listening on *:3000');
	});