console.log("yoyoyo");

$.get("test/home.html", function (data, status) {
	$("nav").insertAfter(data);
	console.log("Got home.html with status " + status);
});




