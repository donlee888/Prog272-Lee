describe( "Module Test", function(){
	
it( "expects getFeetInMile to be '5280 feet in 1 mile.'", function(){
expect(getFeetInMile(1)).toBe("There are 5280 feet in a mile.");
} );
it( "expects 5 miles to be 26400 feet", function(){
expect(calcFeetInMiles( )).toBe(26400 );
} );
it( "expects the circumference of a circle with radius of 10 to be close to 62.8 (or 2 * Math.PI * radius);
};", function(){
expect(calcCircum(10) ).toBeCloseTo(62.80)
} );