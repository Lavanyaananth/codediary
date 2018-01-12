

// as soon as the page is loaded...
window.onload =  function () {
   var timer = 60;

var interval = setInterval(function() {
    timer--;
    $('.timer').text(timer);
    if (timer === 0) clearInterval(interval);
}, 1000);
};