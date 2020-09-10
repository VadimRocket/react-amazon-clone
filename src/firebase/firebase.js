import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqyJbYau-OEKTIhbGp24CGiSMZcE71t6A",
    authDomain: "clone-98e52.firebaseapp.com",
    databaseURL: "https://clone-98e52.firebaseio.com",
    projectId: "clone-98e52",
    storageBucket: "clone-98e52.appspot.com",
    messagingSenderId: "293445552495",
    appId: "1:293445552495:web:5de5d893d8198af5d1009a",
    measurementId: "G-WSSB84CXS6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}