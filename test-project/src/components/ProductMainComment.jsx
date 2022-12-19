
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

let arrayC = []

const MainComment = () => {
  //const { state, action } = useContext(DataContext);
  const { id } = useParams();
  const date = new Date();
  //const filteredMarket = state.comment.filter((f)=>(f.marketId == id))

  const [array, setArray] = useState([]);
  // const printComment = async() => {
  //   const filteredMarket = query(collection(db, "test"),where("marketId","==",`${id}`));
  //   const queryMarket = await getDocs(filteredMarket);
  //   queryMarket.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.data().comment)
  //     const newCommentObj = {comment: doc.data().comment, marketId: doc.data().marketId, star: doc.data().star};
  //     const addedCommentObj = array.concat(newCommentObj);
  //     setArray(addedCommentObj);
  //   });
  //   return array.map((c,i)=>(
  //     <div key={i}>
  //       <p>c.comment</p>
  //     </div>
  //   ))
  // }

  const [comment, setComment] = useState([]);
  const [marketId, setMarketId] = useState("");
  const [star, setStar] = useState("");
  const printComment = ()=>{
    // const filteredMarket = query(collection(db, "test"),where("marketId","==",`${id}`));
    // const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 ...
    // let array = []
    // queryMarket.forEach((doc)=>{
      
    // })

    // const newQueryMarket = Object.values(queryMarket);
    // console.log(newQueryMarket);

    // const doeRef = doc(db, "test", "comment");

    // () => {
    //   queryMarket.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     setComment(doc.data().comment)
    //     setMarketId(doc.data().marketId)
    //     setStar(doc.data().star)
    //   });
    //   const obj = {comment: comment, marketId:marketId, star:star};
    //   const addedArray = array.concat(obj);
    //   setArray(addedArray);
    //   return console.log(array);
    // }
    // getData();
    // setArray(arrayC)
    // console.log(array);
  }

  // useEffect(()=>{
  //   getData();
  //   setArray(arrayC)
  //   console.log(array);
  // },[])

  const getData = async() => {
    const filteredMarket = query(collection(db, "test"),where("marketId","==",`${id}`));
    const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 ...
    queryMarket.forEach((doc)=>{
        arrayC.push(doc.data());
    })
    console.log(arrayC);
  }

  getData();



  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {arrayC.map((c, i) => (
        <div key={i}>
          <p>{c}</p>
          
          {/* <button
            onClick={() => {
              const deletedText = state.comment.filter(
                (d, index) => i != index
              );
              if (true) {
                action.setComment(deletedText);
              }
              console.log(state.comment);
            }}
          >
            삭제
          </button> */}
        </div>
      ))}
    </div>
  );
};


export default MainComment;
