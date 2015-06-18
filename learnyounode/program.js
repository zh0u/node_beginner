/// <reference path="typings/node/node.d.ts"/>

var myModule = require('./readdirModule.js');

myModule(process.argv[2], process.argv[3], function (err, data) {
	if (err) {
		console.log('There was an error: ' + err);
	}
	else {
		// for(var i=0; i< data.length; i++) {
		// 	console.log(data[i]);
		// }
		
		data.forEach(function (file) {
			console.log(file);
		});
	}
});