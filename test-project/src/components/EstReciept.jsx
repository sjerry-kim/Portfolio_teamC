import { useContext } from "react";
import DataContext from "../data/DataContext";
import "../css/EstReciept.css";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const EstReciept = () => {
  const { state, action } = useContext(DataContext);
  const reciept = JSON.stringify(state.reciept);
  const [sessionReciept, setSessionReciept] = useState([]);
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const estimate = searchParams.get("estimate");
  const date= new Date();

  useEffect(() => {
    sessionStorage.setItem("sessionReciept", reciept);
  });

  useEffect((e) => {
    setSessionReciept(
      JSON.parse(window.sessionStorage.getItem("sessionReciept"))
    );
  }, []);

  useEffect(() => {
    // console.log(mbti)
    const result = state.score.find((s) => s.best === estimate);
    setResultData(result);
  } );

  useEffect(()=>{
    console.log(reciept)
    if(reciept.length >= 9){
      document.querySelector(".estreciept-wrapper").style.display ="inline-block";
    }
  },[reciept])

  return (
    <motion.div initial={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}}
    animate={{opacity: 1 ,transform : 'translateY(20px)', transition:'transform 0.33s ease'}}
    exit={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}} className="estreciept-wrapper">
      <div className="estreciept-bar"></div>
      <div className="estreciept-receipt">
        <h1 className="estreciept-logo">Today Design</h1>
        <div className="estreciept-div">
          <div className="estreciept-line">사업장명: 투데이디자인</div>
          <div className="estreciept-line">사업자 등록번호: 123-45-678910</div>
          <div className="estreciept-line">주소: 부산광역시 중앙대로 749</div>
          <div class="estreciept-line">전화번호: 051-123-4567</div>
          <div className="estreciept-line">담당자: POS 102-1</div>
          <div className="estreciept-line">
            결제일시: {date.getFullYear()}-
            {date.getMonth()+1}-
            {date.getDate()} { }
            {date.getHours()}:
            {date.getMinutes()}
            </div>
        </div>
        <div className="estreciept-break">************************</div>
        {state.reciept.map((r, i) => (
            <div className="estreiept-list" key={i}>
              <div className="estreciept-list-item">{i+1} {r.name}</div>
              <div className="estreciept-list-item">{r.answer}</div>
            </div>
          ))}
        <div className="estreciept-break">************************</div>
        <div className="estreciept-result-div">
          {
            window.sessionStorage.getItem("result") == 'null' ? (
              " "
            ):(
              <span className="estreciept-company">
                {resultData.name}
              </span>
            )
          }
      </div>

        <div className="estreciept-barcode-div">
          <div className="estreciept-barcode">
            <img src={require("../img/barcode.png")} alt="" />
          </div>
          <div className="estreciept-barcodenum-div">
            <p className="estreciept-barcodenum">2023</p>
            <p className="estreciept-barcodenum">5018</p>
            <p className="estreciept-barcodenum">2205</p>
            <p className="estreciept-barcodenum">4812</p>
            <p className="estreciept-barcodenum">1224</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EstReciept;
