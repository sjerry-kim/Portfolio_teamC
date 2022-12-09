import React, { useContext, useEffect, useState } from "react";
// css-in-js
import "../css/EstResult.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataContext from "../data/DataContext";
import EstReciept from "./EstReciept";

const EstResult = () => {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  const { state, action } = useContext(DataContext);


  // 최종적으로 도출한 결과 객체
  const [resultData, setResultData] = useState({});
  useEffect(() => {
    const result = data.state.score.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  // useEffect(()=>{
  //   window.onpageshow = function(event) {
  //     if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
  //     // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
  //     alert("히스토리백!!!!");
  //             }
  //     }
  // })

// 새로고침 막기 변수
//:BeforeUnloadEvent
const preventClose = (e) => {
  e.preventDefault();
  e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
}

// 브라우저에 렌더링 시 한 번만 실행하는 코드
useEffect(() => {
  (() => {
      window.addEventListener("beforeunload", preventClose);    
  })();
  return () => {
      window.removeEventListener("beforeunload", preventClose);
  };
},[]);

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
},[]);


  // 로컬스토리지, 세션!!
  // 새로고침 막기!! 
  // 뒤로가기 했을 때, 처음부터 나오게 해보기!!!


  // 🌼🌼🌼 result창에서 새로고침 시 영수증 내용이 사라짐 >> 확인 필요 🌼🌼🌼

  return (
    <div>
      <div className="estresult-Wrapper">
        <div className="estresult-Header">간편 견적 </div>

        <div className="estresult-Contents">
          <div className="estresult-Title">결과 보기</div>
          <div className="estresult-LogoImage">
            {/* <img src={resultData.image} width={300} /> */}
          </div>
          <div className="estresult-Desc">
            나에게 어울리는 업체 "{resultData.name}"{" "}
          </div>
          <button onClick={()=>{
            navigate('/main/estimation')
            action.setReciept([]);
            }}>다시 하기</button>
        </div>

        <div className="estresult-all-box">
          <span className="estresult-Reciept-box">
            {/* <a href={data.state.score[].src}>업체 보러가기</a> */}
            <button
              className="estresult-ReStartBtn"
              onClick={() => {
                console.log(resultData.best);
                const a = resultData.best;
                switch (a) {
                  case "ABC":
                    return window.open("http://eviandesign.edenstore.co.kr/");
                  case "ABc":
                    return window.open("https://jy-interiordesign.com/");
                  case "AbC":
                    return window.open(
                      "http://www.xn--4k0bq0t9ujvwbpxvm6f.kr/"
                    );
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
              업체보러가기
            </button>
            {/** 다시짜기하면 넘처서 안될듯*/}
          </span>
        </div>
        <EstReciept />
      </div>
    </div>
  );
};

export default EstResult;
