import { useContext} from "react";
import DataContext from "../data/DataContext";
import "../css/EstReciept.css";
import { useEffect } from "react";
import { useState } from "react";

const EstReciept = () => {
  const { state, action } = useContext(DataContext);

  // 세션 스토리지
  const reciept = JSON.stringify(state.reciept);
  const [sessionReciept, setSessionReciept] = useState([]);
  
  useEffect(()=>{
    sessionStorage.setItem("sessionReciept", reciept)
  })

  useEffect((e)=>{
    setSessionReciept(JSON.parse(window.sessionStorage.getItem("sessionReciept")))
  },[])

  return (
    <div>
      <div className="estreciept-receipt">
        <div className="estreciept-State-bar">선택 항목</div>
      {
        sessionReciept.length>8 ? (sessionReciept.map((r,i)=>(
          <div key={i}>
            <p className="estreciept-checklist">
              세션 {r.name}
              {r.answer}
            </p>
          </div>
        ))
        )
        :
        (
        state.reciept.map((r, i) => (
          <div key={i}>
            <p className="estreciept-checklist">
              {r.name}
              {r.answer}
            </p>
          </div>
        ))
        )
      }

        {/* {state.reciept.map((r, i) => (
          <div key={i}>
            <p className="checklist">
              {r.name}
              {r.answer}
            </p>
          </div>
        ))} */}
        <div className="estreciept-box"></div>

      </div>
    </div>
  );
};

export default EstReciept;
