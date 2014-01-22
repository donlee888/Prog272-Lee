
        console.log("3 Miles is equal to " + milesConvert.milesToFeet() + " feet");

console.log ("Miles To Feet Converter");

var milesConvert = {
	miles: 3,
	feetPerMile: 5280;
	milesToFeet: function () { 'use strict';
		return this.miles * this.feetPerMile;
	}


describe("milesToFeet Unit Test One Suite",milesConvert() {
	it("expects true to be true", milesConvert() {
	expect(true).toBe(true);
});

describe("milesToFeet Unit Test One Suite",milesConvert() {
	it("expects miles * feetPerMile to be 3 * 5280", milesConvert() {
	expect(milesConvert.miles * milesConvert.feetPerMile).toBe(miles*feetPerMile);
});

