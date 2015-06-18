var http = require('http');
var bl = require('bl');

// Soultion #1
// var index=2;
// var length = process.argv.length;

// function getContent(url) {
// 	http.get(url, function (response) {
// 		response.pipe(bl(function (err, data) {
// 			if (err) {
// 				return console.error("There was an error: " + err);
// 			}
			
// 			console.log(data.toString());
// 			index++;
// 			if (index < length) {
// 				getContent(process.argv[index]);
// 			}
// 		}));
// 	});
// }

// getContent(process.argv[2]);

//Solution #2
var results = [];
var count = 0;
function getContent(index) {
	http.get(process.argv[index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err) {
				return console.error("There was an error: " + err);
			}

			results[index-2] = data.toString();
			count++;

			if (count === process.argv.length-2 ) {
				// for (var i=0; i<results.length; i++) {
				// 	console.log(results[i]);
				// }
				results.forEach(function (entry) {
					console.log(entry);
				});
			}
		}));
	});
}

for (var index=2; index<process.argv.length; index++) {
	getContent(index);
}

