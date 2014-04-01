var calc = {
init: function(){
$( "#getFeetInMileButton" ).on( "click", calc.getFeetInMile );
$( "#calcFeetInMilesButton" ).on( "click", calc.CalcFeetInMiles );
$( "#calcCircumButton" ).on( "click", calc.calcCircum );
},
getFeetInMile: function(){
var myFeetToMiles = $( "#getFeetInMile" );
myFeetToMiles.load( "/getFeetInMile", function( response, status, xhr ){
if( status == "error" ){
myFeetToMiles.html( "Error: <strong>" + xhr.statusText + "</strong>" );
}
} );
},
calcFeetInMiles: function(){
var miles = $( "#milesInput" ).val();
$.ajax( {
url: "/calcFeetInMiles",
type: "GET",
data: {
"miles": miles
},
datatype: "json",
success: function( data ){
$( "#feetID" ).html( data.result );
},
error: function( jqxhr, status, errorThrown ){
console.log( jqxhr.responseText );
console.log( status );
console.log( errorThrown );
}
} );
},

calcCircum: function(){
var radius = $( "#radiusInput" ).val();
$.ajax( {
url: "/calcCircum",
type: "POST",
data: {
"radius": radius
},
datatype: "json",
success: function( data ){
$( "#circumID" ).html( data.result );
},

error: function( jqxhr, status, errorThrown ){
console.log( jqxhr.responseText );
console.log( status );
console.log( errorThrown );
}
} );
}
};
calc.init();