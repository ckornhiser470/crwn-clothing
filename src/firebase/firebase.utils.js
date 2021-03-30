import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyCWrI1SP3CrMIGe2rGmGmEdCpBuxRnPBrQ",
  authDomain: "crwn-db-aee03.firebaseapp.com",
  projectId: "crwn-db-aee03",
  storageBucket: "crwn-db-aee03.appspot.com",
  messagingSenderId: "1083193221683",
  appId: "1:1083193221683:web:ba750eb61d3065d4e67946",
  measurementId: "G-YQZNJLHJTD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//triggers google popup whenever we use this Google Auth Provider
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case we want the whole firebase library
export default firebase;
