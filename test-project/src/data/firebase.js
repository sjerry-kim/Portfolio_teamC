// Import the functions you need from the SDKs you need
import 'firebase/database';
import 'firebase/firestore';
import { initializeApp} from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { firestore } from 'firebase/firestore';

// import firebase from "firebase/compat/app"
// import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 진혜 추가
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO3WnDF9v1_SdD3iqJ7hAxNCobLpSyDJM",
    authDomain: "fir-login-c9c1b.firebaseapp.com",
    projectId: "fir-login-c9c1b",
    storageBucket: "fir-login-c9c1b.appspot.com",
    messagingSenderId: "916193764628",
    appId: "1:916193764628:web:43e9821cc83f9fcdab0e01"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 진혜 추가
const db = getFirestore(app);
export default db;

const firestore = firebase.firestore();
export {firestore};