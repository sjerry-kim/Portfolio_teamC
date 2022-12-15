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
    apiKey: "AIzaSyCUIedA7u8cw_toR13v0svPqBtdluxXFvk",
    authDomain: "fir-login-6362b.firebaseapp.com",
    projectId: "fir-login-6362b",
    storageBucket: "fir-login-6362b.appspot.com",
    messagingSenderId: "940266348977",
    appId: "1:940266348977:web:f2b31b4ed6509190009d90"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 진혜 추가
const db = getFirestore(app);
export default db;

const firestore = firebase.firestore();
export {firestore};
