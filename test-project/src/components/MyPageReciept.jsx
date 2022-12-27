import '../css/MyPageReciept.css'
import db, { auth } from "../data/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocsFromCache,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import { useContext } from "react";
import DataContext from "../data/DataContext";

const MyPageReciept = () => {
  let array = [];
  const [reciept, setReciept] = useState([]);

  useEffect(() => {
    getReciept();
  }, []);

  const getReciept = async () => {
    // 현재 로그인한 사용자의 영수증만 모아옴
    const currentUserUid = window.sessionStorage.getItem("uid");
    console.log(currentUserUid);
    const filteredReciept = query(
      collection(db, "reciept"),
      where("uid", "==", currentUserUid),
      orderBy("timeStamp")
    );
    const reciepts = await getDocs(filteredReciept);
    reciepts.forEach((doc) => {
      // array.push(doc.data().parseReciept);
      array.push(doc.data());
    });
    console.log(array);
    setReciept(array);
  };

  const deleteReciept = () => {

  }

  return (
    <div className='mypagereciept-wallpaper'>
        <h3>맞춤 견적 영수증</h3>
        <div className="mypagereciept-div">
        {reciept.map((reciept, i) => {
          const mapArray = reciept;
          const mapReciept = reciept.parseReciept;

          return (
            <div className='mypagereciept-mini-reciept'>
              {mapReciept.map((r, i) => {
                return (
                  <div key={i}>
                    {r.name}, {r.answer}
                  </div>
                );
              })}
              <p>맞춤 업체 : {mapArray.result}</p>
              <button onClick={()=>{}}>영수증 삭제하기</button>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default MyPageReciept;
