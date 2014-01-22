/* author Don Lee */
/* jshint strict: true */

console.log ("Miles To Feet Converter - Object");

var milesConvert = {
	miles: 3,
	feetPerMile: 5280;
	milesToFeet: function () { 'use strict';
		return this.miles * this.feetPerMile;
	}
};
