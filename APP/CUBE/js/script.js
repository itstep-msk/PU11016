var field = document.querySelector(".field");
var cube = document.querySelector(".cube");
var operatorSelection = ["plus", "minus"];
var x = 0;
var y = 0;
var step = 10;

function getOperator() {
	return operatorSelection[Math.random().toFixed()]
}

function setRandomPos() {
	if (getOperator() == "plus") {
		if (x == field.offsetWidth - step) {
			x = field.offsetWidth - step*2;
			return
		}
		if (y == field.offsetHeight - step) {
			y = field.offsetHeight - step*2;
			return
		}
		
		x += +(Math.random().toFixed())*step;
		y += +(Math.random().toFixed())*step;
	}

	if (getOperator() == "minus") {
		if (x == 0) return
		if (y == 0) return
		x -= +(Math.random().toFixed())*step;
		y -= +(Math.random().toFixed())*step;
	}
	
}

setInterval(function() {
	setRandomPos();
	cube.style.marginLeft = x + "px";
	cube.style.marginTop = y + "px";
}, 10)