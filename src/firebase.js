// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC37VsyUxW8tyV3xWENr7AKyMeSqwvapWM",
  authDomain: "clone-3a4e4.firebaseapp.com",
  projectId: "clone-3a4e4",
  storageBucket: "clone-3a4e4.appspot.com",
  messagingSenderId: "595354585800",
  appId: "1:595354585800:web:0461bdb2c77101a94ef3fd",
  measurementId: "G-42989F0R52"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };