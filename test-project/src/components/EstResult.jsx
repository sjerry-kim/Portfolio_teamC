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

  // 최종적으로 도출한 결과 객체
  const [resultData, setResultData] = useState({});
  useEffect(() => {
    const result = data.state.score.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

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
                case "EST":
                  return window.open("https://www.naver.com/");
                case "ESF":
                  return window.open("https://www.daum.net/");
                case "ENT":
                  return window.open("https://www.daum.net/");
                case "ENF":
                  return window.open("https://www.daum.net/");
                case "IST":
                  return window.open("https://www.daum.net/");
                case "ISF":
                  return window.open("https://www.daum.net/");
                case "INT":
                  return window.open("https://www.daum.net/");
                case "INF":
                  return window.open("https://www.daum.net/");
              }
            }}
          >
            업체보러가기
          </button>
          {/** 다시짜기하면 넘처서 안될듯*/}
        </span>
       
        
      </div>
      <EstReciept/>
      </div>
    </div>
  );
};

export default EstResult;
