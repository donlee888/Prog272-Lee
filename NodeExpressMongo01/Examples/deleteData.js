var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

var url = 'mongodb://localhost:30025';

MongoClient.connect(url, function(err, db) {
	if (err)
		throw err;

	var collection = db.collection('test_data');
	collection.remove(function(err) {
		if (err) {
			throw err;
		}
		db.close();
	});

})

/*
var collection = database.collection('test_insert');
collection.remove(function(err) {
    if (err) {
        throw err;
    }
    database.close();
});

function showData() {

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