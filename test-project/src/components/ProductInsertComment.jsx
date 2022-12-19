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
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";


const ProductInsertComment = ({ setList }) => {
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



  const sendComment = (e) => {
    e.preventDefault();
    setNum(num + 1);
    const newText = { marketId: id, commentId: num , name: name, text: text ,};
    const addText = state.comment.concat(newText);
    // 별점이 바로 들어감 -> 수정 필요
    text ? action.setComment(addText)
      : alert("댓글을 입력해주세요");
    document.querySelector(".question-text").value = "";
    setText("");
    console.log(state.comment)
  };

  // 별점 onClick !!! 💛 + 2022-12-15 아래 onClick 주석처리 해놓음 
  const sendRating = () => {
    
  }

  // ID정보 비교

  // 1217 진혜 작성
  const [cNum, setCNume] = useState(0);

  const InsertComment = async (e)=> {
    e.preventDefault();

    // 1218 진혜 🔥 -0 : 추후 삭제할 예정
    // firestore의 commentstar collection을 가져와서 변수에 담음
    // const commentStar = firestore.collection(db, "commentstar");
    // const commentStarDoc = await getDocs(commentStar);
    // console.log(commentStarDoc);

    // 같은 업체 댓글(doc)들끼리 분류함
    // const market = commentStar.filter((m)=>m.marketId==id);

    // const a = query(collection(db,"commentstar") ,where("marketId", "==" , id));
    // const aDoc = await getDocs(a);
    // console.log(aDoc);

    // commentStar.doc("QfV8gsvjrfxSOnuKrqGX").get().then((doc)=>{
    //   console.log(doc.data());
    // })


      // 1218 진혜 ❤️ -1 : 추후 삭제할 예정
    // const insertlist = collection(db,"commentstar");
    // setCNume(cNum+1);

    // const sessionEmail = window.sessionStorage.getItem("email")
    // const userDoc = query(collection(db,"newMember"), where("account", "==", sessionEmail));
    // const querySnapshot = await getDocs(userDoc);

    // console.log(querySnapshot);



    // 1218- 진혜 ❤️ -2 : 추후 삭제할 예정
    try{
      const docRef = await addDoc(collection(db, "test"),{
        comment: text,
        star: rating,
        marketId: id
      })
      console.log(docRef.id)
    }catch(e){
      console.error("Error", e);
    }

    //1218-진혜 ❤️ -3 : 추후 삭제할 예정
    // try{
    //   const commentDoc = doc(db, "test", "comment");
    //   const commentObj = {
    //     comment: text,
    //     star: rating,
    //     marketId: id
    //   }
    //   await updateDoc(commentDoc, {
    //     comments: arrayUnion(commentObj)
    //   })
    // }catch(e){
    //   console.error("Error", e);
    // }

    // const newText = {marketId: id, commentId: num, name:name, text:text};
    // const addText = state.comment.concat(newText);
    // text? action.setComment(addText) : alert("댓글을 입력해주세요");
    // setList(prev => [...prev, Number(rating)]);


    // await setDoc(doc(insertlist,cNum),{
    //   commentId: cNum,
    //   comment: "good",
    //   marketId: id,
    //   star: rating,
    //   // uid: 
    // })

    // // firestore의 member collection을 가져와서 변수에 담음
    // const member = firestore.collection("member");
    
    // // 로그인 시 sessionStorage에 담았던 email 데이터를 가져와서 변수에 담음
    // const sessionEmail = window.sessionStorage.getItem("email");

    // // member에 저장된 Docs 중 email이 sessionEmail과 동일한 Doc을 가져옴
    // const q = query(collection(db, "member"), where("email", "==", `${sessionEmail}`));
    // const qDoc =  getDocs(q);

    // // member collection의 uid를 가져와서 변수에 담음
    // const memberDocsUid = getDocs(member).uid;
    // // const writtenComment = aDoc.find((m)=>m.uid = memberDocsUid);
    // const writtenComment = query(collection(db,"member"),where("uid","==",`${memberDocsUid}`))

    // if(writtenComment == null){
    //   alert("리뷰는 1번만 작성하실 수 있습니다")
    // }else{
    //   commentStar.add({marketId: id, uid: qDoc.uid, comment: text, star: rating });
    // }
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
          <Button variant="secondary" type="submit"> {/**+ 2022-12-15 버튼에 들어가있던거 💛 onClick={sendRating} */}
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