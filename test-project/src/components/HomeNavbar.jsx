import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../css/HomeNavbar.css";

// login에서 가져온 import
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../data/firebase";
import "../css/Login.css";

import Swal from "sweetalert2";
import "animate.css";

const HomeNavbar = () => {
  const currentUser = auth.currentUser;
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.displayName);
    }
  });

  // 구글로 로그인하기 버튼을 눌렀을때 파이어스토어를 들고와서 사용
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // 로그인된 결과를 구글인증을 통해서 확인 > 토큰 발급
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // 로그인된 결과 중에서 user를 통해서 관련 정보를 가져올수 있다
        const user = result.user;
        navigate("/", {
          state: {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          },
        });
        // 로컬스토리지에 로그인 상태 저장
        window.sessionStorage.setItem("login", true);
        // 원하는 값들 확인 가능
        console.log(user);
        console.log(user.email); // 이메일
        console.log(user.photoURL); // 구글프로필
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  // input창에서 값 받을때 사용 / 로그인
  const [user, setUser] = useState({}); //코드 추가

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // 이메일,패스워드 조건이 충족하는지 확인용
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  // useEffect로 한자한자입력할때마다 확인해서
  // 이메일,패스워드 두개의 조건이 충족하면
  // 버튼을 활성화 시켜주는데 사용
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    // 둘다 모두 true면 버튼활성화를 풀어줌
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);

  return (
    <div>
      <Menu className="homebm" right width={"400px"}>
        <div className="homenamebox">
          {window.sessionStorage.getItem("login") == "true" ? (
            <div>
              <button
                className="home-mypagebtn"
                onClick={() => {
                  navigate("/main/mypage");
                }}
              >
                My Page
              </button>
              <p className="homename">안녕하세요 {userName} 님</p>
            </div>
          ) : (
            <p className="homename"></p>
          )}
          {window.sessionStorage.getItem("login") == "true" ? (
            <button
              className="homeLogout-Btn"
              onClick={() => {
                window.sessionStorage.setItem("login", false);
                window.sessionStorage.setItem("photoURL", null);
                window.sessionStorage.setItem(
                  "firebase:authUser:AIzaSyCMoXUqkehoGjCep79k-dmXJLJfb-HZuFo:[DEFAULT]",
                  null
                );
                window.sessionStorage.setItem("profileClick", null);
                Swal.fire({
                  title: "로그아웃 하였습니다.",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                navigate("/");
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="homeLogin-Btn"
              onClick={() => {
                navigate("/main/login");
              }}
            >
              Login
            </button>
          )}
        </div>
        <Link to="/main/portfolio" className="hometext1">
          업체 포트폴리오
        </Link>
        <Link to="/main/map" className="hometext3">
          주변 업체 찾기
        </Link>
        <Link to="/main/estimation" className="hometext2">
          맞춤 업체 찾기
        </Link>
      </Menu>
    </div>
  );
};

export default HomeNavbar;
