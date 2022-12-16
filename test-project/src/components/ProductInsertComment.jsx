import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";

const ProductInsertComment = ({ setList }) => {
  const { state, action } = useContext(DataContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [name, setName] = useState("홍길동"); // 💛 uset 이름으로 변경해야함
  const [num, setNum] = useState(1);

  const { id } = useParams();

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
  console.log(rating);

  const sendRating = () => {
    text
      ? setList(prev => [...prev, Number(rating)])
      : console.log("댓글을 입력해주세요");
  };

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
          <Button variant="secondary" type="submit" onClick={sendRating}>
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductInsertComment;
