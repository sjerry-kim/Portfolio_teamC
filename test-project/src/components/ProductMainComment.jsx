
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../data/DataContext";

// import { firestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { firestore } from "../data/firebase";
import db from '../data/firebase'
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, getDoc, getDocsFromCache } from "firebase/firestore";
import { useState } from "react";
import { get, getDatabase } from "firebase/database";
import { getIdToken } from "firebase/auth";


const MainComment = () => {
  const { id } = useParams();
  const [newArray, setNewArray] = useState([]);
  let array = []

  const getData = async() => {
    const filteredMarket = query(collection(db, "test"),where("marketId","==",`${id}`));
    const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 ...
    queryMarket.forEach((doc)=>{
        array.push(doc.data());
    })
    setNewArray(array);
  }
  useEffect(()=>{
    getData();
  },[newArray])

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {newArray.map((item)=>(
        <p>{item.comment}</p>
      ))}
    </div>
  );
};

export default MainComment;
