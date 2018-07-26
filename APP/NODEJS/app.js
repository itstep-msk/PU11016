var http = require('http');

http.createServer(function(request, respons) {
		respons.setHeader("Content-type","text/html");
		respons.write("<h2>Hello world</h2>");
		respons.end();
		console.log("Сервер создан");
}).listen(8080);

