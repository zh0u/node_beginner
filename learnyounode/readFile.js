var fs = require('fs');

fs.readFile(process.argv[2], function (error, data) {
	var str = data.toString();
	var lines = str.split('\n').length - 1;
	console.log(lines);
})