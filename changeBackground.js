
function changeBackground() {
	
	var date = new Date();
	
	var hours = date.getHours();
	var ampm = hours >= 12 ? 'pm' : 'am';
	
	if (ampm == 'pm') {
		document.body.style.backgroundImage = "url('background10.jpg')";
	} else {
		document.body.style.backgroundImage = "url('images2.jpg')";
	}
}
