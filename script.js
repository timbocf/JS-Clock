// JS Clock from https://codepen.io/codifiedconcepts/pen/bwgxRq

var showCurrentTime = function() {
  
  var currentTime = new Date();
  
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Adds leading zeroes to times
  if(hours < 10) {
    hours = "0" + hours;
  }
  if(minutes < 10) {
    minutes = "0" + minutes;
  }
  if(seconds < 10) {
    seconds = "0" + seconds;
  }
  
  var clock =   document.getElementById("clock");

  var clockTime = hours + ":" + minutes + ":" + seconds;

  clock.innerText = clockTime;
}

var updateClock = function() {
  var time = new Date().getHours();
  showCurrentTime();
}
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);