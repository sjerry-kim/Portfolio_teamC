import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";

// import { firestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { firestore } from "../data/firebase";
import db from '../data/firebase'
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { auth } from "../data/firebase";

const ProductInsertComment = ({getData}) => {
  const { state, action } = useContext(DataContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [name, setName] = useState("홍길동"); // 💛 uset 이름으로 변경해야함
  const [num, setNum] = useState(1);

  const { id } = useParams();

  //undefined 값을 지정해줘야한다. -> 이게 뭐야..?



  // + 2022-12-15 주석처리 안하니 오류났음 💛 
  // useEffect(()=>{
  //   const star = Firestore.collection("starlist")
  //     star.data('store').set({starlist : '[]'})
  // })


  const [newArray, setNewArray] = useState([]);
  let array = []

  // const sendComment = (e) => {
  //   e.preventDefault();
  //   setNum(num + 1);
  //   const newText = { marketId: id, commentId: num , name: name, text: text ,};
  //   const addText = state.comment.concat(newText);
  //   // 별점이 바로 들어감 -> 수정 필요
  //   text ? action.setComment(addText)
  //     : alert("댓글을 입력해주세요");
  //   document.querySelector(".question-text").value = "";
  //   setText("");
  //   console.log(state.comment)
  // };

  // 1217 진혜 작성
  const [date, setDate] = useState("");
  let sameDoc = [];
  const [userName, setUserName] = useState("");

  const InsertComment = async (e)=> {
    e.preventDefault();
    const userUid = window.sessionStorage.getItem('uid');
    //const userUid = user.uid;
    
    const sameAccount = query(collection(db, "member"),where("uid","==",userUid));
    const sameAccountDoc = await getDocs(sameAccount); 
    sameAccountDoc.forEach((doc)=>{
      sameDoc.push(doc.data());
    })
    console.log(sameDoc)

    try{
      setUserName(sameDoc[0].name);
    console.log(userName)
      const docRef = await addDoc(collection(db, "test"),{
        comment: text,
        star: rating,
        marketId: id,
        name: userName,
        timeStamp: new Date(),
      })
      console.log(docRef.id)
    }catch(e){
      console.error("Error", e);
    }
    getData(id)
  }

  return (
  <div>
      <Form onSubmit={InsertComment}>
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
          {/* <Form.Select
            onChange={e => setRating(e.target.value)}
            defaultValue="5"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>                     */}
          <Button  variant="secondary" type="submit"> {/**+ 2022-12-15 버튼에 들어가있던거 💛 onClick={sendRating} */}
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
    alignItems: "center"
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
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
}