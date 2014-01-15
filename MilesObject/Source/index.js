/**
 * @author donald.lee
 */

function add(a,b){
	return a+b;
}

describe("Elvenware Jasmine One Suite", function() {
it("expects true to be true", function() {
expect(true).toBe(true);
});

it("expects 1 + 1 to equal 2", function() {
expect(1+1).toBe(2);
});

it("expects 2 * 3 to equal 6", function() {
expect(2*3).toBe(6);
});

it("expects 4 * 2 to equal 8", function() {
expect(4*2).toBe(8);
});

it("expects 4 * 2 to equal 8", function() {
expect(4*2).toBe(8);
});

it("expects add(3,7) to equal 10", function() {
	   var actual = add(3,7);
		expect(actual).toBe(11);
});