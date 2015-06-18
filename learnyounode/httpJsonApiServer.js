var http = require('http');
var url = require('url');

function getParsedTime(iso) {
	var date = new Date(iso);

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

function getUnixtime(iso) {
	var date = new Date(iso);

	return {
		unixtime: date.getTime()
	};
}

function writeResponse(res, result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify(result));
		res.end();
}

http.createServer(function (req, res) {
	if (req.method != "GET") {
		res.end("send me a GET.\n");
	}

	var parsedUrl = url.parse(req.url, true);
	var result;
	if (parsedUrl.pathname === '/api/parsetime') {
		result = getParsedTime(parsedUrl.query.iso);
		writeResponse(res, result);
	}
	else if (parsedUrl.pathname === '/api/unixtime') {
		result = getUnixtime(parsedUrl.query.iso);
		writeResponse(res, result);
	}
	else {
		res.writeHead(404);
		res.end();
	}

}).listen(process.argv[2]);
