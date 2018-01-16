window.onload = function(){
	console.log("test");

	function loginAction() {
		
		console.log("login ..");
		var uname = document.getElementById('uname').value;
		console.log(uname);
		var pwd = document.getElementById('pwd').value;
		if (uname == "admin" && pwd == "admin"){
			document.location.href = "home.html";
		}
		else{
			document.write("user name or password you have entered is wrong");
		}
			
	}

	var login = document.getElementById('login');
login.addEventListener('click', loginAction, false);

	function goHome(){
		console.log("signing out");
		location.href="index.html";
	};	

}
