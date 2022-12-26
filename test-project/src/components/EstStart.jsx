import React, { useContext } from "react";
// css-in-js
import PangImage from "../img/Logo.png";
import purenComRe3 from "../img/purenComRe3.JPG";
import "../css/EstStart.css";
import { useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import { useEffect } from "react";

const EstStart = () => {
  const navigate = useNavigate();
  const { state, action } = useContext(DataContext);

  const StartClickButton = () => {
    action.setReciept([]);
    window.sessionStorage.setItem("result", null);
    navigate("/main/question");
  };

  return (
    <div className="eststart-Wrapper">
      <div className="eststart-Contents">
        <div className="eststart-main">
          <div className="eststart-Header">맞춤 견적 짜기</div>
          {window.sessionStorage.getItem("login") === "true" ? (
            <div className="eststart-Title">내가 찾던 인테리어 집</div>
          ) : (
            <div className="eststart-Title">로그인 후 이용하세요</div>
          )}
          {/* <div className="eststart-LogoImage"> */}
          {/* <div className="eststart-img">
            <div className="eststart-imgText">
              인테리어 중계업은 Today Design !!
            </div>
          </div> */}
          {/* <div className="eststart-backColor"></div> */}
          {/* <img src={PangImage} width={200}></img> */}
          {/* </div> */}

          {window.sessionStorage.getItem("login") === "true" ? (
            <div className="eststart-StartBtnBox">
              {/* <button className="eststart-StartBtn" onClick={StartClickButton}>
            Start
            </button> */}
              {/* <button 
              onClick={StartClickButton}
              class="button button--shikoba">
              <span>Start</span>
            </button> */}
              <button onClick={StartClickButton} class="est-start-btn">
                <span>S t a r t</span>
              </button>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default EstStart;
