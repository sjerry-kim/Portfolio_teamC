import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {Button} from "react-bootstrap";
import "../css/HomeContactUs.css";
import { useNavigate } from "react-router-dom";

const HomeContactUs = () => {
    const form2 = useRef();
   
    const navigate = useNavigate();

    const sendEmail2 = e => {
      e.preventDefault();
      const Service_ID = "service_y4raiv3";
      const Template_ID = "template_sqorybn";
      const User_ID = "odmr0vvUUkxqQq_1d";
  
      emailjs.sendForm(Service_ID, Template_ID, form2.current, User_ID).then(
        result => alert(result.text),
        error => alert(error.text)
      );
      e.currentTarget.reset();
    };
  

  return (
    <div>
      <h2 className="homecontactus-title">Contact Us</h2>
      <div>
          <button className="homecontactus-button">
            간편 견적 하러가기
          </button>
        </div>
      <div className="homecontactus-letter">
        <div className="homecontactus-middletitle">
          <p>주소주소주소주소주소주소</p>
          <p>전화번호:000-000-0000</p>
          <p>팩스번호:000-000-0000</p>
          <p>이메일:GamilC@gmail.com</p>
        </div>
      </div>

      <form className="homecontactus-form" ref={form2} onSubmit={sendEmail2}>
        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable">회사 이름</label>
          <input className="homecontactus-forminput" type="text"  name="user_com" required ></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable" >이름</label>
          <input className="homecontactus-forminput" type="text" name="user_name" required></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable">연락처</label>
          <input className="homecontactus-forminput" type="text"name="user_num" required></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable"  >Email</label>
          <input className="homecontactus-forminput" type="text" name="user_email" required/>
        </div>
        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable"  >추가 문의사항</label>
          <input className="homecontactus-forminput" type="text" name="user_message" required/>
        </div>
        <div className="homecontactus-checkdiv">
          <input type="checkbox" />
          <p className="homecontactus-checkbox">개인정보 동의함</p>
        <Button variant="btn btn-outline-light" type="submit">보내기</Button>
        </div>
      </form>
    </div>
  );
};

export default HomeContactUs;
