import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";
import "../css/ProductInsertComment.css";
// import { firestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { firestore } from "../data/firebase";
import db from "../data/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { auth } from "../data/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";



const ProductInsertComment = ({ getData }) => {
  const { state, action } = useContext(DataContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [name, setName] = useState("홍길동"); // 💛 uset 이름으로 변경해야함
  const [num, setNum] = useState(0);

  const { id } = useParams();

  const [newArray, setNewArray] = useState([]);
  let array = [];

  // 1217 진혜 작성
  const InsertComment = async e => {
    e.preventDefault();
    const user = auth.currentUser;
    setNum(num + 1);
    try {
        const docRef = await addDoc(collection(db, "review"), {
          comment: text,
          star: rating,
          marketId: id,
          name: user.displayName,
          commentId: num,
          timeStamp: new Date(),
      });
      console.log(user.displayName);
      console.log(docRef.id);
    } catch (e) {
      console.error("Error", e);
    }
    getData(id);
    document.querySelector(".productinsertcomment-question-control").value = "";
  };

  return (
    <div className="productinsertcomment-div">
      <Form onSubmit={InsertComment} className="productinsertcomment-form">
        <Form.Group
          className="productinsertcomment-fromgroup"
          controlId="exampleForm.ControlTextarea1" >
          <Form.Control
            as="textarea"
            className="productinsertcomment-question-control"
            onChange={e => {
              setText(e.target.value);
            }}
            placeholder="한줄평이나 코멘트를 남겨보세요!"
            rows={1}
          ></Form.Control>
          <Button
            className="productinsertcomment-question-btn"
            variant="secondary"
            type="submit"
          >
            <FontAwesomeIcon
              icon={faCheck}
            />
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductInsertComment;

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   stars: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   textarea: {
//     border: "1px solid #a9a9a9",
//     borderRadius: 5,
//     padding: 10,
//     margin: "20px 0",
//     minHeight: 100,
//     width: 300,
//   },
//   button: {
//     border: "1px solid #a9a9a9",
//     borderRadius: 5,
//     width: 300,
//     padding: 10,
//   },
// };
