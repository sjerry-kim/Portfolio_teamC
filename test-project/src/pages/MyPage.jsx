import "../css/MyPage.css";
import MyPageReciept from "../components/MyPageReciept";
import Notfound from "./Notfound";
import MyPageAccount from "../components/MyPageAccount";
import { motion } from "framer-motion";

const MyPage = () => {
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
    >
      {window.sessionStorage.login == "true" ? (
        <div className="mypage-wallpaper">
          <MyPageAccount />
          <MyPageReciept />
        </div>
      ) : (
        <Notfound />
      )}
    </motion.div>
  );
};

export default MyPage;
