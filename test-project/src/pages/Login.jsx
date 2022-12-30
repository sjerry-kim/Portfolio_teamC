import { useContext, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import googleImg from "../img/login-google.png";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../data/firebase";
import db from "../data/firebase";
import "../css/Login.css";
import DataContext from "../data/DataContext";

import { userLogin } from "../module/currentUser";
import { useDispatch } from "react-redux";
import Notfound from "./Notfound";

const User = {
  email: "test@example.com",
  pw: "test8361@",
};

// Home ('/')으로 돌아가는

const Login = () => {
  // 리덕스의 리듀서를 사용하기위한 디스패치
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const CreateButton = () => {
    // 회원가입창 경로
    navigate("/join");
  };

  // 구글로 로그인하기 버튼을 눌렀을때 파이어스토어를 들고와서 사용
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence);
    signInWithPopup(auth, provider)
      .then(result => {
        // 로그인된 결과를 구글인증을 통해서 확인 > 토큰 발급
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // 로그인된 결과 중에서 user를 통해서 관련 정보를 가져올수 있다
        const user = result.user;
        // 로그인할때
        //dispatch(userLogin(user));
        window.sessionStorage.setItem("login", true);
        window.sessionStorage.setItem("uid", user.uid);
        window.sessionStorage.setItem("displayName", user.displayName);
        window.sessionStorage.setItem("email", user.email);
        window.sessionStorage.setItem("photoURL", user.photoURL);
        window.sessionStorage.setItem("googleLogin", true);
        navigate("/", {
          state: {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          },
        });
        // 원하는 값들 확인 가능
        console.log(user);
        console.log(user.email); // 이메일
        console.log(user.photoURL); // 구글프로필
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const [name, setName] = useState("");
  // const {action} = useContext(DataContext)
  // const navigate = useNavigate()
  const inputRef = useRef("");

  // const loginUser = (e) => {
  // e.preventDefault();
  // 	action.setUser({name: name, profile : null, likelist : [] });
  // 	navigate('/');
  // }

  // input창에서 값 받을때 사용 / 로그인
  const [email, setEmail] = useState(""); // 이메일 로그인
  const [pw, setPw] = useState(""); // 비밀번호
  const [user, setUser] = useState({}); //코드 추가

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
  }, []);

  const emailLogin = async() => {
    const auth = getAuth();
    try {
      // await
      // db.auth().setPersistence(db.auth.Auth.Persistence.SESSION);
      setPersistence(auth, browserSessionPersistence);
      console.log("로그인유지 성공")
      const userCredential = await signInWithEmailAndPassword(auth, email, pw);
      const user = userCredential.user;
      console.log(user);
      window.sessionStorage.setItem("login", true);
      window.sessionStorage.setItem("uid", user.uid);
      window.sessionStorage.setItem("displayName", user.displayName);
      window.sessionStorage.setItem("email", user.email);
      window.sessionStorage.setItem("profileClick", false)
      // window.sessionStorage.setItem("photoURL", user.photoURL);
      navigate("/");
      //dispatch(userLogin(user));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorCode == "auth/wrong-password") {
        alert("잘못된 비밀번호입니다");
      } else if (errorCode == "auth/user-not-found") {
        alert("없는 이메일입니다");
      }
    }
  };

  const emailLogout = async () => {
    await signOut(auth);
    // 로컬스토리지에 로그인 상태 저장
    window.sessionStorage.setItem("login", false);
    window.sessionStorage.setItem("googleLogin", false);
    // window.sessionStorage.setItem("photoURL", null);
    // window.sessionStorage.removeItem("uid"); // 로컬써야 지워짐
    // window.sessionStorage.removeItem("displayName");
  };

  // 이메일,패스워드 조건이 충족하는지 확인용
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  // useEffect로 한자한자입력할때마다 확인해서
  // 이메일,패스워드 두개의 조건이 충족하면
  // 버튼을 활성화 시켜주는데 사용
  const [notAllow, setNotAllow] = useState(true);

  // 이메일 조건충족 확인
  const handleEmail = e => {
    setEmail(e.target.value);
    // 정규식인데 로그인할떄 특문같이 정해진 조건발동을 수행시켜주는거같다
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // 이메일 조건충족 확인
  const handlePw = e => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  useEffect(() => {
    // 둘다 모두 true면 버튼활성화를 풀어줌
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);

  // useEffect(() => {
  //   console.log(inputRef);
  //   inputRef.current.target.focus(); // 로그인id 자동포커스
  // }, []);

  return (
    <from>
      {window.sessionStorage.getItem("login") === "true" ? (
        <Notfound />
      ) : (
        <div className="login-page-box">
          <div className="login-page2">
            <div className="login-text-box">
              <p className="login-page2-text1">전문가와 함께하는 </p>
              <p className="login-page2-text2">간편한 업체 소싱,</p>
              <p className="login-page2-text3">지금 시작해볼까요 ?</p>
              <div className="login-line">
              <p>
                Today disign의 업체 소싱은<br></br>
                전문가와 함께하기 때문에<br></br>
                보다 효율적이고 안정적입니다<br></br>
              </p>
              </div>
            </div>
          </div>
          <div className="login-line-2">
            
          </div>
          <div className="login-page">
            <div className="login-border">
              {/* <img
                src={require("../img/logo_white.png")}
                className="login-login-Logo"
              /> */}
              <div className="login-titleWrap">
                로그인
                <br />
              </div>
              
              <div className="login-contentWrap">
                <div className="login-inputTitle">E-mail</div>
                <div className="login-inputWrap">
                  <input
                    className="login-input"
                    type="text"
                    placeholder="test@example.com"
                    value={email}
                    onChange={handleEmail}
                    ref={inputRef}
                  />
                </div>
                <div className="login-errorMessageWrap">
                  {/* 입력안했을땐 안나오고 이메일의 길이가 0보다 클때 오류문구 출력 */}
                  {!emailValid &&
                    email.length > 0 && ( // 조건이안맞고 이메일이0보다 높을때
                      <div>올바른 이메일을 입력하세요.</div>
                    )}
                </div>
                <div className="login-inputTitle" style={{ marginTop: "10px" }}>
                  PW
                </div>
                <div className="login-inputWrap">
                  <input
                    className="login-input"
                    type="password"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요"
                    value={pw}
                    onChange={handlePw}
                  />
                </div>
                <div className="login-errorMessageWrap">
                  {!pwValid &&
                    pw.length > 0 && ( // 조건이안맞고 패스워드가0보다 높을때
                      <div>
                        영문, 숫자, 특수문자 포함 <br /> 8자 이상 입력해주세요
                      </div>
                    )}
                </div>
              </div>
              <div>
                {/* disabled 버튼활성화 체크*/}
                <button
                  disabled={notAllow}
                  className="login-LoginButton"
                  onClick={emailLogin}
                >
                  로그인
                </button>
              </div>
              <div className="login-allbox">
                  <button className="login-LoginGoogle" onClick={googleLogin}>
                    <img src={googleImg} className="login-googleimg"/>
                  </button>
                  <button className="login-createButton" onClick={CreateButton}>
                    회원 가입
                  </button>      
              </div>
            </div>
          </div>
        </div>
      )}
    </from>
  );
};

export default Login;
