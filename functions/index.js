const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
 //functions.logger.info("Hello logs!", {structuredData: true});
//response.send("Hello from Firebase!");
//});
exports.postAge=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('age').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getAge = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('age').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.postFirstName=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('firstName').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getFirstName = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('firstName').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.postLastName=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('lastName').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getLastName = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('lastName').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.postGender = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('gender').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getGender = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('gender').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.postActivityLevel=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('activityLevel').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getActivityLevel = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('activityLevel').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.postGoal=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('goal').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getGoal = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('goal').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.postHeight=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('height').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getHeight = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('height').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.postWeight=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('weight').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getWeight = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('weight').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});	

exports.authorizedendpoint = functions.https.onRequest((request, response) => {
    // 1. Receive comment data in here from user POST request
    // 2. Connect to our Firestore database
    cors(request, response, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            response.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            response.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myAge = [];
                admin.firestore().collection('age').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        response.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
                        let docObj = {};
                        docObj.id = doc.id;
                        myAge.push(Object.assign(docObj, doc.data()));
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
                    response.send(myAge);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            response.status(403).send('Unauthorized');
            return;
        }
    });
});
