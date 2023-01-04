import React, { useContext, useEffect, useState } from "react";
import "../css/EstQuestion.css";
import { ProgressBar } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import EstReciept from "./EstReciept";
import { motion } from "framer-motion";

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
    { id: "Aa", score: 0 },
    { id: "Bb", score: 0 },
    { id: "Cc", score: 0 },
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
      const estimate = newScore.reduce(
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
          estimate: estimate,
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
  };

  // 뒤로가기 막기 변수
  const preventGoBack = () => {
    window.history.pushState(null, "", window.location.href);
    alert("새로고침 버튼을 눌러주세요");
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", preventGoBack);
    })();
    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);

  // 🌼🌼🌼 question 진행 중 새로고침 시 가장 첫 번째 문제로 돌아감 => 확인 필요 🌼🌼🌼

  return (
    <motion.div initial={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}}
    animate={{opacity: 1 ,transform : 'translateY(20px)', transition:'transform 0.33s ease'}}
    exit={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}} className="estquestion-Wrapper">
      {window.sessionStorage.getItem("login") === "true" ? (
        <div>
          <div className="estquestion-progressbox"></div>
          <ProgressBar className="estquestion-progbar"
            style={{
              height: "5px",
              borderRadius: "4px",
              width: "60%",
              margin: "auto",
            }}
            now={(questionNo / state.question.length) * 100}
            value="50"
            min="0"
            max="90"
          />
          <div className="estquestion-Title">{dastQu.title}</div>
          <form action="" onSubmit={QClickButton}>
            <div className="estquestion-ButtonGroup estquestion-menu estquestion-effect-03">
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
                      return setRName("건물 유형");
                    case 1:
                      return setRName("도배");
                    case 2:
                      return setRName("샷시");
                    case 3:
                      return setRName("바닥");
                    case 4:
                      return setRName("베란다");
                    case 5:
                      return setRName("방문");
                    case 6:
                      return setRName("현관문");
                    case 7:
                      return setRName("조명");
                    case 8:
                      return setRName("예상 비용");
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
                      return setRName("건물 유형");
                    case 1:
                      return setRName("도배");
                    case 2:
                      return setRName("샷시");
                    case 3:
                      return setRName("바닥");
                    case 4:
                      return setRName("베란다");
                    case 5:
                      return setRName("방문");
                    case 6:
                      return setRName("현관문");
                    case 7:
                      return setRName("조명");
                    case 8:
                      return setRName("예상 비용");
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
                      return setRName("건물 유형");
                    case 1:
                      return setRName("도배");
                    case 2:
                      return setRName("샷시");
                    case 3:
                      return setRName("바닥");
                    case 4:
                      return setRName("베란다");
                    case 5:
                      return setRName("방문");
                    case 6:
                      return setRName("현관문");
                    case 7:
                      return setRName("조명");
                    case 8:
                      return setRName("예상 비용");
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
                      return setRName("건물 유형");
                    case 1:
                      return setRName("도배");
                    case 2:
                      return setRName("샷시");
                    case 3:
                      return setRName("바닥");
                    case 4:
                      return setRName("베란다");
                    case 5:
                      return setRName("방문");
                    case 6:
                      return setRName("현관문");
                    case 7:
                      return setRName("조명");
                    case 8:
                      return setRName("예상 비용");
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
                      return setRName("건물 유형");
                    case 1:
                      return setRName("도배");
                    case 2:
                      return setRName("샷시");
                    case 3:
                      return setRName("바닥");
                    case 4:
                      return setRName("베란다");
                    case 5:
                      return setRName("방문");
                    case 6:
                      return setRName("현관문");
                    case 7:
                      return setRName("조명");
                    case 8:
                      return setRName("예상 비용");
                  }
                }}
              >
                {dastQu.answere}
              </button>
            </div>
          </form>
          <EstReciept />
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>로그인하세요</h3>
      )}
    </motion.div>
  );
};

export default EstQuestion;
