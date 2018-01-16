window.onload = function(){
	console.log("test");
	function loginAction(){
		console.log("login ..");
		var uname = document.getElementById('uname').value;
		var pwd = document.getElementById('pwd').value;
		location.href = "home.html";	
	}
	var login = document.getElementById('login');
login.addEventListener('click', loginAction, false);
}
