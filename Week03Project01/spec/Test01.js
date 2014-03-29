describe("Week03 Cordova Miles Object Jasmine Unit Test", function() {'use strict';

	it("expect object Convert miles to be 3", function() {
		expect(Convert.miles).toBe(3);
	});

	it("expect object Convert feet per mile to be 5280", function() {
		expect(Convert.feetPerMile).toBe(5280);
	});

	it("expects object milesToFeet return 15840", function() {
		expect(Convert.milesToFeet()).toBe(15840);
	});

	it("expect object for Convert miles To Feet for 3 to be 15840", function() {
		var actual = Convert.milesToFeet();
		expect(Convert.milesToFeet(3)).toBe(15840);
	});

	it("expects object for miles * feetPerMile to be 3 * 5280", function() {
		var actual = Convert.milesToFeet();
		expect(Convert.miles * Convert.feetPerMile).toBe(3 * 5280);
	});

	it("expects Convert.celsiusToFarenheit(0) to equal 32", function() {
		var actual = Convert.celsiusToFarenheit();
		expect(actual).toBe(132);
	});

	it("expects Convert.squareRoot(3)", function() {
		var actual = Convert.squareRoot();
		expect(actual).toBe(9);
	});

});

