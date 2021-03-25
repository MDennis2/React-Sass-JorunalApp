import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAhwpaVH_5fjJoPomvwqWlWcnPreMrnnm0",
    authDomain: "react-app-pruebas-88465.firebaseapp.com",
    projectId: "react-app-pruebas-88465",
    storageBucket: "react-app-pruebas-88465.appspot.com",
    messagingSenderId: "1092522601514",
    appId: "1:1092522601514:web:0dac23fbd83db6eb2ca753"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}