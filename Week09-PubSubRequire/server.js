var express = require('express');
var app = express();
var fs = require("fs");
var getFeetInMile = require( "./Library/calcFeetInMiles.js" );
var calcCircum = require( "./Library/calcCircum.js" );

var connect = require("connect");
app.use(connect.urlencoded());
app.use(connect.json());

var port = process.env.PORT || 30025;

app.get("/getfeetInMile", function( request, response ){
response.send( getFeetInMile.feetInMile());
});

app.get( "/calcFeetInMiles", function(request, response){
var miles = parseInt(request.query.miles);
var result = getFeetInMile.calcFeetInMiles(miles);
response.send({"result": result});
} );

app.post("/calcCircum", function(request, response){
var radius = parseInt( request.body.radius );
var result = circumCircle.circumCircle( radius );
response.send({"result": result});
} );

app.get("/", function(request, response){
var html = fs.readFileSync(__dirname + "/Public/index.html");
response.writeHeader(200, {"Content-Type": "text/html"});
response.write( html );
response.end();
} );

app.use("/", express.static(__dirname + "/Public"));
app.listen( port );
console.log("Listening on port: " + port);