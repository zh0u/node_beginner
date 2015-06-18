var fs = require('fs');
var path = require('path');

function readdir(dir, extname, callback) {
	fs.readdir(dir, function (err, data) {
		if (err) {
			return callback(err);
		}
		
		// var filterdFiles = [];
		// extname = '.' + extname;

		// for (var i=0; i<data.length; i++) {
		// 	if (path.extname(data[i]) === extname) {
		// 		filterdFiles.push(data[i]);
		// 	}
		// }
		
		// callback(null, filterdFiles);
		
		data = data.filter(function (file) {
			return path.extname(file) === '.'+extname;
		});
		
		callback(null, data);
	});
}

module.exports = readdir;