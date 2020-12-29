import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAalDUedJ1H82Xm4s3zCG_0bK7I1n1EDZE",
    authDomain: "clone-a9ecb.firebaseapp.com",
    projectId: "clone-a9ecb",
    storageBucket: "clone-a9ecb.appspot.com",
    messagingSenderId: "307789713048",
    appId: "1:307789713048:web:23283512475eb0bdd6caed",
    measurementId: "G-M3MFD3T4VB"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }