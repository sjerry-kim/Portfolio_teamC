import React from "react";
// css-in-js
import PangImage from "../img/Logo.png";
import "../css/EstStart.css";
import {useNavigate } from "react-router-dom";


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
        <div className="eststart-Desc">간편 견적</div>
        <button className="eststart-StartBtn" onClick={StartClickButton}>
          견적 짜러가기
        </button>
      </div>
    </div>
  );
};

export default EstStart;
