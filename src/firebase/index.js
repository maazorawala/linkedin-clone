import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBKYAachKaXAELYeqxoXQ0-G3FQRUEAGvE",
	authDomain: "final-clone-f777b.firebaseapp.com",
	projectId: "final-clone-f777b",
	storageBucket: "final-clone-f777b.appspot.com",
	messagingSenderId: "529747818269",
	appId: "1:529747818269:web:ea608559f1e8f041a313f4",
	measurementId: "G-TNJ63VT0SR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
