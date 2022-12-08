import {} from "../css/ProductShopInfo.css";
import Card from "react-bootstrap/Card";
import MainComment from "./ProductMainComment";
import ProductInsertComment from "./ProductInsertComment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { markerdata } from "../data/markerdata";
import { useParams } from "react-router-dom";


const ShopInfo = () => {

  const { id } = useParams();


  const market = markerdata.find((m)=>(m.id == id));
  //undefined 값을 지정해줘야한다.

  return (
    <div className="Product-shopInfo">
      <InfoCard marketID = { market } />
    </div>
  );
};
export default ShopInfo;



function InfoCard(props) { 
    const {marketID} = props;
  return (
    <div className="Product-infoCards">
      <Card className="Product-infoCard">
        <Card.Body>
          <Card.Title>
            <h1>업체정보</h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">상세보기...</Card.Subtitle>
          <Card.Text>
            <h2>{ marketID ? marketID.title : "업체입니다" }</h2>
        
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
          <ProductInsertComment />
        </Card.Body>
      </Card>
    </div>
  );
}
