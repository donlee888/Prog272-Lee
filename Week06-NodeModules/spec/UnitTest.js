describe("Node Moldues Unit Test Suite", function() {
	it("expects 7 + 3 to equal 10", function() {
		expect(addSubtractMultiply.add(testNum1, testNum2)).toBe(10);
	});
	it("expects 7 * 7 to equal 49", function() {
		expect(addSubtractMultiply.multiply(testNum1, testNum2)).toBe(49);
	});
	it("expects 7 - 1 to equal ", function() {
		expect(addSubtractMultiply.subtract(testNum1, testNum2)).toBe(6);
	});
	it("expects 5280 feet to equal to 1 mile", function() {
		expect(feetToMiles(5280)).toBe(1);
	});
	mySquareRootTest = new squareRoot();
	it("expects the square root of 49 to be 7", function() {
		expect(mySquareRootTest.returnSquare(49)).toBe(7);
	});
}); 