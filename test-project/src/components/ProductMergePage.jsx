import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {} from "../css/ProductMergePage.css";
import ProductBestRe from "./ProductBestRe";
import ShopInfo from "./ProductShopInfo";
import ShopSlick from "./ProductShopSlick";
import { useEffect, useRef } from "react";
// import ShopContainer from "./ShopContainer";

const ProductMergePage = () => {
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: false,
    vertical: true,
    arrows: false,
    infinite: false,
    draggable: false,
  };

  const slider = useRef(null);

  function scroll(e) {
    if (slider === null) return 0;
    e.wheelDelta > 0 ? slider.current.slickPrev() : slider.current.slickNext();
  }

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);
    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);

  return (
    <div className="slick-div">
      <Slider {...settings2} ref={slider}>
        <div className="top">
          <ShopSlick />
        </div>
        <div className="mid">
          <ProductBestRe />
        </div>
        <div className="bottom">
          <ShopInfo />
        </div>
      </Slider>
    </div>
  );
};

export default ProductMergePage;
