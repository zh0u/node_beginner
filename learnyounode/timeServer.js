/// <reference path="typings/node/node.d.ts"/>

var net = require('net');

// Solution #1
// var server = net.createServer(function (socket) {
// 	var date = new Date();
	
// 	var yearStr = date.getFullYear() + "-";
	
// 	var month = date.getMonth() + 1;
// 	var monthStr = month + "-";
// 	if (month < 10) monthStr = "0" + monthStr;
	
// 	var day = date.getDate();
// 	var dayStr =  day + " ";
// 	if (day < 10) dayStr = "0" + dayStr;
	
// 	var hours = date.getHours();
// 	var hoursStr = hours + ":";
// 	if (hours < 10) hoursStr = "0" + hoursStr;
	
// 	var minutes = date.getMinutes();
// 	var minutesStr = minutes + "";
// 	if (minutes < 10) minutesStr = "0" + minutesStr;
	
// 	socket.write(yearStr + monthStr + dayStr + hoursStr + minutesStr + "\n");
// 	socket.end();
// });

// server.listen(Number(process.argv[2]));

// Solution #2
var strftime = require('strftime');
var server = net.createServer(function (socket) {
	socket.write(strftime("%Y-%m-%d %H:%M") + "\n");
	socket.end();
});
server.listen(Number(process.argv[2]));