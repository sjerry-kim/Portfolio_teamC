import { } from "../css/ProductBestRe.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import house06 from "../img/house06.jpg";
import house04 from "../img/house04.jpg";
import house07 from "../img/house07.jpg";
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";


const ProductBestRe = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const bestReviews = state.score.find((r) => r.id == id);

  return (
    <div className="Product-bestRe">
      <h1>Best Reviews</h1>
      <ReviewCard bestReviews={bestReviews}></ReviewCard>
    </div>
  );
};

export default ProductBestRe;

function ReviewCard(props) {
  const { bestReviews } = props;
  return (
    <div className="Product-reviewCards">
      <div className="Product-reCard1">
        {/* <Card.Img             
            variant="top"
            className="Product-card-img-top"/> */}
        <div className="bestReviews_card2" >
          {bestReviews
            ? <img src={bestReviews.reviewImg1} />
            : "후기 사진없음"}
        </div>
        <Card className="Product-reCards">
          <Card.Body>
            <Card.Title>{bestReviews ? bestReviews.reviewTitle1 : "후기 제목 없음"}</Card.Title>
            <Card.Text>
              {bestReviews ? bestReviews.reviewComment1 : "후기 없음"}
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>


      <div className="Product-reCard2">
        <div className="bestReviews_card2" >
          {bestReviews
            ? <img src={bestReviews.reviewImg2} />
            : "후기 사진없음"}
        </div>
        <Card>
          <Card.Body>
            <Card.Title>{bestReviews ? bestReviews.reviewTitle2 : "후기 제목 없음"}</Card.Title>
            <Card.Text>
              {bestReviews ? bestReviews.reviewComment2 : "후기 없음"}
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>


      <div className="Product-reCard3">
        <div className="bestReviews_card3" >

          {bestReviews
            ? <img src={bestReviews.reviewImg3} />
            : "후기 사진없음"}
        </div>
        <Card>
          <Card.Body>
            <Card.Title>{bestReviews ? bestReviews.reviewTitle3 : "후기 제목 없음"}</Card.Title>
            <Card.Text>
              {bestReviews ? bestReviews.reviewComment3 : "후기 없음"}
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
