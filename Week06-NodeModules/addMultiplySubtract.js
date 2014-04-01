function addMultiplySubtract() {
console.log("addMultiplySubtract called!");
return (((1+2)*3)-2);
}

// Export the addMulitplySubtract method from this module.
// Otherwise it cannot be called from the main program.

// exports.addMultiplySubtract = new addMultiplySubtract());

exports.addMultiplySubtract = addMultiplySubtract;

