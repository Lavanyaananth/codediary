window.onload = function (){

	// variable declarations needed
		var end = 00;
	var start = 00;

	var appendStart = document.getElementById("start");
	var appendEnd = document.getElementById("end");
	var startBtn = document.getElementById("btn-start");
	var resetBtn = document.getElementById("btn-reset");
	var stopBtn = document.getElementById("btn-stop");
	var Interval;

	// start btn action 
	startBtn.onclick = function(){
		console.log("start timer");
		clearInterval(Interval);
		Interval = setInterval(startTimer,10);
	}

	//stop btn action 

	stopBtn.onclick = function(){
		console.log("stop");
		clearInterval(Interval);
	}

	//Reset btn action 

	resetBtn.onclick = function(){
		console.log("reset");
		clearInterval(Interval);
		start = "00";
		end = "00";
		appendStart.innerHTML = start ; 
		appendEnd.innerHTML = end; 
	}

	//timer function 

	function startTimer (){
		start++;

		//start digit cases
		if (start<9){
			appendStart.innerHTML = "0" + start;
		}
		if (start > 9){
			appendStart.innerHTML = start;
		}
		if (start > 99) {
			console.log("convert it into seconds");
			end++;
			appendEnd.innerHTML = "0" + end;
			start = 0;
			appendStart.innerHTML = "0" + 0;
		}

		//end digit 

		if (end > 9){
			 appendEnd.innerHTML = end;
		}

	}

}