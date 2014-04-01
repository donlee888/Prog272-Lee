
var feetToMilesMod = require( "./Library/feetToMiles.js" );
var circumCircle = require( "./Public/circleCircumference.js" );

var connect = require( "connect" );
app.use( connect.urlencoded() );
app.use( connect.json() );

var port = process.env.PORT || 30025;

app.get( "/printfeetToMiles", function( request, response ){
response.send( feetToMilesMod.feetToMiles() );
} );

app.get( "/calcFeetToMiles", function( request, response ){
var miles = parseInt( request.query.miles );
var result = feetToMilesMod.calcFeetToMiles( miles );
response.send( { "result": result } );
} );

app.post( "/calcCircumference", function( request, response ){
var radius = parseInt( request.body.radius );
var result = circumferenceCircle.calcCircumferenceCircle( radius );
response.send( { "result": result } );
} );

app.get( "/", function( request, response ){
var html = fs.readFileSync( __dirname + "/public/index.html" );
response.writeHeader( 200, { "Content-Type": "text/html" } );
response.write( html );
response.end();
} );

app.use( "/", express.static( __dirname + "/public" ) );
app.listen( port );
console.log( "Listening on port: " + port );

