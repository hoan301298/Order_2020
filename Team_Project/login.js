var account = [
	{ // Account 1
		username: "e2000579",
		password: "nguyennguyen"
	},
	{ // Account 2
		username: "e2000575",
		password: "hoantran"
	},
	{ // Account 3
		username: "e2000568",
		password: "thinhle"
	}

]

function loginPassword() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < account.length; i++) {
		
		if(username == account[i].username && password == account[i].password) {
			window.location="order.html"
			return
		}
	}
	alert("Wrong username or password");
	
}