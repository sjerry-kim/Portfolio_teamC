import '../css/MyPageAccount.css';
import { async } from "@firebase/util";
import { updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../data/firebase";
import { userLogin } from "../module/currentUser";
import MyPageProfileModal from "./MyPageProfileModal";

const MyPageAccount = () => {
  const user = auth.currentUser;
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
        window.sessionStorage.getItem("photoURL")== "null" ?  (
          <div className='mypageaccount-img-div'>
            <div style={{
                            width:"150px", 
                            height:"150px",
                            backgroundImage:`url(${require('../img/defaultProfile.jpeg')})`, 
                            backgroundSize: "cover",
                            borderRadius:"50%"}}>
              </div>
            {/* <MyPageProfileModal /> */}
          </div>
        ):(
          <div className='mypageaccount-img-div'>
            <img style={{
                width:"100px", 
                height:"100px",
                backgroundSize: "cover",
                borderRadius:"50%",
              }}
              src={window.sessionStorage.getItem("photoURL")}
              alt="없음"
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
        )
      }
      {/* <MyPageProfileModal /> */}
      <div className='mypageaccount-info-div'>
        <label>Name</label>
        <input type="text" value={window.sessionStorage.getItem("displayName")} disabled />
        <br />
        <label>Email</label>
        <input type="text" value={window.sessionStorage.getItem("email")} disabled />
      </div>
      </div>
    </div>
  );
}

export default MyPageAccount;