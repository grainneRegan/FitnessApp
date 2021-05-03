
    function login(){
		
		let email = document.getElementById('exampleInputEmail1').value
		let password = document.getElementById('exampleInputPassword1').value
		
		firebase.auth().onAuthStateChanged((user) => {
			
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				console.log(user)
				// ...
			} else {
				// User is signed out
				// ...
				console.log("sign out")
			}
		});
		
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				console.log(userCredential)
				console.log("signed in")
				// Signed in
				var user = userCredential.user;
				// If successful redirect to a secure page
				window.location.href = "/index.html"
				document.cookie = "accessToken=" + user.za;
				document.cookie = "uid=" + user.uid;
				console.log(user);
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	}
	

	function logout(){
		console.log("Called logout")
	firebase.auth().signOut().then(() => {
		console.log("logout succesful")
		window.location.href = "/login2.html"
	  // Sign-out successful.
	}).catch((error) => {
		console.log("error")
	  // An error happened.
	});
	}

