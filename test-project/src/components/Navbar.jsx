import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import "../css/Navbar.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PangImage from "../img/Logo.png";

// login에서 가져온 import
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../data/firebase";
import "../css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../module/currentUser";

const Navbar = () => {

  const activeStyle = {color: "white"};

  const { action } = useContext(DataContext);
  const navigate = useNavigate();
  const loginuser = useSelector((state)=>(state.currentUser)) 
  // const dispatch = useDispatch();
  const currentUser = auth.currentUser;
  const [userName, setUserName] = useState("")

  useEffect(()=>{
    if(currentUser){
      setUserName(currentUser.displayName);
    }
    })

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
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      }, []);
    
      const emailLogin = async () => {
        const auth = getAuth();
        // const provider = new EmailAuthProvider();
        // signInWithEmailAndPassword(auth,provider)
        //     .then((result)=>{
        //         const credential = EmailAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;
        //         const user = result.user;
        //         action.setLogin("로그인성공");
        //     })
        //     .catch((error)=>{
        //         //
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         //
        //         const email = error.customData.email;
        //         //
        //         //const credential = EmailAuthProvider.credentialFromError(error);
        //         console.log("로그인실패")
        //     });
    
        try {
          const userInfo = await signInWithEmailAndPassword(auth, email, pw);
          // setUser(userInfo.user);
          // 로컬스토리지에 로그인 상태 저장
          window.sessionStorage.setItem("login", true);
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };
    
      const emailLogout = async () => {
        await signOut(auth);
        // 로컬스토리지에 로그인 상태 저장
        window.sessionStorage.setItem("login", false);
      };
    
      // 이메일,패스워드 조건이 충족하는지 확인용
      const [emailValid, setEmailValid] = useState(false);
      const [pwValid, setPwValid] = useState(false);
    
      // useEffect로 한자한자입력할때마다 확인해서
      // 이메일,패스워드 두개의 조건이 충족하면
      // 버튼을 활성화 시켜주는데 사용
      const [notAllow, setNotAllow] = useState(true);
    
      // 이메일 조건충족 확인
      const handleEmail = (e) => {
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
      const handlePw = (e) => {
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
    
      //useEffect(() => {
        // console.log(inputRef);
        //inputRef.current.focus(); // 로그인id 자동포커스
      //}, []);

  return (
    <div className="navbar-box">
      <div className="navbar-logo-div">
        <NavLink to="/"><img src={PangImage} width={130}></img></NavLink>
      </div>
      <div className="navbar-menu-big-div">
        <NavLink to="/main/portfolio" style={ 
        ({isActive})=> isActive ? activeStyle : undefined
      }>업체 포트폴리오</NavLink>
        <NavLink
          to="/main/estimation"
          style={ 
            ({isActive})=> isActive ? activeStyle : undefined
          }
          onClick={() => {
            action.setReciept([]);
          }}
        >
          맞춤 견적 짜기
        </NavLink>
        <NavLink to="/main/map" style={ 
        ({isActive})=> isActive ? activeStyle : undefined
      }>주변 업체 찾기</NavLink>
      </div>
      {window.sessionStorage.getItem("login") == 'true' ? (
        <div className="navbar-log-div">
          <button className="navbar-mypagebtn" onClick={()=>{
            // setTimeout(()=>{
              navigate('/main/mypage');
            // },3000)
          }}>My Page</button>
          <button className="navbar-loginbtn" onClick={()=>{
          window.sessionStorage.setItem("login", false);
          window.sessionStorage.setItem("photoURL", null);
          window.sessionStorage.setItem("googleLogin", false);
          alert("로그아웃하였습니다")
          navigate('/')
        }}>
          Logout
        </button>
        </div>
      ) : (
        <div className="navbar-log-div">
          <button className="navbar-loginbtn"
          onClick={() => {
            navigate("/main/login");
          }}
        >
          Login
        </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
