describe("Miles Object and Function Test", function() {'use strict';

	it("expect object milesConvert miles to be 3", function() {
		expect(milesConvert.miles).toBe(3);
	});

	it("expect object milesConvert feet per mile to be 5280", function() {
		expect(milesConvert.feetPerMile).toBe(5280);
	});

	it("expects object milesToFeet return 15840", function() {
		expect(milesConvert.milesToFeet()).toBe(15840);
	});

	it("expect object for milesConvert miles To Feet for 3 to be 15840", function() {
		expect(milesConvert.milesToFeet(3)).toBe(15840);
	});

	it("expects object for miles * feetPerMile to be 3 * 5280", function() {
		expect(milesConvert.miles * milesConvert.feetPerMile).toBe(3 * 5280);
	});

	it("expects fnMilesConvert(3) to equal 15840", function() {
		var actual = fnMilesConvert(3);
		expect(actual).toBe(15840);
	});

	it("expects fnMilesConvert(50) to equal 264000", function() {
		var actual = fnMilesConvert(50);
		expect(actual).toBe(264000);
	});

});

