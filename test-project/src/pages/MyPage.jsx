import db, { auth } from '../data/firebase'
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, getDoc, getDocsFromCache } from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from '@firebase/util';

const MyPage = () => {
  let array = []
  const [reciept, setReciept] = useState([]);
  const [newReciept, setNewReciept] = useState();

  // useEffect( async()=>{
  //   const currentUserUid = window.sessionStorage.getItem("uid");
  //   console.log(currentUserUid)
  //   const filteredReciept = query(collection(db,"reciept"),where("uid","==", currentUserUid ))
  //   const reciepts = await getDocs(filteredReciept);
  //   reciepts.forEach((doc)=>{
  //     array.push(doc.data());
  //   })
  //   console.log(array);
  //   setReciept(array);
  //   set
  //   // console.log(reciept[0].parseReciept[0].name);
  // },[])

  return (  
    <div>
      <h1>마이페이지</h1>
      {/* {
        reciept.map((r,i)=>(
          <div>
            <p>{r[i].parseReciept.forEach((item)=>{
              {item.name}
            })}</p>
          </div>
        ))
      } */}
    </div>
  );
}

export default MyPage;