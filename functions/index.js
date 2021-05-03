const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

exports.postUser=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('user').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getUser = functions.https.onRequest((request,responseUser)=>{
	
    cors(request, responseUser, () => {
        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            responseUser.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            responseUser.status(403).send('Unauthorized');
            return;
        }

        try {
            admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                // Use token.uid to get documents belonging to a user
                let myAge;
                admin.firestore().collection('user').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseUser.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
						myAge = doc.data()
						//myAge = doc.get('Age','uid');
                    });

                    // 2. Send data back to client
					console.log(myAge);
                    responseUser.send(myAge);
                })
            });
        }   catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            responseUser.status(403).send('Unauthorized');
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
                admin.firestore().collection('user').where('uid', '==', token.uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        responseUnits.send('No data ');
                        return;
                    }

                    snapshot.forEach(doc => {
						console.log('info doc:', doc);
						if(doc.get('Weightlbs') === undefined){
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
