import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyADAkdvNLDBRQ334zzFeltve18vecJYr4I",
authDomain: "cloth-e94f5.firebaseapp.com",
databaseURL: "https://cloth-e94f5.firebaseio.com",
projectId: "cloth-e94f5",
storageBucket: "cloth-e94f5.appspot.com",
messagingSenderId: "824228026582",
appId: "1:824228026582:web:66ae9642ddd4aa16da1177"
};

firebase.initializeApp(config);
export const auth= firebase.auth();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;