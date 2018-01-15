window.onload = function (){
// the function which handles the input field logic
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
    location.href = "https://twitter.com/" + nameField;
}
// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);



}