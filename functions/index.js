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
	/*cors(request, response, () => {
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
});	*/
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
                let myAge;
                admin.firestore().collection('age').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        response.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myAge = doc.get('Age');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myAge);
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

exports.postFirstName=functions.https.onRequest((request,responseFirst)=>{
	cors(request, responseFirst, () => {
	return admin.firestore().collection('firstName').add(request.body).then(()=>{
		responseFirst.send("Saved in the database");
	});
	});
});

exports.getFirstName = functions.https.onRequest((request,responseFirst)=>{
	cors(request, responseFirst, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseFirst.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseFirst.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myFirstName;
                admin.firestore().collection('firstName').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseFirst.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myFirstName = doc.get('First Name');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myFirstName);
                    responseFirst.send(myFirstName);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseFirst.status(403).send('Unauthorized');
            return;
        }
    });
});	

exports.postLastName=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('lastName').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getLastName = functions.https.onRequest((request,responseSecond)=>{
	cors(request, responseSecond, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseSecond.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseSecond.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myLastName;
                admin.firestore().collection('lastName').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseSecond.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myLastName = doc.get('Last Name');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myLastName);
                    responseSecond.send(myLastName);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseSecond.status(403).send('Unauthorized');
            return;
        }
    });
});	

exports.postGender = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('gender').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getGender = functions.https.onRequest((request,responseGender)=>{
		cors(request, responseGender, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseGender.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseGender.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myGender;
                admin.firestore().collection('gender').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseGender.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myGender = doc.get('Gender');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myGender);
                    responseGender.send(myGender);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseGender.status(403).send('Unauthorized');
            return;
        }
    });
});

exports.postActivityLevel=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('activityLevel').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getActivityLevel = functions.https.onRequest((request,responseActivity)=>{
	cors(request, responseActivity, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseActivity.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseActivity.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myActivity;
                admin.firestore().collection('activityLevel').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseActivity.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myActivity = doc.get('ActivityLevel');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myActivity);
                    responseActivity.send(myActivity);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseActivity.status(403).send('Unauthorized');
            return;
        }
    });
});

exports.postGoal=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('goal').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getGoal = functions.https.onRequest((request,responseGoal)=>{
	cors(request, responseGoal, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseGoal.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseGoal.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myGoal;
                admin.firestore().collection('goal').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseGoal.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myGoal = doc.get('Goal');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myGoal);
                    responseGoal.send(myGoal);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseGoal.status(403).send('Unauthorized');
            return;
        }
    });
});

exports.postHeight=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('height').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getHeight = functions.https.onRequest((request,responseHeight)=>{
	cors(request, responseHeight, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseHeight.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseHeight.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myHeight;
                admin.firestore().collection('height').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseHeight.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myHeight = doc.get('Post Height','Post Inches');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myHeight);
                    responseHeight.send(myHeight);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseHeight.status(403).send('Unauthorized');
            return;
        }
    });
});

exports.getInches = functions.https.onRequest((request,responseInches)=>{
	cors(request, responseInches, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseInches.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseInches.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myInches;
                admin.firestore().collection('height').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseInches.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myInches = doc.get('Post Inches');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myInches);
                    responseInches.send(myInches);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseInches.status(403).send('Unauthorized');
            return;
        }
    });
});

exports.postWeight=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('weight').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getWeight = functions.https.onRequest((request,responseWeight)=>{
	cors(request, responseWeight, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseWeight.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseWeight.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myWeight;
                admin.firestore().collection('weight').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseWeight.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
						if(doc.get('Weight lbs') === undefined){
							myWeight = doc.get('Weight kg');
						} else {
							myWeight = doc.get('Weight lbs');
						}
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myWeight);
                    responseWeight.send(myWeight);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseWeight.status(403).send('Unauthorized');
            return;
        }
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
                let myAge;
                admin.firestore().collection('age').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        response.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
                        //let docObj = {};
                        //docObj.id = doc.id;
                        //myAge.push(Object.assign(docObj, doc.data()));
						myAge = doc.get('Age');
						//let result = myAge.map(({Age})=>Age)
						//myAge.push(doc.data());
                    });

                    // 2. Send data back to client
					console.log(myAge);
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

exports.checkUnits = functions.https.onRequest((request,responseUnits)=>{
	cors(request, responseUnits, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseUnits.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseUnits.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myUnits;
                admin.firestore().collection('weight').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseUnits.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
						if(doc.get('Weight lbs') === undefined){
							myUnits = "metric";
						} else {
							myUnits = "imperial";
						}
                    });

                    // 2. Send data back to client
					console.log(myUnits);
                    responseUnits.send(myUnits);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseUnits.status(403).send('Unauthorized');
            return;
        }
    });
});
