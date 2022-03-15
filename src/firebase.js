import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZTgvhQRncNP8FecB__8O7oEmS4ZEEFc8",
  authDomain: "netflix-clone-171e6.firebaseapp.com",
  projectId: "netflix-clone-171e6",
  storageBucket: "netflix-clone-171e6.appspot.com",
  messagingSenderId: "119654075618",
  appId: "1:119654075618:web:741c8ef3104a9a50dae2bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
