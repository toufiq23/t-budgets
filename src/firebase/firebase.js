import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId:process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

database.ref().set({
	name: 'M Toufiq ELAHI',
	age: 26,
	isActive: true,
	location: {
		city: 'Paris',
		country: 'France'
	}
}).then(() => {
	console.log('Data is saved');
}).catch((e) => {
	console.log('This failed.', e);
});

// database.ref().set('This is my data.');

database.ref('age').set(27);
database.ref('location/city').set('New York');

database.ref('attributes').set({
  height: 73,
  weight: 150
}).then(() => {
	console.log('Second set call worked.');
}).catch((e) => {
	console.log('Things didnt for the second error', e);
});