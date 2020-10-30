import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1rBj-V-mYPC84F9YDNDzXjbzQEvVOvrQ",
    authDomain: "aclothingcompany-db.firebaseapp.com",
    databaseURL: "https://aclothingcompany-db.firebaseio.com",
    projectId: "aclothingcompany-db",
    storageBucket: "aclothingcompany-db.appspot.com",
    messagingSenderId: "472902563309",
    appId: "1:472902563309:web:5060d61e272add89d963e4",
    measurementId: "G-6JSMN5GVXD"
  };

firebase. initializeApp(firebaseConfig);

// setting up for authentication and storage
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up for google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;


