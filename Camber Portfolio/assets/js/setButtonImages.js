// JavaScript Document

var invoke_make_blank = true;

if(invoke_make_blank){
	var buttonImages = document.getElementsByClassName("buttonimage");
	var buttons = document.getElementsByClassName("buttonpog");

	for (var i = 0; i < buttonImages.length; i++) {

		var imgurl = buttonImages[i].getAttribute("src");

		buttons[i].style.backgroundImage = "url('" + imgurl + "')";
	}

	invoke_make_blank = false;
}