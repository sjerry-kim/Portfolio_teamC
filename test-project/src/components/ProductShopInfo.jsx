import {} from "../css/ProductShopInfo.css";
import MainComment from "./ProductMainComment";
import ProductInsertComment from "./ProductInsertComment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useNavigate, useParams } from "react-router-dom";

// 1219 firestore- 진혜
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

import KakaoShare from "./KakaoShare";





const ShopInfo = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const market = state.score.find((m) => m.id == id); //undefined 값을 지정해줘야한다.

  return (
    <div className="Product-shopInfo">
      <InfoCard market={market} />
    </div>
  );
};
export default ShopInfo;

function InfoCard(props) {
  const { market } = props;
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [newArray, setNewArray] = useState([]);

  const getData = async (id) => {
    const filteredMarket = query(
      collection(db, "review"),
      where("marketId", "==", `${id}`),
      orderBy("timeStamp")
    );
    const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 ...
    let array = [];
    queryMarket.forEach((doc) => {
      array.push(doc.data());
    });
    setNewArray(array);
    console.log(array);
  };

  return (
    <div className="Product-infoCards">
      <div className="Product-infoCard">
        <div className="Product-detail">
          <div>
            <h2>{market ? market.name : "없는 정보 입니다"}</h2>
            <div className="titleNshare">
            <KakaoShare></KakaoShare>
            </div >
            <div className="Product-information">
            <p className="infoAdd">주소 : {market ? market.location : "없는 정보 입니다"}</p>
            <p className="infoAdd">연락처 : {market ? market.number : "없는 정보 입니다"}</p> 
            <p className="infoAdd">{market ? market.companyEtc : "없는 정보 입니다"}</p>
            </div>
            </div>

        </div>
      </div>
      <div className="Product-video">
        {market ? (
          <video
            muted
            loop
            autoPlay
            style={{
              width: "700px",
              height: "400px",
            }}
          >
            <source src={require(`../video/${market.companyVideo}`)} />
          </video>
        ) : (
          "없는 정보 입니다"
        )}
      </div>
      <div className="Product-comment">
        <div>
          {window.sessionStorage.getItem("login") == "true" ? (
            <div>
              <div className="Product-commentLogIn">
                <h2>업체 한줄평</h2>
              </div>
              <ProductInsertComment getData={getData} />
              <div>
                <MainComment
                  newArray={newArray}
                  setNewArray={setNewArray}
                  getData={getData}
                />
              </div>
            </div>
          ) : (
            <div className="Product-commentLogOut">
              <h2>업체 한줄평</h2>
              <div className="Product-commentLogOut-p-div">
                <p>로그인 후 이용 가능합니다</p>
                <button onClick={()=>{navigate('/main/login')}}>
                  Click & 로그인 하러 가기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}





















//사형예정
          {/* <a className="iconLink" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D">
  <FontAwesomeIcon icon={faTwitterSquare} 
    style={{
      size:"lg",
      height:"30px",
      width:"30px",
      marginLeft:"500px",
      color:"#583516",

    }}/>
  </a>
  <a className="iconLink" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D">
  <FontAwesomeIcon icon={faFacebookSquare}
    style={{
      size:"lg",
      height:"30px",
      width:"30px",
      color:"#583516",
      marginLeft:"10px",
    }}/>
  </a>
  <a className="iconLink" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D">
  <FontAwesomeIcon icon={faInstagramSquare} 
    style={{
      size:"lg",
      height:"30px",
      width:"30px",
      color:"#583516",
      marginLeft:"10px",
    }}/>
  </a>
  <a className="iconLink" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D">
  <FontAwesomeIcon icon={faComment} 
    style={{
      size:"lg",
      height:"30px",
      width:"30px",
      color:"#583516",
      marginLeft:"10px",
    }}/>
  </a>           */}