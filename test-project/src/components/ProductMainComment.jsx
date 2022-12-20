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

const MainComment = ({newArray, getData}) => {
  const { id } = useParams();
  // const [newArray, setNewArray] = useState([]);
  // let array = []

  // const getData = async() => {
  //   const filteredMarket = query(collection(db, "test"),where("marketId","==",`${id}`),orderBy("timeStamp"));
  //   const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 ...
  //   queryMarket.forEach((doc)=>{
  //       array.push(doc.data());
  //   })
  //   setNewArray(array);
  //   console.log(array);
  // }

  useEffect(()=>{
    getData(id);
  },[])

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {newArray.map((item)=>(
        <div>
          <p>{item.name} : {item.comment}</p>
        </div>
      ))}
      {/* <button onClick={getData}>댓글 수동 업데이트</button> */}
    </div>
  );
};

export default MainComment;
