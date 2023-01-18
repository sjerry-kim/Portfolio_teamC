import '../css/ProductMainComment.css';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth, firestore } from "../data/firebase";
import db from "../data/firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const MainComment = ({ newArray, getData }) => {
  const { id } = useParams();
  const user = auth.currentUser;

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className='productmaincomment-div'>
      {newArray.map((item, i) => (
        <div className='productmaincomment-map-div'>
          <p className='productmaincomment-map-name'>{item.name}</p>
          <div className='productmaincomment-map-comment-div'>
            <p>{item.comment}</p>
            {user.displayName == item.name ? (
              <button
                className='productmaincomment-map-btn'
                onClick={async () => {
                  const review = firestore.collection("review");
                  const sameCommentDoc = query(
                    collection(db, "review"),
                    where("comment", "==", item.comment) // 추후 개별 id로 변경시키기! -> 같은 내용 코멘트일시 에러 발생함
                  );
                  const sameCommnetDocs = await getDocs(sameCommentDoc);
                  sameCommnetDocs.forEach(doc => {
                    review.doc(`${doc.id}`).delete();
                    let timerInterval
                    Swal.fire({
                      title: '댓글을 삭제합니다!',
                      timer: 1000,
                      timerProgressBar: true,
                      didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                          b.textContent = Swal.getTimerLeft()
                        }, 100)
                      },
                      willClose: () => {
                        clearInterval(timerInterval)
                      }
                    }).then((result) => {
                      /* Read more about handling dismissals below */
                      if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                      }
                    });
                  });
                  setInterval(() => {
                    window.location.reload();
                  }, 1000);
                }}
              >
                <FontAwesomeIcon icon={faTrash}/>
              </button>
            ) : (
              " "
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainComment;
