$(document).ready(function{

	var edito = document.getElementById("edit");

	$(edit).blur(function(){
		localStorage.setItem("Ruaje", this.innerHTML);
	});

	// kur shfaqet faqja
	if (localStorage.getItem("Ruaje"))
	{
		edit.innerHTML = localStorage.getItem("Ruaje");
	}
});