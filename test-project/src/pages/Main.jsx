import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";

const Main = () => {
  return ( 
    <div style={{backgroundColor:"transperant", width:"100vw", height:"100vh"}}>
      <Navbar />
      <Outlet />
      {/** 🌼🌼🌼 오류 띄울 수 있는 방법을 생각해보기 🌼🌼🌼*/}
      {/* <h1 style={{width:"100%", position:"absolute", top:"0", backgroundColor:"white"}}>404 Not found</h1> */}
    </div>
  );
}

export default Main;