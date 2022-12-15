// Import the functions you need from the SDKs you need
import 'firebase/database';
import 'firebase/firestore';
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { firestore } from 'firebase/firestore';

import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//💖 2022-12-15 집에서 추가 💖
firebase.initializeApp(firebaseConfig); // 이거추가하니 밑에꺼오류났던거 안남
const firestore = firebase.firestore(); // firebase의 firestore 인스턴스를 변수에 저장
//--------------------------------------

const db = getFirestore(app);
export {db};

// 💖 2022-12-15 집에서 추가💖
// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export {firestore};



// 따로 가져와서 사용하자
