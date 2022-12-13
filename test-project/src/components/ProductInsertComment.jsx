import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";

const ProductInsertComment = ({ setList }) => {
  //회윤 - 평균평점 props

  const { state, action } = useContext(DataContext);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [name, setName] = useState("홍길동");
  const [num, setNum] = useState(0);

  const { id } = useParams();
  const market = state.score.find(m => m.id == id); //undefined 값을 지정해줘야한다.

  const sendComment = e => {
    e.preventDefault();
    setNum(num + 1);
    // const newText = { id: num, name: name, text: text };
    // const addText = market.comment.concat(newText);
    //action.setComment(addText);
    // text ? action.setScore(addText) : alert("댓글을 입력해주세요");
    document.querySelector(".question-text").value = "";
    setText("");
    setList(prev => [...prev, Number(rating)]);
  };
  console.log(rating);

  return (
    <div>
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
          <Button variant="secondary" type="submit">
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductInsertComment;
