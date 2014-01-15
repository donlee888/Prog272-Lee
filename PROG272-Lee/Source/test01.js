/**
 * @author donald.lee
 */

/* Add JavaScript object called milesConvert
Add two fields: miles property, set it to 3
Add feetPerMile, set it to 5280
Add method called milesToFeet and implement it
*/

milesConvert

int miles = 3;
constfeetPerMile = 5280;
int milesToFeet;

function milesToFeet(miles, milesToFeet){
	return milesToFeet = miles * feetPerMile ;

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