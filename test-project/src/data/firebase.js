// Import the functions you need from the SDKs you need
import "firebase/database";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { firestore } from 'firebase/firestore';



//import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 진혜 추가
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "teamc-project-b7dfb.firebaseapp.com",
  projectId: "teamc-project-b7dfb",
  storageBucket: "teamc-project-b7dfb.appspot.com",
  messagingSenderId: "806323494311",
  appId:process.env.REACT_APP_FIREBASE_APIID,
  measurementId: "G-1ZGMDF529X",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 진혜 추가
const db = getFirestore(app);
export default db;

const firestore = firebase.firestore();
export { firestore };
