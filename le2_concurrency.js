
// print world every 5 secs
setInterval(function() {
	console.log("world");
}, 5000);

console.log("hello");

var http = require('http')

// get google headers every 2 secs
setInterval(function() {
	console.log("fetching headers from google every 2 seconds");

	http.get({host: 'google.com'}, function(res) {
		console.log(res.headers);
	});
}, 2000);

// create a server
server = http.Server(function(req, res) {
	res.writeHead(200);
	res.end("Hi\n")
})

server.listen(8000);

// here we are doing tasks concurently on a single thread/process. 

// amazing thing is bechmark same with just one task (just the server) or along with other tasks.

// ab -n 100 -c 100 http://localhost:8000/