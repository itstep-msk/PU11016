var box = document.querySelector(".box");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var width = document.querySelector(".box img").width;
var maxCount = box.childElementCount - 1;
var minCount = 0;
var count = 0;

next.addEventListener("click", function() {
	if (count == maxCount) return
	count++;
	box.style.marginLeft = (count * -width) + "px";
})

prev.addEventListener("click", function() {
	if (count == minCount) return
	count--;
	box.style.marginLeft = (count * -width) + "px";
})