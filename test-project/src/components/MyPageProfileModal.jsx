import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { auth } from '../data/firebase';
import { updateProfile } from 'firebase/auth';


function MyPageProfileModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const {action, state} = useContext(DataContext);
  const [file, setFile] = useState("");
  const imgShow = useRef();

  // 파일을 가져오는 함수
  const onLoadFile = (e) =>{
    setFile(e.target.files[0]);
    imgShow.current.style.backgroundSize = "cover";
    imgShow.current.style.backgroundImage =  `url(${URL.createObjectURL(e.target.files[0])})`
  }

  // 저장을 눌렀을 때 state에 사진을 저장하고 모달창을 종료
  const saveProfile = () =>{
    updateProfile(auth.currentUser, {
      photoURL: `${URL.createObjectURL(file)}`
    }).then(() => {
      // Profile updated!
      window.sessionStorage.setItem("photoURL", URL.createObjectURL(file))
      // setTimeout(()=>{window.location.reload();}, 3000);
      console.log("성공")
    }).catch((error) => {
      // An error occurred
      // ...
      console.log(error);
    })
    handleClose();
  }


  return (
    <div className='profile-up-modal'>
      <Button onClick={handleShow} className="profile-modal-btn">
        Change the profile
      </Button>
      {/* 같은 공간에 있다가 show를 통해서 보여줬다가, 보여주지 않았다가 하는 제어로 사용 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add the image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* 추가된 사진 미리보기 */}
          <div className='preview' style={{textAlign: "center", width:"200px", height:"200px", backgroundColor:"lightgray", display:"flex", justifyContent:"center"}} ref={imgShow}>
            {
              imgShow.current? (""):(<FontAwesomeIcon icon={faCamera} style={{color:"white",fontSize:"3em", zIndex:"999"}} />)
            }
          </div>
          {/* 사진 파일을 받아올 input 태그 가져오기 */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" onChange={onLoadFile} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveProfile}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyPageProfileModal;