import "../css/MyPageAccount.css";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../data/firebase";
import MyPageProfileModal from "./MyPageProfileModal";

const MyPageAccount = () => {
  const [update, setUpdate] = useState();
  useEffect(() => {}, [update]);

  const sessionFireUser = window.sessionStorage.getItem(
    "firebase:authUser:AIzaSyCMoXUqkehoGjCep79k-dmXJLJfb-HZuFo:[DEFAULT]"
  );
  const parseSFU = JSON.parse(sessionFireUser);
  const profile = parseSFU.photoURL;

  useEffect(() => {
    console.log(profile);
  }, []);

  return (
    <div className="mypageaccount-wallpaper">
      <div className="mypateaccount-div">
        <h1 className="mypageaccount-title">My Page</h1>
        {window.sessionStorage.getItem("googleLogin") === "true" ? (
          // 구글계정으로 로그인 했을 때
          <div className="mypageaccount-img-div">
            <img
              className="mypageaccount-img"
              src={profile}
              alt=""
            />
          </div>
        ) :  //이메일, 비번으로 로그인 했을 때
        window.sessionStorage.getItem("profileClick") == "false"? (
          <div className="mypageaccount-img-div">
            <img
              className="mypageaccount-img"
              src={require("../img/defaultProfile.jpeg")}
              alt=""
            />
            <MyPageProfileModal setUpdate={setUpdate} />
          </div>
        ) : (
          <div className="mypageaccount-img-div">
            <img
              className="mypageaccount-img"
              src={profile}
              alt=""
            />
            <MyPageProfileModal setUpdate={setUpdate} />
          </div>
          )
        }
        <div className="mypageaccount-info-div">
          <div className="mypageaccount-info-div-box">
            <label style={{ paddingRight: "14px" }}>Name</label>
            <input type="text" value={parseSFU.displayName} disabled />
          </div>
          <div className="mypageaccount-info-div-box">
            <label>E-mail</label>
            <input type="text" value={parseSFU.email} disabled />
          </div>
        </div>
      </div>
      <div className="mypageaccount-recentcomment-div"></div>
    </div>
  );
};

export default MyPageAccount;
