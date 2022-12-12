import { useEffect, useRef, useState } from "react";
import JoinInput from "../components/JoinInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebase";
import { useNavigate } from "react-router-dom";

const Join = () => {

  // 파이어베이스 회원가입
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();
  const CreateCheckButton = () => {
    // 가입완료시 페이지 경로
    navigate("/");
  };


  const register = async () => {
      try {
          const user = await createUserWithEmailAndPassword(
              auth,
              registerEmail,
              registerPassword,
          );

          console.log(user);
      } catch (error) {
          console.log(error.message);
      }
      
  };
  // ---------------------------------------

  const inputRef = useRef("");
    // 이메일,패스워드 조건이 충족하는지 확인용
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    // useEffect로 한자한자입력할때마다 확인해서 
    // 이메일,패스워드 두개의 조건이 충족하면
    // 버튼을 활성화 시켜주는데 사용
    const [notAllow, setNotAllow] = useState(true);


    // 이메일 조건충족 확인
    const handleEmail = (e) => {
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
    const handlePw = (e) => {
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

    }, [emailValid, pwValid])

    // useEffect(() => {
    //   // console.log(inputRef);
    //   inputRef.current.focus(); // 로그인id 자동포커스
    // }, [])
  

  return (
    <div className="join-app-joinForm">
      <form className="join-joinForm_form">
        <h1 className="join-joinForm_h1">Register</h1>
        <JoinInput 
        ref={inputRef}
        placeholder="name"
        onChange={(e)=>{
          setName(e.target.value);
        }}
        />
          <JoinInput
          value={registerEmail}
          placeholder="Email"
          onChange={handleEmail}/>
          <div className="join-errorMessage">
            {/* 입력안했을땐 안나오고 이메일의 길이가 0보다 클때 오류문구 출력 */}
            {
              !emailValid && registerEmail.length > 0 && (    // 조건이안맞고 이메일이0보다 높을때
                <div>올바른 이메일을 입력하세요.</div>
              )
            }
          </div>
          <JoinInput 
          value={registerPassword}
          type="password"
          placeholder="EmailPassword"
          onChange={handlePw}/>
          <div className="join-errorMessage">
            {
              !pwValid && registerPassword.length > 0 && ( // 조건이안맞고 패스워드가0보다 높을때
                <div>영문, 숫자, 특수문자 포함 <br /> 8자 이상 입력해주세요</div>
              )
            }
          </div>
        <button className="join-joinForm_btn" disabled={notAllow} onClick={()=>{register(); CreateCheckButton();}}>가입</button>
      </form>
    </div>
  );
};

export default Join;
