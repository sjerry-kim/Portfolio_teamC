import {} from "../css/ProductBestRe.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";

const ProductBestRe = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const bestReviews = state.score.find(r => r.id == id);

  return (
    <div className="Product-bestRe">
      <h1>베스트 리뷰</h1>
      <ReviewCard bestReviews={bestReviews}></ReviewCard>
    </div>
  );
};

export default ProductBestRe;

function ReviewCard(props) {
  const { bestReviews } = props;
  const index = [1, 2, 3, 4, 5, 6];
  const [click, setClick] = useState();

  return (
    <div className="Product-reviewCards">

      { index.map( (index) => (
        <div className={click==index ? "Product-reCard on" : "Product-reCard"} onMouseEnter={()=>{setClick(index)}} onMouseLeave={()=>{setClick()}}>
        <div className="bestReviews_cardIMG">
          {bestReviews ? <img src={bestReviews["reviewImg"+index]} /> : "후기 사진없음"}
        </div>
        <div className="product-bestReviews_cardIMG">
          <h3>{bestReviews ? bestReviews["reviewTitle"+index] : "후기 제목 없음"}</h3>
          <p>{bestReviews ? bestReviews["reviewComment"+index] : "후기 없음"}</p>
        </div>
      </div>
))}
    </div>
  );
}
