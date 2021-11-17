import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const apiKey = process.env.REACT_APP_FIREBASE_API;

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "uniifyweb.firebaseapp.com",
	databaseURL:
		"https://uniifyweb-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "uniifyweb",
	storageBucket: "uniifyweb.appspot.com",
	messagingSenderId: "615582005712",
	appId: "1:615582005712:web:193f7e2461296bde9d61d5",
};

const FirebaseApp = initializeApp(firebaseConfig);

export const FirestoreApp = getFirestore(FirebaseApp);
export const FirebaseAuthentication = getAuth(FirebaseApp);

export default FirebaseApp;
