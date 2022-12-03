import React from "react";
import "../css/EstStart.css";
import { Routes, Route, Outlet } from "react-router-dom";
import EstReciept from "../components/EstReciept";
import EstStart from "../components/EstStart";
import EstQuestion from "../components/EstQuestion";
import EstResult from "../components/EstResult";
import Navbar from "../components/Navbar";

// 🌼 지울지, 살려서 수정할 지 결정 필요

const Estimation = () => {
  return (
    <div className="est-body">
      <Routes>
        <Route path="start" element={<EstStart />} />
        <Route path="question" element={<EstQuestion />} />
        <Route path="result" element={<EstResult />} />
        <Route path="reciept" element={<EstReciept />} />
      </Routes>
    </div>
  );
};

export default Estimation;
