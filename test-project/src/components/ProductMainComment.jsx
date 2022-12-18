
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../data/DataContext";

// 데이터 가져올때 필요
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../data/firebase";

const MainComment = () => {
  const { state, action } = useContext(DataContext);
  const { id } = useParams();
  const date = new Date();
  const filteredMarket = state.comment.filter((f)=>(f.marketId == id))

  const [fireinput, setFireinput] = useState();

  const textinput = async () => {
    const filteredMarket = query(collection(db, "test"), where("marketId", "==", `${id}`));
    /* cities라는 컬렉션의 문서 중 capital이라는 key의 값이 true인 문서들만 담기 */
      const querySnapshot = await getDocs(filteredMarket);
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setFireinput(doc.id, " => ", doc.data());
    });
  }

  console.log(fireinput)

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {filteredMarket.map((c, i) => (
        <div key={i}>
          {`이름: ${fireinput}`}
          {c.name}
          {c.text}
          <br />
          <p style={{ fontSize: "0.9em", color: "gray" }}>
            {`${date.getFullYear()}.
                            ${date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1
              }.
                            ${date.getDate() < 10
                ? `0${date.getDate()}`
                : date.getDate()
              }.　`}
            {/* {
                            `${date.getHours()} : ${date.getMinutes()<10 ? (`0${date.getMinutes()}`): date.getMinutes() }` 
                           } */}
          </p>
          <button
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
          </button>
        </div>
      ))}
    </div>
  );
};


export default MainComment;
