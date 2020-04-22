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

  // Implement Google sign in
  const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  }

  // Implement email sign in
  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
