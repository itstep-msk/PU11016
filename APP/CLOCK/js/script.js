var data = new Date();
var hour = document.querySelector(".arrow-hour");

hour.style.transform = "rotateZ(" + (360/12)*data.getHours() + "deg)"