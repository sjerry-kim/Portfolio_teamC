import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../data/DataContext";



const ProductInsertComment = () => {
  const { state, action } = useContext(DataContext);
  const [text, setText] = useState("");
  const [name, setName] = useState("홍길동");
  const [num, setNum] = useState(0);
  const date = new Date();



  const sendComment = (e) => {
    e.preventDefault();
    setNum(num + 1);
    const newText = { id: num, name: name, text: text };
    const addText = state.comment.concat(newText);
    //action.setComment(addText);
    text ? action.setComment(addText) : alert("댓글을 입력해주세요");
    document.querySelector(".question-text").value = "";
    setText("");
  };


  return (
    <div>
     
      <div style={{ height: "100%", overflow: "auto" }}>
      {state.comment.map((c, i) => (
        <div key={i}>
          {c.name}
          {c.text}
          <br />
          <p style={{ fontSize: "0.9em", color: "gray" }}>
            {
            
            `${date.getFullYear()}.
                            ${
                              date.getMonth() + 1 < 10
                                ? `0${date.getMonth() + 1}`
                                : date.getMonth() + 1
                            }.
                            ${
                              date.getDate() < 10
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
      <Form onSubmit={sendComment}>
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
          />
          <Button variant="secondary" type="submit" style={styles.button}>
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