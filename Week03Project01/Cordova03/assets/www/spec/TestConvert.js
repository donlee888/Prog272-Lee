describe("Week03 Cordova Miles Object Jasmine Unit Test", function() {'use strict';

	it("expect object Convert miles to be 3", function() {
		expect(Convert.miles).toBe(3);
	});

	it("expect object Convert feet per mile to be 5280", function() {
		expect(Convert.feetPerMile).toBe(5280);
	});

	it("expects object feetToMiles return 15840", function() {
		expect(Convert.feetToMiles()).toBe(15840);
	});

	it("expect object for Convert miles To Feet for 3 to be 15840", function() {
		var actual = Convert.feetToMiles();
		expect(Convert.feetToMiles(3)).toBe(15840);
	});

	it("expects object for miles * feetPerMile to be 3 * 5280 feet", function() {
		var actual = Convert.feetToMiles();
		expect(Convert.miles * Convert.feetPerMile(3)).toBe(3 * 5280);
	});

	it("expects Convert.celsiusToFarenheit(0) to equal 32 degrees", function() {
		var actual = Convert.celsiusToFarenheit();
		expect(Convert.celsiusToFarenheit(0)).toBe(32);
	});

	it("expects Convert.squareRoot(3) to equal to 9", function() {
		var actual = Convert.squareRoot();
		expect(Convert.squareRoot(3)).toBe(9);
	});

});

