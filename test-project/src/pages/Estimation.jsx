import React from "react";
import "../css/EstStart.css";
import { Routes, Route, Outlet } from "react-router-dom";
import EstReciept from "../components/EstReciept";
import EstStart from "../components/EstStart";
import EstQuestion from "../components/EstQuestion";
import EstResult from "../components/EstResult";
import Navbar from "../components/Navbar";

// 🌼🌼🌼 포지션 상 pages 폴더에 들어가 있지만 실제로 출력되지 않는 component입니다 🌼🌼🌼

const Estimation = () => {
  return (
    <div className="est-body">
      {/** 없애기 */}
      {/* <Routes>
        <Route path="/start" element={<EstStart />} />
        <Route path="/question" element={<EstQuestion />} />
        <Route path="/result" element={<EstResult />} />
        <Route path="/reciept" element={<EstReciept />} />
      </Routes> */}
    </div>
  );
};

export default Estimation;
