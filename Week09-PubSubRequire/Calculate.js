function Calculate() {
	console.log("addMultiplySubtract called!"); 
	
	add: function(number1, number2) {
		return number1 + number2;
	}, 
	
	multiply: function(number1, number2) {
		return number1 * number2;
	}, 
	
	subtract: function(number1, number2) {
		return number1 - number2;
	}
};

var add = function(number1, number2) {
	return number1 + number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

// Export the addMulitplySubtract method from this module.
// Otherwise it cannot be called from the main program.

// exports.addMultiplySubtract = new addMultiplySubtract());

exports.add = add;
exports.multiply = multiply;
exports.subtract = subtract;

