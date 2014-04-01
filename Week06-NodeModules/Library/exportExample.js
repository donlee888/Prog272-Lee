var MyObject = (function() {

// Private Data
var helloString = "MyObject says hello";

// Constructor
function MyObject() {
console.log("MyObject.Constructor called!");
}

MyObject.prototype.sayHello = function() {
console.log(helloString);
};

return MyObject;

}());


// Export the myObject method from this module.
// Otherwise it cannot be called from the main program.

exports.myObject = new MyObject();
