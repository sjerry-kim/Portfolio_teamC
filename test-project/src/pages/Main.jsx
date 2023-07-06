import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
