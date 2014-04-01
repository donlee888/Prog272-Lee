var squareRoot = (function() {

// Constructor
function squareRoot(miles) {
console.log("squareRoot.Constructor called!");
}
// Private Data
var privateDataString = "squareRoot Private String Data is called!";

// Constructor
MyObject.prototype.squareRoot = function() {
console.log(privateDataString);
};

return squareRoot;

}());

// Export the myObject method from this module.
// Otherwise it cannot be called from the main program.

// exports.squareRoot = squareRoot();
exports.squareRoot = new squareRoot();