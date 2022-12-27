import "../css/MyPageReciept.css";
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
import { Link } from "react-router-dom";

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

  // const deleteReciept = () => {
  // }

  return (
    <div className="mypagereciept-wallpaper">
      <h3>맞춤 견적 영수증</h3>
      {
      reciept != "" ? (
        <div className="mypagereciept-div">
        {reciept.map((reciept, i) => {
          const mapArray = reciept;
          const mapReciept = reciept.parseReciept;
          return (
            <div className="mypagereciept-mini-reciept">
              <h3>미니 영수증</h3>
              <p>발행 : {mapArray.realDate}</p>
              <div className="mypagereiept-break">********************</div>
              {mapReciept.map((r, i) => {
                return (
                  <div className="mypagereciept-lists" key={i}>
                    <p>
                      {i + 1} {r.name}
                    </p>
                    <p>{r.answer}</p>
                  </div>
                );
              })}
              <div className="mypagereiept-break">********************</div>
              <h6>결과 업체</h6>
              <h5>{mapArray.result}</h5>
            </div>
          );
        })}
      </div>
      ) : (
        <div className="mypagereciept-noreciept">
        <p>비어있습</p>
        {/* <Link to='/main/estimation'>맞춤 견적 페이지로 이동하기</Link> */}
      </div>
      )
      }
    </div>
  );
};

export default MyPageReciept;
