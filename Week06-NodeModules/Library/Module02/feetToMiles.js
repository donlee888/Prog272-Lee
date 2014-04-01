var feetToMiles = function(feet){
console.log("feetToMiles.Constructor called!");
return feet / 5280;
};

// Export the myObject method from this module.
// Otherwise it cannot be called from the main program.

exports.feetToMiles = feetToMiles;