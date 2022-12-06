import React, { useContext, useState } from "react";
import "../css/EstQuestion.css";
import { ProgressBar, Button } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import EstReciept from "./EstReciept";

const EstQuestion = () => {
  // 프로그래스 바
  const [countOfProgess, setCountOfProgess] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountOfProgess((oldProgress) => {
        if (100 == oldProgress) return 0;
        return Math.min(oldProgress + Math.random() * 10, 100);
      });
    }, 499);

    return () => {
      clearInterval(timer);
    };
  }, []);
  //

  // DataContext
  const { state, action } = useContext(DataContext);

  const [questionNo, setQuestionNo] = useState(0);
  const [num, setNum] = useState(0);
  let dastQu = state.question[questionNo];
  const navigate = useNavigate();

  // 진혜
  const [rName, setRName] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [companyIndex, setCompanyIndex] = useState([]);

  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
  ]);
  console.log("totalScore", totalScore);

  const ClickButton = (Num, type) => {
    // totalScore에 map함수로 각각의 요소를 a로 받음
    const newScore = totalScore.map((a) =>
      a.id === type
        ? { id: a.id, score: a.score + Num }
        : //  type이 같지않은 경우 기존의 객체 유지
          a
    );
    setTotalScore(newScore);
    // 다음 문제로 문제수 증가
    // 마지막문제에서
    if (state.question.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 7 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      // 결과페이지로 이동
      navigate({
        //  search 사용
        pathname: "/main/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  const QClickButton = (e) => {
    e.preventDefault();

    console.log(rName);
    console.log(answer);

    // 영수증 출력
    // Reciept 목록 추가하기
    const newAnswers = {
      name: rName,
      answer: answer,
    };
    const addedAnswer = state.reciept.concat(newAnswers);
    if (rName && answer) {
      action.setReciept(addedAnswer);
    }
    console.log(companyIndex);
    console.log(state.reciept);

    //console.log('newScore', newScore)
    // if (type === "EI"){
    //     // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
    //     const addScore = totalScore[0].score + no;
    //     // 새로운 객체
    //     const newObject = {id: "EI", score: addScore}
    //     // splice 통해 새로운 객체를 해당객체 자리에 넣어줌
    //     // 0번째 index에 1첫번째 요소를 지워줌
    //     totalScore.splice(0, 1, newObject);
    // }
    // else if (type === "SN"){
    //     const addScore = totalScore[1].score + no;
    //     const newObject = {id: "SN", score: addScore}
    //     totalScore.splice(1, 1, newObject);
    // }
    // else if (type === "TF"){
    //     const addScore = totalScore[2].score + no;
    //     const newObject = {id: "TF", score: addScore}
    //     totalScore.splice(2, 1, newObject);
    // }
    // else if (type === "JP"){
    //     const addScore = totalScore[3].score + no;
    //     const newObject = {id: "JP", score: addScore}
    //     totalScore.splice(3, 1, newObject);
    // }
  };

  // const selectAtr = (a) => {
  //   switch (a){
  //     case "1" :
  //       return setRName("type");
  //     case "2" :
  //       return setRName("wallpaper");
  //     case "3" :
  //         return setRName("sash");
  //     case "4" :
  //       return setRName("floor");
  //     case "5" :
  //       return setRName("veranda");
  //     case "6" :
  //       return setRName("roomdoor");
  //     case "7" :
  //       return setRName("frontdoor");
  //     case "8" :
  //       return setRName("light");
  //     case "9" :
  //       return setRName("price");
  //   }
  // }

  // const name = ["type", "wallpaper", "sash", "floor", "veranda", "roomdoor","frontdoor", "light", "price"];

  // 🌼🌼🌼 question 진행 중 새로고침 시 가장 첫 번째 문제로 돌아감 => 확인 필요 🌼🌼🌼

  return (
    <div className="estquestion-Wrapper">
      <div className="estquestion-progressbox"></div>
      <ProgressBar
        style={{
          height: "1%",
          borderRadius: "0px",
          width: "90%",
          margin: "auto",
        }}
        now={(questionNo / state.question.length) * 100}
        value="50"
        min="0"
        max="90"
      />

      <div className="estquestion-Title">{dastQu.title}</div>

      <form action="" onSubmit={QClickButton}>
        <div className="estquestion-ButtonGroup">
          <button
            className="estquestion-QBtn"
            onClick={() => {
              ClickButton(4, dastQu.type);
              setAnswer(dastQu.answera);
              setCompanyIndex(dastQu.answera);
              console.log(questionNo);
              setNum(num + 1);
              console.log(num);
              switch (num) {
                case 0:
                  return setRName("type");
                case 1:
                  return setRName("wallpaper");
                case 2:
                  return setRName("sash");
                case 3:
                  return setRName("floor");
                case 4:
                  return setRName("veranda");
                case 5:
                  return setRName("roomdoor");
                case 6:
                  return setRName("frontdoor");
                case 7:
                  return setRName("light");
                case 8:
                  return setRName("price");
              }
            }}
          >
            {dastQu.answera}
          </button>

          <button
            className="estquestion-QBtn"
            onClick={() => {
              ClickButton(3, dastQu.type);
              setAnswer(dastQu.answerb);
              setCompanyIndex(dastQu.answerb);
              setNum(num + 1);
              switch (num) {
                case 0:
                  return setRName("type");
                case 1:
                  return setRName("wallpaper");
                case 2:
                  return setRName("sash");
                case 3:
                  return setRName("floor");
                case 4:
                  return setRName("veranda");
                case 5:
                  return setRName("roomdoor");
                case 6:
                  return setRName("frontdoor");
                case 7:
                  return setRName("light");
                case 8:
                  return setRName("price");
              }
            }}
          >
            {dastQu.answerb}
          </button>

          <button
            className="estquestion-QBtn"
            onClick={() => {
              ClickButton(2, dastQu.type);
              setAnswer(dastQu.answerc);
              setCompanyIndex(dastQu.answerc);
              setNum(num + 1);
              switch (num) {
                case 0:
                  return setRName("type");
                case 1:
                  return setRName("wallpaper");
                case 2:
                  return setRName("sash");
                case 3:
                  return setRName("floor");
                case 4:
                  return setRName("veranda");
                case 5:
                  return setRName("roomdoor");
                case 6:
                  return setRName("frontdoor");
                case 7:
                  return setRName("light");
                case 8:
                  return setRName("price");
              }
            }}
          >
            {dastQu.answerc}
          </button>

          <button
            className="estquestion-QBtn"
            onClick={() => {
              ClickButton(1, dastQu.type);
              setAnswer(dastQu.answerd);
              setCompanyIndex(dastQu.answerd);
              setNum(num + 1);

              switch (num) {
                case 0:
                  return setRName("type");
                case 1:
                  return setRName("wallpaper");
                case 2:
                  return setRName("sash");
                case 3:
                  return setRName("floor");
                case 4:
                  return setRName("veranda");
                case 5:
                  return setRName("roomdoor");
                case 6:
                  return setRName("frontdoor");
                case 7:
                  return setRName("light");
                case 8:
                  return setRName("price");
              }
            }}
          >
            {dastQu.answerd}
          </button>

          <button
            className="estquestion-QBtn"
            onClick={() => {
              ClickButton(0, dastQu.type);
              setAnswer(dastQu.answere);
              setCompanyIndex(dastQu.answere);
              setNum(num + 1);
              switch (num) {
                case 0:
                  return setRName("type");
                case 1:
                  return setRName("wallpaper");
                case 2:
                  return setRName("sash");
                case 3:
                  return setRName("floor");
                case 4:
                  return setRName("veranda");
                case 5:
                  return setRName("roomdoor");
                case 6:
                  return setRName("frontdoor");
                case 7:
                  return setRName("light");
                case 8:
                  return setRName("price");
              }
            }}
          >
            {dastQu.answere}
          </button>
        </div>
      </form>

      {/*
            <div className='ButtonGroup'>
            <button className='QBtn' onClick={()=>QClickButton(4, dastQu.type)}>{dastQu.answera}</button>
            <button className='QBtn' onClick={()=>QClickButton(3, dastQu.type)}>{dastQu.answerb}</button>
            <button className='QBtn' onClick={()=>QClickButton(2, dastQu.type)}>{dastQu.answerc}</button>
            <button className='QBtn' onClick={()=>QClickButton(1, dastQu.type)}>{dastQu.answerd}</button>
            <button className='QBtn' onClick={()=>QClickButton(0, dastQu.type)}>{dastQu.answere}</button>
            </div>
    */}
      <EstReciept />
    </div>
  );
};

export default EstQuestion;
