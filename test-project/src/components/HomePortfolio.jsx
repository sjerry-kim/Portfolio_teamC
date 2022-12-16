import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../css/HomePortfolio.css"
import HomePortfolioCard1 from "./HomePortfolioCard1";
import HomePortfolioCard2 from "./HomePortfolioCard2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

 
 

const HomePortfolio = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider className="homeportfolio-com" {...settings}>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 className="homeportfolio-img1" />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard2 id="homeportfolio-asd" />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
    </Slider>
  );
}

export default HomePortfolio;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
		<FontAwesomeIcon 
      icon={faChevronRight}
			className={className}
			onClick={onClick}
			style={{color:"lightgray", width:"50px", height:"50px", zIndex:"100", top:"250px", right:"-30px"}}
      size="lg"
		></FontAwesomeIcon>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
		<FontAwesomeIcon 
			icon={faChevronLeft}
			className={className}
			onClick={onClick}
			style={{color:"lightgray", width:"50px", height:"50px", zIndex:"100", top:"250px", right:"-30px"}}
      size="lg"
		/>
  );
}