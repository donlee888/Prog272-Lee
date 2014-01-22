$(document).ready(function () {
	var str = jQuery.validator.format("This one: {0}", 12);
	
	runTest();
});

function runTest()
{
	module("Basic Unit Test");

	test("Addition", function () {
		var actual = add(3, 7);
		var expected = 10;

		equals(actual, expected, jQuery.validator.format('Expected {0} as the result, result was: {1}', expected, actual));
	});
	
	module("Real Unit Test");

	test("Trial", function ()
	{
		equals(2, 2, 'Is two equal to 2');
	});
}

function add(a,b)
{
	return a + b;
}

