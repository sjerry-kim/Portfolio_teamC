import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";

const ProductInsertComment = () => {
  const { state, action } = useContext(DataContext);
  const [text, setText] = useState("");
  const [name, setName] = useState("홍길동");
  const [num, setNum] = useState(0);

  const sendComment = e => {
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
          <Button variant="secondary" type="submit">
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductInsertComment;
