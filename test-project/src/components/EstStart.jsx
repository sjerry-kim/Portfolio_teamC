import React, { useContext } from "react";
// css-in-js
import PangImage from "../img/Logo.png";
import purenComRe3 from "../img/purenComRe3.JPG";
import "../css/EstStart.css";
import {useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import { useEffect } from "react";


const EstStart = () => {
  const navigate = useNavigate();  
  const { state, action } = useContext(DataContext);

  const StartClickButton = () => {
    navigate("/main/question");

  };

  return (
    <div className="eststart-Wrapper">
      <div className="eststart-Contents">
        <div className="eststart-Header">{ window.sessionStorage.getItem('login') === 'true' ? "맞춤 견적 짜기" : "로그인하세요"}</div>
        {
          window.sessionStorage.getItem('login') === 'true' ? 
          (
            <div className="eststart-Title">내가 찾던 그 업체</div>
          )
          :
          " "
        }

        {/* <div className="eststart-LogoImage"> */}
          {/* <div className="eststart-img">
            <div className="eststart-imgText">
              인테리어 중계업은 Today Design !!
            </div>
          </div> */}
          {/* <div className="eststart-backColor"></div> */}
          {/* <img src={PangImage} width={200}></img> */}
        {/* </div> */}
        
        {
          window.sessionStorage.getItem('login') === 'true' ? 
          (
          <div className="eststart-StartBtnBox">
          <button className="eststart-StartBtn" onClick={StartClickButton}>
          견적 짜러가기
          </button>
          </div>
          )
          :
          " "
        }
      </div>
    </div>
  );
};

export default EstStart;
