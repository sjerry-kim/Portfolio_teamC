import React, { useContext, useEffect, useState } from "react";

// css-in-js
import "../css/EstResult.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataContext from "../data/DataContext";
import EstReciept from "./EstReciept";

// firebase
import { auth, firestore } from "../data/firebase";

const EstResult = () => {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const estimate = searchParams.get("estimate");
  const { state, action } = useContext(DataContext);
  const reciept = JSON.stringify(state.reciept);
  const currentUser = auth.currentUser;
  const date = new Date();
  // 최종적으로 도출한 결과 객체
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = data.state.score.find((s) => s.best === estimate);
    setResultData(result);
  });

  // 결과값 가져오는 세션
  useEffect(() => {
    const jsonResult = resultData.name;
    window.sessionStorage.setItem("result", jsonResult);
    console.log(resultData.name);
  }, [resultData]);

  // 새로고침 막기 변수
  //:BeforeUnloadEvent
  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();
    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  // 뒤로가기 막기 변수
  const preventGoBack = () => {
    window.history.pushState(null, "", window.location.href);
    alert("다시하기 버튼을 눌러주세요");
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

  const saveReceipt = () => {
    const currentResult = window.sessionStorage.getItem("result");
    const currentReciept = window.sessionStorage.getItem("sessionReciept");
    const firebaseReciept = firestore.collection("reciept");
    const parseReciept = JSON.parse(currentReciept);
    firebaseReciept.add({
      parseReciept: parseReciept,
      uid: currentUser.uid,
      result: currentResult,
      timeStamp: new Date(),
      realDate: `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${
        date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
      }:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`,
    });
    alert("저장한 영수증은 마이페이지에서 확인할 수 있습니다");
  };

  return (
    <div className="estresult-big-Wrapper">
      <div className="estresult-Wrapper">
        <div className="estresult-Contents">
          <div className="estresult-Header">맞춤 견적 결과</div>
          <div className="estresult-Title">
            {window.sessionStorage.getItem("displayName")}님에게 어울리는
            인테리어 업체
          </div>
          <div className="estresult-LogoImage"></div>
          <div className="estresult-Desc">" {resultData.name} "</div>
          <button
            className="estresult-ReBtn estresult-effect estresult-effect-1"
            onClick={() => {
              navigate("/main/estimation");
              action.setReciept([]);
            }}
          >
            다시 하기
          </button>
        </div>
        <div className="estresult-all-box">
          <button
            title="사이트 방문하기"
            className="estresult-ReStartBtn estresult-btn-10"
            onClick={() => {
              console.log(resultData.best);
              const a = resultData.best;
              switch (a) {
                case "ABC":
                  return window.open("http://eviandesign.edenstore.co.kr/");
                case "ABc":
                  return window.open("https://jy-interiordesign.com/");
                case "AbC":
                  return window.open("http://www.xn--4k0bq0t9ujvwbpxvm6f.kr/");
                case "Abc":
                  return window.open("https://www.1204design.co.kr/");
                case "aBC":
                  return window.open("https://www.agiodesign.co.kr/");
                case "aBc":
                  return window.open("http://www.monointerior.co.kr/");
                case "abc":
                  return window.open(
                    "http://www.dawon.com/wen/index.php?v=220209"
                  );
                case "abC":
                  return window.open("http://idas.kr/");
              }
            }}
          >
            사이트 방문
          </button>
          <button
            className="estresult-savebtn estresult-btn-10"
            title="영수증 저장하기"
            onClick={() => {
              saveReceipt();
            }}
          >
            영수증 저장
          </button>
        </div>
        <EstReciept />
      </div>
    </div>
  );
};

export default EstResult;
