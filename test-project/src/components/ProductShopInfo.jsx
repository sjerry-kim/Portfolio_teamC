import {} from "../css/ProductShopInfo.css";
import Card from "react-bootstrap/Card";
import MainComment from "./ProductMainComment";
import ProductInsertComment from "./ProductInsertComment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";
import ProductInsertAverage from "./ProductInsertAverage";
import useScrollFadeIn from "./useScrollFadeIn";

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
import { useEffect } from "react";

const ShopInfo = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const market = state.score.find(m => m.id == id); //undefined 값을 지정해줘야한다.

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

  const [newArray, setNewArray] = useState([]);

  const getData = async id => {
    const filteredMarket = query(
      collection(db, "review"),
      where("marketId", "==", `${id}`),
      orderBy("timeStamp")
    );
    const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 ...
    let array = [];
    queryMarket.forEach(doc => {
      array.push(doc.data());
    });
    setNewArray(array);
    console.log(array);
  };

  return (
    <div className="Product-infoCards">
      <div className="Product-infoCard">
        <div>
          <div>
            <h2>
              {market ? market.name : "없는 정보 입니다"}
            </h2>
          </div>
          <div>
            <p>주소 : {market ? market.location : "없는 정보 입니다"}</p>
            <p>연락처 : {market ? market.number : "없는 정보 입니다"}</p>
          </div>
        </div>
      </div>

      <div className="Product-video">
      {market ? 


        <div 
        style={{
          width:'300px', height:'280px'}} >
      <video style={{
          width:'300px', height:'280px'}}  controls="controls" autoPlay="autoPlay" >
     <source src={require(`../video/${market.companyVideo}`)} type="video/mp4"/>
      </video>

      </div>
      : "없는 정보 입니다"}
      </div>

      <div className="Product-comment">
        <div>
          {window.sessionStorage.getItem("login") == "true" ? (
            <div>
              <div>
                <h2>한줄평 및 코멘트</h2>
              </div>
              <ProductInsertComment getData={getData} />
              <div
                style={{
                  right: "17px",
                  height: "550px",
                  overflow: "auto",
                  marginTop: "10px",
                  width: "903px",
                }}
              >
                <MainComment
                  newArray={newArray}
                  setNewArray={setNewArray}
                  getData={getData}
                />
              </div>
            </div>
          ) : (
            <div>
              <div>
                <h1>한줄평 및 코멘트</h1>
              </div>
              <p>로그인 후 이용하세요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
