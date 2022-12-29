import '../css/MyPageAccount.css';
import { async } from "@firebase/util";
import { updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../data/firebase";
import { userLogin } from "../module/currentUser";
import MyPageProfileModal from "./MyPageProfileModal";

const MyPageAccount = () => {
  const [update, setUpdate] = useState();
  useEffect(()=>{},[update])

  const user = auth.currentUser;

  const sessionFireUser =  window.sessionStorage.getItem("firebase:authUser:AIzaSyCMoXUqkehoGjCep79k-dmXJLJfb-HZuFo:[DEFAULT]")
  const parseSFU = JSON.parse(sessionFireUser);

  useEffect(()=>{
    console.log(parseSFU.photoURL);
  },[])
  // const [displayName, setDisplayName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(()=>{
  //   getUserInfo();
  // },[])

  // const getUserInfo = ()=>{
  //   setDisplayName(user.displayName);
  //   setEmail(user.email);
  //   console.log(displayName)
  //   console.log(email);
  // }
  
  // const changeUserName = () => {
  //   updateProfile(auth.currentUser, {
  //     displayName: "카카"
  //   }).then(() => {
  //     alert('이름이 변경되었습니다')
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }

  return (  
    <div className='mypageaccount-wallpaper'>
      <div className='mypateaccount-div'>
      <h1 className='mypageaccount-title'>My Page</h1>
      {
        window.sessionStorage.getItem("googleLogin") === "true"?  (
          <div className='mypageaccount-img-div'>
            <img className='mypageaccount-img'
              src={parseSFU.photoURL}
              alt="이미지 없음"
              />
              {/* <div style={{
                            width:"150px", 
                            height:"150px",
                            backgroundImage:`${window.sessionStorage.getItem("photoURL")}`, 
                            backgroundColor: "white",
                            backgroundSize: "cover",
                            borderRadius:"50%"}}>
              </div> */}
          </div>
        ):(
          <div className='mypageaccount-img-div'>
            {/* <div
              className='mypageaccount-img'
              style={{
                            width:"100px", 
                            height:"100px",
                            backgroundImage:`url(${window.sessionStorage.getItem("photoURL")})`, 
                            backgroundSize: "cover",
                            borderRadius:"50%"}}>
              </div>
              <MyPageProfileModal /> */}
              {/* <div
                className='mypageaccount-img'
                style={{
                            width:"100px", 
                            height:"100px",
                            backgroundImage:`url(${require(`${window.sessionStorage.getItem("photoURL")}`)})`, 
                            backgroundColor: "white",
                            backgroundSize: "cover",
                            borderRadius:"50%"}}>
              </div> */}
              <img className='mypageaccount-img'
                src={parseSFU.photoURL} alt="이미지 없음" />
            <MyPageProfileModal setUpdate={setUpdate} />
          </div>
        )
      }
      {/* <MyPageProfileModal /> */}
      <div className='mypageaccount-info-div'>
        <div className='mypageaccount-info-div-box'>
        <label style={{paddingRight:"14px"}}>Name</label>
        <input type="text" value={window.sessionStorage.getItem("displayName")} disabled />
        </div>
        <div className='mypageaccount-info-div-box'>
        <label>E-mail</label>
        <input type="text" value={window.sessionStorage.getItem("email")} disabled />
        </div>
      </div>
      </div>
      <div className='mypageaccount-recentcomment-div'>
        
      </div>
    </div>
  );
}

export default MyPageAccount;