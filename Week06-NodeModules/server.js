// Link in Module01, Module02, Module03

var mod01 = require('./addMulitplySubtract.js');
var mod02 = require('./Library/milesToFeet.js');
var mod03 = require('./Public/squareRoot.js');

console.log("getNine returns: " + mod01.getNine());
mod02.myObject.sayHello();


var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(request, response) {
var html = fs.readFileSync(__dirname + '/Public/index.html');
response.writeHeader(200, {"Content-Type": "text/html"});
response.write(html);
response.end();
});


app.use("/", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);

