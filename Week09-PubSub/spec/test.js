require.config({
  paths: {
    "jquery": "http://code.jquery.com/jquery-1.11.0.min",
    "tinyPubSub": "Topic"
  }
});

require(["Calculate", "CalculateUi",], function(sub, pub) {
console.log("Require function called");
sub.subscriber();
pub.publisher();
});