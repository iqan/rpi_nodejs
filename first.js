var sys = require("sys"),
	fs = require('fs'),
	my_http = require("http");
	
fs.readFile('./html.html',function(err,html){
	if(err){
		throw err;
	}
	
	my_http.createServer(function(request,response){
		console.log("I got kicked");
		response.writeHeader(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	}).listen(3000);
});
console.log("Server Running on 3000");