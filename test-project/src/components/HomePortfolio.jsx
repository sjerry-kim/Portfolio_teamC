import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../css/HomePortfolio.css"
import HomePortfolioCard1 from "./HomePortfolioCard1";
import HomePortfolioCard2 from "./HomePortfolioCard2";
import HomePortfolioCard3 from "./HomePortfolioCard3";
import HomePortfolioCard4 from "./HomePortfolioCard4";
import HomePortfolioCard5 from "./HomePortfolioCard5";
import HomePortfolioCard6 from "./HomePortfolioCard6";
import HomePortfolioCard7 from "./HomePortfolioCard7";
import HomePortfolioCard8 from "./HomePortfolioCard8";
import HomePortfolioCard9 from "./HomePortfolioCard9";
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
        <HomePortfolioCard1 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard2 id="homeportfolio-asd" />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard3 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard4 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard5 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard6 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard7 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard8 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard9 />
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