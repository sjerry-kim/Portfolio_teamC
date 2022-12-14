import React, { useContext } from "react";
// css-in-js
import PangImage from "../img/Logo.png";
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
        <div className="eststart-Header">{ window.localStorage.getItem('login') === 'true' ? "간편 견적" : "로그인하세요"}</div>
        {
          window.localStorage.getItem('login') === 'true' ? 
          (
            <div className="eststart-Title">나에게 맞는 업체</div>
          )
          :
          " "
        }
        <div className="eststart-LogoImage">
          <img src={PangImage} width={200}></img>
        </div>
        <div className="eststart-Desc">간편 견적</div>
        {
          window.localStorage.getItem('login') === 'true' ? 
          (
          <button className="eststart-StartBtn" onClick={StartClickButton}>
          견적 짜러가기
          </button>
          )
          :
          " "
        }
      </div>
    </div>
  );
};

export default EstStart;
