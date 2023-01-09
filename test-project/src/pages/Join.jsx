import { useEffect, useRef, useState } from "react";
import JoinInput from "../components/JoinInput";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  updateProfile,
} from "firebase/auth";
import { auth } from "../data/firebase";
import { useNavigate } from "react-router-dom";
import { firestore } from "../data/firebase";
//css
import '../css/JoinInput.css'
import emailicon from "../img/join-email.png"
import nameicon from "../img/join-person.png"
import phoneicon from "../img/join-phone.png"
import lockicon from "../img/join-lock.png"
import gendersicon from "../img/join-genders.png"
import paperimg from "../img/join-paper.png"
import paperimg2 from "../img/join-paper-2.png"
import breakpaperimg from "../img/join-breakpaper.png"

import Swal from "sweetalert2";

// 진혜 추가

import db from "../data/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import { useDispatch } from "react-redux";
import { userLogin } from "../module/currentUser";
import { motion } from "framer-motion";

const Join = props => {


  // 로딩중
  const [state, setState] = useState("기달령");

  const componentDidMount = () => {
    setTimeout(() => {
      setState({Loading: false});
    }, 3000);
  }


  // 파이어베이스 회원가입
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  // 리덕스의 리듀서를 사용하기위한 디스패치
  const dispatch = useDispatch();



  const register = async () => {
    const auth = getAuth();
    try {
      setPersistence(auth, browserSessionPersistence);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const user = userCredential.user;
      const uid = userCredential.user.uid;

      // 진혜 추가
      const member = firestore.collection("member");
      member
        .add({
          email: registerEmail,
          password: registerPassword,
          uid: uid,
          name: name,
        })
        .then(docRef => {
          // Signed in 회원가입성공
          console.log(docRef.id);
          const user = docRef.user;
        });
        updateProfile(auth.currentUser, { displayName: name });
      //dispatch(userLogin(user));
      window.sessionStorage.setItem("displayName", name);
      window.sessionStorage.setItem("login", true);
      window.sessionStorage.setItem("uid", user.uid);
      window.sessionStorage.setItem("email", user.email);
      window.sessionStorage.setItem("profileClick", false)
      // window.sessionStorage.setItem("photoURL", user.photoURL);
      setTimeout(() => {
        navigate('/')
      }, 800);
    
    } catch (error) {
      navigate("/join");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      if (errorCode == "auth/email-already-in-use") {
        Swal.fire({
          icon: 'error',
          title: '이미 사용하고 있는 이메일 입니다.',
          text: '중복된 이메일이 없는지 확인하세요!',
        })
      } else if (errorCode == "auth/weak-password") { 
        alert("비밀번호를 6자리 이상으로 작성하세요");
      }
    }
  };

  const inputRef = useRef("");
  // 이메일,패스워드 조건이 충족하는지 확인용
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  // useEffect로 한자한자입력할때마다 확인해서
  // 이메일,패스워드 두개의 조건이 충족하면
  // 버튼을 활성화 시켜주는데 사용
  const [notAllow, setNotAllow] = useState(true);

  // 이메일 조건충족 확인
  const handleEmail = e => {
    setRegisterEmail(e.target.value);
    // 정규식인데 로그인할떄 특문같이 정해진 조건발동을 수행시켜주는거같다
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // 비밀번호 조건충족 확인
  const handlePw = e => {
    setRegisterPassword(e.target.value);
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
  //   // console.log(inputRef);
  //   inputRef.current.focus(); // 로그인id 자동포커스
  // }, [])

  // FireStore 콜랙션 추가하기

  const addUser = () => {
    // user이라는 변수로 firestore의 collection인 user에 접근
    const user = auth.collection("user");

    // bucket 콜렉션에 데이터를 추가한다.
    // document를 지정하지 않았기 때문에 랜덤으로 document와 id가 생성되고 값이 저장됨.
    user
      .add({ email: registerEmail, password: registerPassword })
      .then(docRef => {
        // 새로운 document의 id
        console.log(docRef.id);
      });
  };

  return (
    <motion.div initial={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}}
    animate={{opacity: 1 ,transform : 'translateY(0px)', transition:'transform 0.33s ease'}}
    exit={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}} className="join-app-joinForm">
      <form className="join-joinForm_form">
        <h1 className="join-joinForm_h1">Register
          <img src={paperimg2} className="join-joinForm_h1backimg" />
        </h1>
  
        <div className="join-joinForm_emailBox">
        <img src={emailicon} className="join-joinForm_emailimg_2"></img>
        <JoinInput
          className="join-email_input"
          value={registerEmail}
          placeholder="email@example.com"
          onChange={handleEmail}
        />
        </div>
        <div className="join-errorMessage">
          {/* 입력안했을땐 안나오고 이메일의 길이가 0보다 클때 오류문구 출력 */}
          {!emailValid &&
            registerEmail.length > 0 && ( // 조건이안맞고 이메일이0보다 높을때
              <div>올바른 이메일을 입력하세요.</div>
            )}
        </div>
        <div className="join-joinForm_emailBox">
        <img src={lockicon} className="join-joinForm_emailimg_3"></img>
        <JoinInput
          className="join-password_input"
          value={registerPassword}
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handlePw}
        />
        </div>
        <div className="join-errorMessage">
          {!pwValid &&
            registerPassword.length > 0 && ( // 조건이안맞고 패스워드가0보다 높을때
              <div>
                영문, 숫자, 특수문자 포함 <br /> 8자 이상 입력해주세요
              </div>
            )}
        </div>
        <div className="join-joinForm_emailBox" >
        <img src={nameicon} className="join-joinForm_emailimg_1" ></img>
        <JoinInput
          className="join-name_input"
          ref={inputRef}
          placeholder="이름을 입력하세요"
          onChange={e => {
            setName(e.target.value);
          }}
        />
        </div>
        <form name="frame">
          <div className="join-joinForm_emailBox_2">
          <img src={gendersicon} className="join-joinForm_emailimg_1" ></img>
          <select className="join-qustion">
            <option selected>선택</option>
            <option>남자</option>
            <option >여자</option>
          </select>
          </div>
        </form>
       
        <div id="wrapper">
          <label id="label">
            <input id="hiddenCheckbox" type="checkbox" />
            <div id="showCheckbox"></div>
            <span className="join-span">개인정보 수집 및 이용 동의 (선택)</span>
          </label>
        </div>
        <div id="wrapper">
          <label id="label">
            <input id="hiddenCheckbox" type="checkbox" />
            <div id="showCheckbox"></div>
            <span className="join-span">이벤트 안내 등 광고성 마케팅 수신 동의 (선택)</span>
          </label>
        </div>
        <button
          className="join-joinForm_btn"
          disabled={notAllow}
          onClick={(e) => {
            e.preventDefault();
            register();
            addUser();
          }}
        >
          회원가입
        </button>
      </form>
    </motion.div>
  );
};

export default Join;
