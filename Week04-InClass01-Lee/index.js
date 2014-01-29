/**
 * @author Donald Lee;
 */

$(document).ready(function() {
	$("#paragraph01").html("This sentence added by jQuery");
});

function myObject() {

	$("#button01").click(foo);

	/*	$("#paragraph01").html("This sentence is added by jQuery"); */

	function foo() {

		console.log("foo");
		$("#paragraph02").html("This sentence added by jQuery, too.");
	}

	/*	 foo(
	 ); */

}


$(document).ready(function() {
	myObject();
	$("#paragraph01").html("This sentence added by jQuery, too.");

});

