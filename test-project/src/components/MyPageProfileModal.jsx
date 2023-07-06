import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../data/firebase";
import { updateProfile } from "firebase/auth";
import "../css/MyPageProfileModal.css";

function MyPageProfileModal({ setUpdate }) {
  // 모달 펼치기에 필요한 state 및 함수
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // 기본프로필 설정 비포&애프터 구분을 위한 세션 저장
  const handleShow = () => {
    window.sessionStorage.setItem("profileClick", true);
    setShow(true);
  };

  // 이미지 파일 저장 state
  const [file, setFile] = useState("");
  // 프로필 div ref
  const imgShow = useRef();

  // 프로필 이미지 파일 업로드 -> 부트스트랩 사용
  const onLoadFile = (e) => {
    // 이미지 파일을 state에 저장
    setFile(e.target.files[0]);
    imgShow.current.style.backgroundSize = "cover";
    // 업로드한 이미지 파일의 url 생성
    imgShow.current.style.backgroundImage = `url(${URL.createObjectURL(
      e.target.files[0]
    )})`;
  };

  // 저장을 눌렀을 때 state에 사진을 저장하고 모달창을 종료
  const saveProfile = () => {
    // 파이어베이스에 프로필을 업데이트 시킴
    updateProfile(auth.currentUser, {
      photoURL: URL.createObjectURL(file),
    })
      .then(() => {
        // 프로필 업데이트 !
        window.sessionStorage.setItem("photoURL", URL.createObjectURL(file)); // 파이어베이스 업로드 속도 문제로 세션 저장
        // 리랜더용 set
        setUpdate(
          window.sessionStorage.getItem(
            "firebase:authUser:AIzaSyCMoXUqkehoGjCep79k-dmXJLJfb-HZuFo:[DEFAULT]"
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
    // 모달창 종료
    handleClose();
  };

  return (
    <div className="mypageprofilemodal-div">
      <Button onClick={handleShow} className="mypageprofilemodal-btn">
        프로필 변경
      </Button>
      {/* 같은 공간에 있다가 show를 통해서 보여줬다가, 보여주지 않았다가 하는 제어로 사용 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="mypageprofilemodal-title">
            프로필 변경
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mypageprofilemodal-body">
          {/* 추가된 사진 미리보기 */}
          <div
            className="mypageprofilemodal-preview"
            style={{
              textAlign: "center",
              width: "200px",
              height: "200px",
              backgroundColor: "lightgray",
              display: "flex",
              justifyContent: "center",
            }}
            ref={imgShow}
          >
            {imgShow.current ? "" : <FontAwesomeIcon icon={faCamera} />}
          </div>
          {/* 사진 파일을 받아올 input 태그 가져오기 */}
          <Form.Group
            controlId="formFile"
            className="mb-3 mypageprofilemodal-input"
          >
            <Form.Control type="file" onChange={onLoadFile} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="mypageprofilemodal-footer">
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button
            className="mypageprofilemodal-save-btn"
            variant="primary"
            onClick={saveProfile}
          >
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyPageProfileModal;
