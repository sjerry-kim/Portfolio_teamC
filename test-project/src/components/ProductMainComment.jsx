import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../data/DataContext";

// import { firestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { auth, firestore } from "../data/firebase";
import db from "../data/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocsFromCache,
} from "firebase/firestore";
import { useState } from "react";
import { get, getDatabase } from "firebase/database";
import { getIdToken } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const MainComment = ({ newArray, getData }) => {
  const { id } = useParams();
  const user = auth.currentUser;

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div
      style={{
        height: "400px",
        overflow: "auto",
        padding: "10px",
        width: "100%",
        backgroundColor: "rgb(241,238,235)",
      }}
    >
      {newArray.map((item, i) => (
        <div
          style={{
            margin: "15px",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold" }}>{item.name}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              paddingTop: "10px",
            }}
          >
            <p>{item.comment}</p>
            {user.displayName == item.name ? (
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                onClick={async () => {
                  const review = firestore.collection("review");
                  const sameCommentDoc = query(
                    collection(db, "review"),
                    where("comment", "==", item.comment) // 추후 개별 id로 변경시키기! -> 같은 내용 코멘트일시 에러 발생함
                  );
                  const sameCommnetDocs = await getDocs(sameCommentDoc);
                  sameCommnetDocs.forEach(doc => {
                    review.doc(`${doc.id}`).delete();
                    alert("댓글을 삭제하였습니다");
                  });
                  setInterval(() => {
                    window.location.reload();
                  }, 1000);
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{
                    color: "rgba(0,0,0,0.4)",
                  }}
                />
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
