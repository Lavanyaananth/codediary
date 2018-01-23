console.log("hello");
	function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;

}
function tempConverter(cel) {
  cel = parseFloat(cel);
  document.getElementById("outputFah").innerHTML=(cel*1.8)+32;
}