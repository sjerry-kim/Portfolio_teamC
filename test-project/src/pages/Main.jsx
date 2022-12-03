import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";
import Test from "./Test";

const Main = () => {
  return ( 
    <div>
      <Navbar />
      <Outlet /> {/** 🌼 적용 안 됨 */}
    </div>
  );
}

export default Main;