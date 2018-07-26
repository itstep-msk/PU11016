var button = document.querySelector(".button");
var popup = document.querySelector(".popup");
var body = document.body;

document.addEventListener("click", function(e) {
	if (e.target != popup && popup.style.display == "block") {
		popup.style.display = "none";
		body.classList.remove("shadow");
	} else if (e.target == button) {
		popup.style.display = "block";
		body.classList.add("shadow");
	}
})

