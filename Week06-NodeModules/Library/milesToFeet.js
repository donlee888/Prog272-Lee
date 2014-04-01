var milesToFeet = (function() {

// Constructor
function milesToFeet(miles) {
console.log("milesToFeet.Constructor called!");
}
// Private Data
var privateDataString = "milesToFeet Private String Data is called!";

// Constructor
MyObject.prototype.milesToFeet = function() {
console.log(privateDataString);
};

return milesToFeet;

}());

// Export the myObject method from this module.
// Otherwise it cannot be called from the main program.

// exports.milesToFeet =  milesToFeet();
exports.milesToFeet = new milesToFeet();