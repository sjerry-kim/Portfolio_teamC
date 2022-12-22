import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {} from "../css/ProductShopSlick.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
//삭제하면 안대용 데이터 파일 만들어지면 사용함
import { useParams } from "react-router";
import { useContext } from "react";
import DataContext from "../data/DataContext";

const ShopSlick = () => {
  const settings = {
    infinite: true, //무한반복
    slidesToshow: 1, //한화면에 보여질 이미지
    slidesToScroll: 1, //한번에 스크롤될 이미지
    //arrow: true, //옆화살표 표시
    dots: false, //아래점표시
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 2100, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간
    pauseOnHover: true, //마우스 올리면 멈춤
    fade:true,
        // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

const { id } = useParams();
const { state } = useContext(DataContext);
const shop = state.score.find((r) => r.id == id);

return (
  <Slider className="Product-Slider product-slick-slide" {...settings}>
    {shop.companyImg.map((item, index) => (
      <div key={index} className="Product-shopimg">
        <img src={require(`../img/${item}`)} />
        <div className="Product-logo">
          <h2></h2>
        </div>
      </div>
    ))}
  </Slider>
  
);
    }

export default ShopSlick;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={className}
      onClick={onClick}
      style={{
        color: "#fff",
        right: "50em",
        zIndex: "100",
      }}></FontAwesomeIcon>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      onClick={onClick}
      style={{ color: "#fff", left: "50em", zIndex: "100" }}
    />
  );
}