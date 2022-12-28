import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";
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
      {/* <div className="homecontactus-titleBox">
      <h2 className="homecontactus-title">Contact Us</h2>
      <div className="homecontactus-letter">
        <div className="homecontactus-middletitle">
          <p>주소주소주소주소주소주소</p>
          <p>전화번호:000-000-0000</p>
          <p>팩스번호:000-000-0000</p>
          <p>이메일:GamilC@gmail.com</p>
        </div>
      </div>
      </div> */}

<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />


<button className="homecontactus-button-one">
  <div class="letters">
        <div class="card">
          <div class="card_face front">S</div>
          <div class="card_face back"><i class="fab fa-github-square"></i></div>
        </div>
      </div>

      <div class="letters">
        <div class="card">
          <div class="card_face front">H</div>
          <div class="card_face back">
            <i class="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>

      <div class="letters">
        <div class="card">
          <div class="card_face front">A</div>
          <div class="card_face back">
            <i class="fab fa-facebook-square"></i>
          </div>
        </div>
      </div>

      <div class="letters">
        <div class="card">
          <div class="card_face front">R</div>
          <div class="card_face back">
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
      </div>

      <div class="letters">
        <div class="card">
          <div class="card_face front">E</div>
          <div class="card_face back">
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>


    </button>


    <div className="homecontactus-formBox">
      <form className="homecontactus-form" ref={form2} onSubmit={sendEmail2}>
        <div className="homecontactus-formdiv">

          <label className="homecontactus-formlable">Company&nbsp;</label>
          <input className="homecontactus-forminput" type="text"  name="user_com" required ></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable" >Name</label>
          <input className="homecontactus-forminput" type="text" name="user_name" required></input>
        </div>

        <div className="homecontactus-formdiv">
          <label className="homecontactus-formlable">Tel .</label>
          <input className="homecontactus-forminput" type="text"name="user_num" required></input>

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

          <label className="homecontactus-formlable"  >Etc</label>
          <input className="homecontactus-forminput" type="text" name="user_message" required/>

        </div>
        <div className="homecontactus-checkdiv">
          <input type="checkbox" className="homecontactus-checkbox" />
          <p className="homecontactus-checkbox">개인정보 동의함</p>

        <Button className="homecontactus-Btn" variant="btn btn-outline-light" type="submit">보내기</Button>

        </div>
      </form>
    </div>
    </div>
  );
};

export default HomeContactUs;
