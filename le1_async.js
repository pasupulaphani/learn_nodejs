
var http =  require('http')

var server = http.createServer(function(req, res) {
	res.writeHead(200,  {"Content-Type": "text/plain"});
	res.write("hello \n")
	setTimeout(function() {
		res.end("world \n")
	}, 2000);
});

server.listen(8000);

console.log("server is running on port 8000");


// curl -i localhost:8000

// ab -n 100 -c 100 http://localhost:8000/