import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../data/DataContext";

// import { firestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { auth, firestore } from "../data/firebase";
import db from '../data/firebase'
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, getDoc, getDocsFromCache } from "firebase/firestore";
import { useState } from "react";
import { get, getDatabase } from "firebase/database";
import { getIdToken } from "firebase/auth";

const MainComment = ({newArray, setNewArray, getData}) => {
  const { id } = useParams();
  const user = auth.currentUser;

  useEffect(()=>{
    getData(id);
  },[])

  return (
    <div style={{ height: "100%", overflow: "auto", padding: "10px" }}>
      {newArray.map((item, i)=>(
        <div style={{margin: "5px"}}>
          <p style={{margin: 0, fontWeight: "bold"}}>{item.name}</p>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <p>{item.comment}</p>
            {
              user.displayName == item.name ? (
                <button style={{border:"none", backgroundColor: "transparent"}}
              onClick={async()=>{
                const review = firestore.collection("review");
                const sameCommentDoc = query(collection(db, "review"),where("comment","==", item.comment));
                const sameCommnetDocs = await getDocs(sameCommentDoc);
                sameCommnetDocs.forEach((doc)=>{
                  review.doc(`${doc.id}`).delete();
                  alert("댓글을 삭제하였습니다")
                })
                setInterval(()=>{ window.location.reload()
                },1000);
              }}
            >delete</button>
              ):
              (" ")
            }
        
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default MainComment;