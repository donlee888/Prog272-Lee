var milesToFeet = function(miles){
console.log("milesToFeet.Constructor called!");
return miles * 5280;
};

// Export the myObject method from this module.
// Otherwise it cannot be called from the main program.

exports.milesToFeet = milesToFeet;