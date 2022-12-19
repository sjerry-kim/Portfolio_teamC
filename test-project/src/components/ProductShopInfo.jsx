import { } from "../css/ProductShopInfo.css";
import Card from "react-bootstrap/Card";
import MainComment from "./ProductMainComment";
import ProductInsertComment from "./ProductInsertComment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";
import ProductInsertAverage from "./ProductInsertAverage";

// 1219 firestore- 진혜
import db from '../data/firebase'
import { collection, query, where, getDocs, orderBy, doc, setDoc, addDoc, getDoc, getDocsFromCache } from "firebase/firestore";
import { useEffect } from "react";

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

  const { id } = useParams();
  const [newArray, setNewArray] = useState([]);
  let array = []

  const getData = async() => {
    const filteredMarket = query(collection(db, "test"),where("marketId","==",`${id}`));
    const queryMarket = await getDocs(filteredMarket); // 파이어베이서 디비 ...
    queryMarket.forEach((doc)=>{
        array.push(doc.data());
    })
    setNewArray(array);
  }

  useEffect(()=>{
    getData();
  },[newArray])

  return (
    <div className="Product-infoCards">
      <Card className="Product-infoCard">
        <Card.Body>
          <Card.Title>
            <h2>{market ? market.name : "없는 정보 입니다"}<img src={market.companyLogo} alt="" /></h2>
          </Card.Title>
          <Card.Text>
            <p>주소 : {market ? market.location : "없는 정보 입니다"}</p>
            <p>대충 자사 소개와 사진이 들어가는건 어떠세요?</p>
            <p>연락처 : {market ? market.number : "없는 정보 입니다"}</p>
          </Card.Text>
          <Card.Link href="#">업체 홈페이지 바로가기</Card.Link>
          <ProductInsertAverage list={list} />
        </Card.Body>
      </Card>

      <Card className="Product-comment">
        <Card.Body>
          <Card.Title>
            <h1>한줄평</h1>
          </Card.Title>
          <Card style={{ height: "420px", overflow: "auto" }}>
            <MainComment/>
          </Card>
          <ProductInsertComment />
        </Card.Body>
      </Card>
    </div>
  );
}