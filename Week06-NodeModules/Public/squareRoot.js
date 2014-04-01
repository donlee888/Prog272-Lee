var squareRoot = ( function(){
var number = 0;

function squareRoot(){
}

console.log("squareRoot.Constructor called!");

squareRoot.prototype.returnSquare = function(number){
return Math.sqrt( number );
};

// Export the myObject method from this module.
// Otherwise it cannot be called from the main program.

exports.squareRoot = squareRoot;
// exports.squareRoot = new squareRoot();