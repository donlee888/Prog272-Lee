var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

var url = 'mongodb://localhost:30025';

  MongoClient.connect(url, function(err, db) {

	var collection = db.collection('test_data');
	var Qty = 250;

	for (var i = 1; i <= 250; i++) {
		Qty + i;
		collection.insert({

			"firstName" : "Don" + (i),
			"lastName" : "Lee" + (i),
			"Address" : (i) + "123 Main St., Bellevue, WA 98006"
		}, function(err, docs) {

		});
	}

	collection.find().toArray(function(err, results) {
		console.dir(results);
		collection.count(function(err, count) {
			console.log(format("count = %s", count));
			db.close();
		});

	});

})