function register()
{
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
		
	firebase.auth().onAuthStateChanged((user) => {
	
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			console.log(user)
			
			firebase.auth().signOut().then(() => {
				
				firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
					
					window.location.href = "/login2.html"
					console.log(userCredential.user);
					
				}).catch((error) => {
					console.log(error.errorMessage, error.errorCode);
				});
				
			}).catch((error) => {
				console.log(error.errorMessage, error.errorCode);
			});
		} else {
			
			firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
					
				window.location.href = "/login2.html"
				console.log(userCredential.user);
					
			}).catch((error) => {
				console.log(error.errorMessage, error.errorCode);
			});
		}
	});
}