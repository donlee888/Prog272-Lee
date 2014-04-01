Calculate.Publisher = (function() {

	function Publisher() {

		$("#addButton").click({
			i : 'add'
		}, pub);
		$("#multiplyButton").click({
			i : 'multiply'
		}, pub);
		$("#subtractButton").click({
			i : 'substract'
		}, pub);

	}

	function showData(value) {
		$("#response").html(value);
	}

	var pub = function(event) {
		var object = {
			a : number1(),
			b : (),
			html : function(value) {
				showData(value);
			},
			operation : event.data.i
		};
		$.Topic('calculate').publish(object);
	};

/*
	var parseNumber1 = function() {
		return parseInt($("#input1").val());
	};

	var parseNumber2 = function() {
		return parseInt($("#input2").val());
	};
*/

	return Publisher;

})();

$(document).ready(function() {
	new calculate.Subscriber();
	new calculate.Publisher();
}); 