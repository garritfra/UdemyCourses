var button = document.querySelector("button");
var body = document.querySelector("body");
var isPink = false;
button.addEventListener("click",  function() {

if (isPink) {
	isPink = false;
	body.style.background = "pink";
} else {
	isPink = true;
	body.style.background = "white";
}


});