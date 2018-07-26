var dataSeconds = document.querySelector(".data-seconds");
var seconds = document.querySelector(".seconds");
var start = document.querySelector(".start");
var timer = 0;

start.addEventListener("click", function() {
	timer = seconds.value;
	startTimer()
})

function startTimer() {
	var i = setInterval(function() {
		timer--;
		dataSeconds.innerHTML = timer;

		if (timer == 0) {
			clearInterval(i);
		}
	},1000)
}