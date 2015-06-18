/// <reference path="typings/node/node.d.ts"/>
var fs = require('fs');

if (process.argv.length > 2) {
	var buffer = fs.readFileSync(process.argv[2]);

	var str = buffer.toString();
	var lines = str.split('\n').length - 1;

	console.log(lines);
}
