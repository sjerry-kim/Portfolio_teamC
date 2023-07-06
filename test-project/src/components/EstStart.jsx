import React, { useContext } from "react";
// css-in-js
import PangImage from "../img/Logo.png";
import purenComRe3 from "../img/purenComRe3.JPG";
import "../css/EstStart.css";
import { useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import { useEffect } from "react";

import { motion } from "framer-motion";

const EstStart = () => {
  const navigate = useNavigate();
  const { state, action } = useContext(DataContext);

  const StartClickButton = () => {
    action.setReciept([]);
    window.sessionStorage.setItem("result", null);
    navigate("/main/question");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "translateY(50px)",
        transition: "transform 0.33s ease",
      }}
      animate={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: "transform 0.33s ease",
      }}
      exit={{
        opacity: 0,
        transform: "translateY(50px)",
        transition: "transform 0.33s ease",
      }}
      className="eststart-Wrapper"
    >
      <div className="eststart-Contents">
        <div className="eststart-main">
          <div className="eststart-Header">맞춤 견적 짜기</div>
          {window.sessionStorage.getItem("login") === "true" ? (
            <div className="eststart-Title">내가 찾던 인테리어 집</div>
          ) : (
            <div className="eststart-Title">로그인 후 이용하세요</div>
          )}

          {window.sessionStorage.getItem("login") === "true" ? (
            <div className="eststart-StartBtnBox">
              <button onClick={StartClickButton} class="est-start-btn">
                <span>S t a r t</span>
              </button>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EstStart;
