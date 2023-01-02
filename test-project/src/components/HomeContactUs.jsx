import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";
import "../css/HomeContactUs.css";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const HomeContactUs = () => {
  const form2 = useRef();

  const navigate = useNavigate();

  const sendEmail2 = e => {
    e.preventDefault();
    const Service_ID = "service_y4raiv3";
    const Template_ID = "template_sqorybn";
    const User_ID = "odmr0vvUUkxqQq_1d";

    emailjs.sendForm(Service_ID, Template_ID, form2.current, User_ID).then(
      result => alert("메일을 성공적으로 전송했습니다!"),
      error => alert("메일 전송을 실패했습니다!")
    );
    e.currentTarget.reset();
  };

  return (
    <div>
      <div className="homecontactus-titleBox">
        <h2 className="homecontactus-title">Contact Us</h2>
        <div className="homecontactus-letter">
          <div className="homecontactus-middletitle">
            <p>부산 부산진구 중앙대로 749</p>
            <p>전화번호 : 051-715-6224</p>
            <p>팩스번호 : 051-715-6224</p>
            <p>이메일 : GamilC@gmail.com</p>
          </div>
        </div>
      </div>

      <button className="homecontactus-button-one">
        <div className="homecontactus-letters">
          <div className="homecontactus-card">
            <div className="homecontactus-card_face front">S</div>
            <div className="homecontactus-card_face back">
              <a href="https://github.com/sjerry-kim/-Project-teamC">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="homecontactus-letters">
          <div className="homecontactus-card">
            <div className="homecontactus-card_face front">H</div>
            <div className="homecontactus-card_face back">
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </div>
          </div>
        </div>

        <div className="homecontactus-letters">
          <div className="homecontactus-card">
            <div className="homecontactus-card_face front">A</div>
            <div className="homecontactus-card_face back">
              <a href="https://ko-kr.facebook.com/">
                <FontAwesomeIcon
                  classNameName="imgfont"
                  icon={faFacebookSquare}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="homecontactus-letters">
          <div className="homecontactus-card">
            <div className="homecontactus-card_face front">R</div>
            <div className="homecontactus-card_face back">
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </div>
          </div>
        </div>

        <div className="homecontactus-letters">
          <div className="homecontactus-card">
            <div className="homecontactus-card_face front">E</div>
            <div className="homecontactus-card_face back">
              <a href="https://kr.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </button>

      <div className="homecontactus-formBox">
        <form className="homecontactus-form" ref={form2} onSubmit={sendEmail2}>
          <div className="homecontactus-formdiv">
            <label className="homecontactus-formlable">Company&nbsp;</label>
            <input
              className="homecontactus-forminput"
              type="text"
              name="user_com"
              required
            ></input>
          </div>

          <div className="homecontactus-formdiv">
            <label className="homecontactus-formlable">Name</label>
            <input
              className="homecontactus-forminput"
              type="text"
              name="user_name"
              required
            ></input>
          </div>

          <div className="homecontactus-formdiv">
            <label className="homecontactus-formlable">Tel .</label>
            <input
              className="homecontactus-forminput"
              type="text"
              name="user_num"
              required
            ></input>
          </div>

          <div className="homecontactus-formdiv">
            <label className="homecontactus-formlable">Email</label>
            <input
              className="homecontactus-forminput"
              type="text"
              name="user_email"
              required
            />
          </div>
          <div className="homecontactus-formdiv">
            <label className="homecontactus-formlable">Etc</label>
            <input
              className="homecontactus-forminput"
              type="text"
              name="user_message"
              required
            />
          </div>
          <div className="homecontactus-checkdiv">
            <input type="checkbox" className="homecontactus-checkbox" />
            <p className="homecontactus-checkbox">개인정보 동의함</p>

            <Button
              className="homecontactus-Btn"
              variant="btn btn-outline-light"
              type="submit"
            >
              <p>보내기</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeContactUs;
