/**
 * @author Charlie Calvert
 */

describe("Test Convert", function() {
    
    it("tests milesToFeet(1) to yield 5280", function() {
       var convert = new Convert();
       expect(convert.feetToMiles(1)).toBe(5280); 
    });
    
    it("tests milesToFeet(2) to yield 10560", function() {
       var convert = new Convert();
       expect(convert.feetToMiles(2)).toBe(10560); 
    });
    
});
