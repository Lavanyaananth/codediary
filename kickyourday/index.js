
	onload = function () {
	var today = new Date();
var dd = today.getDate();
var day;

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'-'+mm+'-'+yyyy;
console.log(today);


console.log(today);

var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

switch (new Date().getDay()) {
    case 0:
      	word ="Sun day Fun day";
        break;
    case 1:
    	word ="Work hard play hard";
       console.log(word);
        break;
    case 2:
        word="All happiness depends on courage and work.";
        break;
    case 3:
        word="Out of clutter, find simplicity."
        break;
    case 4:
        word = "Work without love is slavery";
        break;
    case 5:
        word = "Pleasure in the job puts perfection in the work.";
        break;
    case  6:
        word = "Don't mistake activity with achievement.";
}

var n = weekday[d.getDay()];
 document.getElementById("day").innerHTML = n;
console.log(n);

var w = word;
 document.getElementById("wording").innerHTML = w;

 var date = today;
 document.getElementById("date").innerHTML = date;
};