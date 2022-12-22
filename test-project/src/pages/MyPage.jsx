import db, { auth } from '../data/firebase'
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, getDoc, getDocsFromCache } from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from '@firebase/util';
import { useContext } from 'react';
import DataContext from "../data/DataContext";
import MyPageReciept from '../components/MyPageReciept';
import MypageNavbar from '../components/MypageNavbar';
import { Outlet } from 'react-router-dom';
import Notfound from './Notfound';
import MyPageAccount from '../components/MyPageAccount';


const MyPage = () => {


  return (  
    <div>
      {
        window.sessionStorage.login == 'true'? (
          <div>
            <MyPageAccount />
            <MyPageReciept />
          </div>
        ):(
          <Notfound/>
        )
      }
    </div>
  );
}

export default MyPage;