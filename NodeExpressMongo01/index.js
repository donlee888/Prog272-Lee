var Object2 = (function() {'use strict';

	var records = [];

	function Object2() {

		readData();

		$("#readData2").click(readData);
		$("#showData2").click(showData);
	}

	var readData = function() {
		console.log("readData called!");
		$.getJSON('/records', function(data) {
			records = data;
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
		$('#inputID').html(records[index].id);
		$('#firstName').html(records[index].firstName);
		$('#lastName').html(records[index].lastName);
		$('#address').html(records[index].address);
		$('#city').html(records[index].city);
		$('#state').html(records[index].state);
		$('#zip').html(records[index].zip);
	};

	var showData = function() {
		console.log("showData called!");
		var index = $("#userInput2").val();
		showRecord(index);
	};

/*
	var readAllData = function() {
		console.log("readAllData called!");
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
