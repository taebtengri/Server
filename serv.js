var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) {

	var good = ["You rock!", "You are the best!", "You are awesome!", "Ave you!", "You are the chosen one!"];

	var x = Math.floor((Math.random()*4) + 1);


  response.end(good[x]);
}

function handleRequest2(request, response) {

	var bad = ["Ewwwww", "Go away.", "Get lost.", "Please don't come back.", "Bye. Forever."];

	var x = Math.floor((Math.random()*4) + 1);


  response.end(bad[x]);
}


var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


server1.listen(PORT1, function() {

  console.log("Server listening on: http://localhost:%s", PORT1);

});

server2.listen(PORT2, function() {

  console.log("Server listening on: http://localhost:%s", PORT2);

});

