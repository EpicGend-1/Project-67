import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAAhIWgQir1sCeqiNdvnJH0MXxHMo2LQUA",
    authDomain: "project-67-4fd37.firebaseapp.com",
    projectId: "project-67-4fd37",
    storageBucket: "project-67-4fd37.appspot.com",
    messagingSenderId: "769231849350",
    appId: "1:769231849350:web:3e9a890ab07b9eb5100e07"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();