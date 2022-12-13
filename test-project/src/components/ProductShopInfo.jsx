import { } from "../css/ProductShopInfo.css";
import Card from "react-bootstrap/Card";
import MainComment from "./ProductMainComment";
import ProductInsertComment from "./ProductInsertComment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";

const ShopInfo = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const market = state.score.find((m) => m.id == id); //undefined 값을 지정해줘야한다.
  const [comment, setComment] = useState([
    {
      id: 1,
      comment: []
    },
    {
      id: 2,
      comment: []
    },
    {
      id: 3,
      comment: []
    },
    {
      id: 4,
      comment: []
    },
    {
      id: 5,
      comment: []
    },
    {
      id: 6,
      comment: []
    },
    {
      id: 7,
      comment: []
    },
    {
      id: 8,
      comment: []
    },
    {
      id: 9,
      comment: []
    },
  ]
  );

  const addComment = () => {

  }
  return (
    <div className="Product-shopInfo">
      <InfoCard market={market} />
    </div>
  );
};
export default ShopInfo;

function InfoCard(props) {
  const { market } = props;
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
        </Card.Body>
      </Card>

      <Card className="Product-comment">
        <Card.Body>
          <Card.Title>
            <h1>한줄평</h1>
          </Card.Title>
          <Card style={{ height: "420px", overflow: "auto" }}>
            <MainComment />
          </Card>
          <ProductInsertComment comment={comment} addComment={addComent} />
        </Card.Body>
      </Card>
    </div>
  );
}