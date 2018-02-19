console.log("I'm travelling");
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2018,02,19);
var secondDate = new Date(1991,09,11);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
console.log(diffDays);