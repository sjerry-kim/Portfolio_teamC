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
  const [num, setNum] = useState(0);

  const { id } = useParams();

  const [newArray, setNewArray] = useState([]);
  let array = []

  // 1217 진혜 작성
  const InsertComment = async (e)=> {
    e.preventDefault();    
    const user = auth.currentUser;
    setNum(num+1);
    try{
      const docRef = await addDoc(collection(db, "review"),{
        comment: text,
        star: rating,
        marketId: id,
        name: user.displayName,
        commentId: num,
        timeStamp: new Date(),
      })
      console.log(user.displayName);
      console.log(docRef.id)
    }catch(e){
      console.error("Error", e);
    }
    getData(id)
    document.querySelector(".question-text").value = "";
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