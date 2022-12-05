import React from "react";
// css-in-js
import PangImage from "../img/Logo.png";
import "../css/EstStart.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import EstReciept from "./EstReciept";
import EstQuestion from "./EstQuestion";
import EstResult from "./EstResult";

const EstStart = () => {
  const navigate = useNavigate();

  const StartClickButton = () => {
    // useHistory 여기서 이동됨
    navigate("/main/question");
  };

  return (
    <div className="eststart-Wrapper">
      <div className="eststart-Contents">
        <div className="eststart-Header">간편 견적</div>
        <div className="eststart-Title">나에게 맞는 업체</div>
        <div className="eststart-LogoImage">
          <img src={PangImage} width={200}></img>
        </div>
        <div className="eststart-Desc">mbti를 기본으로하는 간편 견적</div>
        <button className="eststart-StartBtn" onClick={StartClickButton}>
          견적 짜러가기
        </button>
      </div>
    </div>
  );
};

export default EstStart;
