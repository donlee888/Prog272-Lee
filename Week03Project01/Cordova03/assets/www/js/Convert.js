
/* author Don Lee Prog 272 Week 3 Project*/
/* jshint strict: true */

console.log("Week 3 Cordova Assignment - Convert Object");

var ConsoleTest = true;
if (ConsoleTest) {
	console.log("index.js sanity check has started!");
}


// Object with embedded functions to convert:
// 1. miles To Feet
// 2. celsius To Fareheit Degree
// 3. Square Root of an integer

 // query Selector


document.addEventListener('DOMContentLoaded', function() {'use strict'
//   var userInput = document.getElementById("userInputID").value;
	document.getElementById('feetToMilesID').innerHTML = Convert.feetToMiles;
	document.getElementById('celsiusToFarenheitID').innerHTML = Convert.celsiusToFarenheit;
	document.getElementById('squareRootID').innerHTML = Convert.squareRoot;
}, false);


// var userInput = document.getElementById("userInputID").value;
// var userInput = $('#userInputID').val();

/*
var Convert = {

	miles : 3,
	celsiusDegree: 32,
	numberToSquare: 9,		
	feetPerMile : 5280,

	that: this;
	input : $("#userInput").val();
	feetPerMile : 5280,
	
	feetToMiles : function() {'use strict';
		return this.miles * this.feetPerMile;
		
	celsiusToFarenheit : function() {'use strict';
		return ((this.celsiusDegree * (9/5) + 32));
		
	squareRoot : function() {'use strict';
		return this.numberToSquare * this.numberToSquare;	
	
	}
};

*/

function Convert() {   
    
    var that = this;
    var feetPerMile = 5280;
    
    //feetToMiles
    
    var feetToMilesPrivate = function() {
        var miles = $("#userInput").val();
        var result = that.feetToMiles(miles);
        $("#userInput").val(result);
    };
    
    this.feetToMiles = function(miles) {
        return miles * feetPerMile;
    };
    
    $("#milesButton").click(feetToMilesPrivate);
    
    // CelsiusToFarenheit
    
        var celsiusToFareheitPrivate = function() {
        var celsiusDegree = $("#userInput").val();
        var result = that.celsiusToFarenheit(celsiusDegree);
        $("#userInput").val(result);
    };
    
    this.celsiusToFarenheit = function(celsiusDegree) {
		return ((celsiusDegree * (9/5) + 32));       
	
    };
    
    $("#C2FButton").click(celsiusToFareheitPrivate);
  
  // square Root
    
        var squareRootPrivate = function() {
        var number = $("#userInput").val();
        var result = that.squareRoot (celsiusDegree);
        $("#userInput").val(result);
    };
    
    this.squareRoot = function(number) {
		return (number * number);       
	
    };
    
    $("#squareButton").click(squareRootPrivate);
    
}

