var Object2 = (function() {'use strict';

	var addresses = [];

	function Object2() {

		readData();

		$("#readData2").click(readData);
		$("#showData2").click(showData);
		$("#showAllData2").click(showAllData);
	}

	var readData = function() {
		console.log("readData called!");
		$.getJSON('/addresses', function(data) {
			addresses = data;
			console.log(data[0]);
			showRecord(0);			// show first record with index 0 only
			$("#mongoData").empty();
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

	var showRecord = function(index) {
		console.log("showRecord called!");
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
		showRecord(index);
	};

	var showAllData = function() {
		console.log("showAllData called!");
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

	return Object2;
})();

$(document).ready(function() {
	var myObject2 = new Object2();
});
