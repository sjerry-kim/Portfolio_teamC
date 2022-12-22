import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";
import { Firestore, runTransaction, Transaction } from "firebase/firestore";
// 💖 + 2022-12-15 추가 한 import
import db, { firestore } from "../data/firebase";
import { set } from "firebase/database";
import { async } from "@firebase/util";
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, getDoc, getDocsFromCache } from "firebase/firestore";


const ProductInsertComment = ({ setList, list }) => {
  const { state, action } = useContext(DataContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [name, setName] = useState("홍길동"); // 💛 uset 이름으로 변경해야함
  const [num, setNum] = useState(1);

  const { id } = useParams();

  // 💖+2022-12-15💖 그냥 하나 더준거
  const startest = firestore.collection("startest");

  //undefined 값을 지정해줘야한다. -> 이게 뭐야..?

  // + 2022-12-15 주석처리 안하니 오류났음 💛
  // useEffect(()=>{
  //   const star = Firestore.collection("starlist")
  //     star.data('store').set({starlist : '[]'})
  // })
  const getData = async () => {
    const filteredMarket = query(
      collection(db, "test"),
      where("marketId", "==", `${id}`)
    );
    const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 …
    let array = [];
    queryMarket.forEach(doc => {});
  };

  // 💖 파이어베이스 값 가져오는거 +2022-12-15 💖
  useEffect(() => {
    // startest이라는 변수로 firestore의 collection인 startest에 접근!
    const startest = firestore.collection("startest");
    // collection의 document인 "startestplz"을 가져온다.
    startest
      .doc("startestplz")
      .get()
      .then(doc => {
        // document의 데이터를 가져옴
        console.log("가져온데이터", doc.data());
        // document의 id를 가져옴
        console.log("가져온아이디", doc.id);
      });
  }, []);

  // 💖 파이어베이스 값 startest에 문서,필드 추가 +2022-12-15 💖
  useEffect(() => {
    const startest = firestore.collection("startest");
    // startest 콜렉션의 info 문서에 {name: '문일윤', height: 180} 데이터 추가.
    // 새로 만들거나 덮어쓰기
    startest.doc("info").set({ name: "문일윤", height: 180 });
  });

  // 💖 파이어베이스 값 startest에 문서,필드 추가 +2022-12-15 💖 <- 수정할때만 주석해제
  // useEffect(()=>{
  //   const startest = firestore.collection("startest");
  //   // 기존 데이터 { name: 'duck', height: 180 }
  //   // startest 콜렉션의 starList 문서의 starList 필드 안녕 으로 바꾸기
  //   startest.doc("startestplz").update({ starList: '안녕' });
  // })

  const sendComment = e => {
    e.preventDefault();
    setNum(num + 1);
    const newText = { marketId: id, commentId: num, name: name, text: text };
    const addText = state.comment.concat(newText);
    // 별점이 바로 들어감 -> 수정 필요
    text ? action.setComment(addText) : alert("댓글을 입력해주세요");
    document.querySelector(".question-text").value = "";
    setText("");
    console.log(state.comment);
  };

  // 별점 onClick !!! 💛 + 2022-12-15 아래 onClick 주석처리 해놓음
  const sendRating = () => {
    const newText = { marketId: id, commentId: num, name: name, text: text };
    const addText = state.comment.concat(newText);
    text ? action.setComment(addText) : alert("댓글을 입력해주세요");
    setList(prev => [...prev, Number(rating)]);

    // 💖 2022-12-15
    // startest이라는 변수로 firestore의 collection인 bucket에 접근!
    const startest = firestore.collection("startest");
    // collection의 document인 "startest"을 가져온다.
    startest
      .doc("starList")
      .get()
      .then(doc => {
        // document의 데이터를 가져옴
        console.log("버튼눌름", doc.data());
        console.log("버튼눌름", doc.id);
        // document의 id를 가져옴
      });
  };

  return (
    <div>
      <Form onSubmit={sendComment}>
        <div></div>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Form.Control
            as="textarea"
            className="question-text"
            onChange={e => {
              setText(e.target.value);
            }}
            placeholder="Send your qusestions."
            rows={3}
          ></Form.Control>
          <Form.Select
            onChange={e => setRating(e.target.value)}
            defaultValue="5"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Button variant="secondary" type="submit" onClick={sendRating}>
            {" "}
            {/**+ 2022-12-15 버튼에 들어가있던거 💛 onClick={sendRating} */}
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductInsertComment;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};
