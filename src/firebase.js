import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7nkXJD9g1NIyQ7QfpkvE9jO7xwUtLvSQ",
    authDomain: "wicked-smaht.firebaseapp.com",
    databaseURL: "https://wicked-smaht.firebaseio.com",
    projectId: "wicked-smaht",
    storageBucket: "wicked-smaht.appspot.com",
    messagingSenderId: "938422774458",
    appId: "1:938422774458:web:d87d38fc5a63a5d1f83083",
    measurementId: "G-Y5J2VR6YL2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
