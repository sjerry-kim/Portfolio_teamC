import db, { auth } from '../data/firebase'
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, getDoc, getDocsFromCache } from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from '@firebase/util';
import { useContext } from 'react';
import DataContext from "../data/DataContext";


const MyPageReciept = () => {
  let array = []
  let newArray = []
  const {state, action} = useContext(DataContext);
  const [reciept, setReciept] = useState([]);
  const [newReciept, setNewReciept] = useState();

  useEffect(()=>{
    getReciept();
  },[])

  const getReciept = async()=>{
    const currentUserUid = window.sessionStorage.getItem("uid");
    console.log(currentUserUid)
    const filteredReciept = query(collection(db,"reciept"),where("uid","==", currentUserUid ))
    const reciepts = await getDocs(filteredReciept);
    reciepts.forEach((doc)=>{
      array.push(doc.data().parseReciept);
    })
    console.log(array);
    setReciept(array);
    
  }

  return (  
    <div>
      <div>
        <h3>맞춤 견적 영수증</h3>
        {
          reciept.map((reciept,i)=>{
            const mapArray = reciept;
            return (
              <>
                {
                  mapArray.map((r,i)=>{
                    return(
                      <div key={i}>
                        {r.name}, {r.answer}
                      </div>
                    )
                  })
                }
              </>
              
              )
          })
        }
      </div>
    </div>
  );
}

export default MyPageReciept;