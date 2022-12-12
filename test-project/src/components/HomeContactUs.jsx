import { Button } from "react-bootstrap";
import "../css/HomeContactUs.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const HomeContactUs = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    const Service_ID = "service_y4raiv3";
    const Template_ID = "template_sqorybn";
    const User_ID = "odmr0vvUUkxqQq_1d";

    emailjs.sendForm(Service_ID, Template_ID, form.current, User_ID).then(
      result => alert(result.text),
      error => alert(error.text)
    );
    e.currentTarget.reset();
  };
  return (
    <div>
      <h2 className="homecontactus-title">Contact Us</h2>
      <div>
        <button className="homecontactus-button">업체바로가기</button>
      </div>
      <div className="homecontactus-letter">
        <div className="homecontactus-middletitle">
          <p>주소주소주소주소주소주소</p>
          <p>전화번호:000-000-0000</p>
          <p>팩스번호:000-000-0000</p>
          <p>이메일:GamilC@gmail.com</p>
        </div>
      </div>
      <form className="homecontactus-form" ref={form} onSubmit={sendEmail}>
        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable">회사 이름</label>
          <input className="homecontactus-forminput" type="text"></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable">이름</label>
          <input className="homecontactus-forminput" type="text"></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable">연락처</label>
          <input className="homecontactus-forminput" type="text"></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable">Email</label>
          <input className="homecontactus-forminput" type="text"></input>@
          <input className="homecontactus-forminput" type="text" />
        </div>

        <div>
          <input type="checkbox" name="" id="" size={20} />
          <p className="homecontactus-checkbox">개인정보 동의함</p>
        </div>

        <div>
          <Button variant="btn btn-outline-light" type="submit">
            보내기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomeContactUs;
