function Object1() {

	var this=that;
	var max = 10;

	this.buttonID1 = function() {
		var id = parseInt($("#userInput1").val());
		if ((id <= 0) || (isNaN(id))) {
			id = 1;
			$("#userInput1").val(1)
		} else if (id > (max)) {
			id = 255;
			$("#userInput1").val(255)
		}
		console.log(parseInt($("#userInput1").val()));
		this.showData1(id - 1);
	};

	this.showData1 = function(id) {
		$.getJSON('/read', function(data) {
			var firstName = "<p>First Name: <span>" + data[id].firstName + "</span></p>";
			var lastName = "<p>Last Name: <span>" + data[id].lastName + "</span></p>";
			var address = "<p>Address: <span>" + data[id].Address + "</span></p>";
			var city = "<p>City: <span>" + data[id].City + "</span></p>";
			var state = "<p>State: <span>" + data[id].State + "</span></p>";
			var zip = "<p>Zip Code: <span>" + data[id].Zip + "</span></p>";
			$("#output").html(firstName + lastName + address);
		});
		console.log(data);
	};

	this.readData1 = function() {
		$.getJSON('/read', function(data) {
			max = data.length;
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				$("#showData1").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

}


$(document).ready(function() {

	var myObject1 = new Object1();

	myObject1.readData1();
	myObject1.showData1(0);

	$("#buttonID1").click(myObject.buttonID1);

});

var Object2 = (function() {'use strict';

	var addresses = [];

	function Object2() {
		$("#readData2").click(readData);
		$("#showData2").click(showData);

		readData();
	}

	var displayRecord = function(index) {
		console.log("displayRecord called!");
		$('#inputID').html(addresses[index].id);
		$('#firstName').html(addresses[index].firstName);
		$('#lastName').html(addresses[index].lastName);
		$('#address').html(addresses[index].address);
		$('#city').html(addresses[index].city);
		$('#state').html(addresses[index].state);
		$('#zip').html(addresses[index].zip);
	};

	var showData = function() {
		console.log("showData called!");
		var index = $("#userInput2").val();
		displayRecord(index);
	};

	var showAllData = function() {

		$.getJSON('/read', function(data) {
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});

	}
	/* example from https://github.com/charliecalvert/JsObjects/blob/master/Data/MongoTalk02/Public/index.js
	 function showAllData() {

	 $.getJSON('/read', function(data) {
	 console.log(data);
	 for (var i = 0; i < data.length; i++) {
	 $("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
	 }
	 });

	 }

	 $(document).ready(function() {
	 showData();
	 });
	 */

	var readData = function() {
		console.log("readData called");
		$.getJSON('/addresses', function(data) {
			addresses = data;
			console.log(data[0]);
			displayRecord(0);
			$("#mongoData").empty();
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

	return Object2;
})();

$(document).ready(function() {
	var myObject2 = new Object2();
});
