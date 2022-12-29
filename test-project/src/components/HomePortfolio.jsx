import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../css/HomePortfolio.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

 
 

const HomePortfolio = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    centerPadding: '10px'
    
    //nextArrow: <SampleNextArrow />,
		//prevArrow: <SamplePrevArrow />
  };
  const imgArray = ([
    {img : "agioCom2.JPG"},
    {img : "dasoleCom2.JPG"},
    {img : "dawonCom3.JPG"},
    {img : "evianCom3.jpg"},
    {img : "idasCom2.JPG"},
    {img : "jyCom1.jpg"},
    {img : "monoCom2.JPG"},
    {img : "oneCom2.jpg"},
    {img : "purenCom1.jpg"},
  ]);

  return (
    <div>
      <div className="homeportfolio-info">
        <p className="homeportfolio-info-title">Partner Companies</p>
      </div>
    
    <Slider className="homeportfolio-com" {...settings}>
      {
        imgArray.map((img, index)=>(
          <div key={index}>
            <img src={require(`../img/${img.img}`)} alt="" />
          </div>
        )) 
      }
    </Slider>
    </div>
  );
}

export default HomePortfolio;

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
// 		<FontAwesomeIcon 
//       icon={faChevronRight}
// 			className={className}
// 			onClick={onClick}
// 			style={{color:"lightgray", width:"50px", height:"50px", zIndex:"100", top:"250px", right:"-30px"}}
//       size="lg"
// 		></FontAwesomeIcon>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
// 		<FontAwesomeIcon 
// 			icon={faChevronLeft}
// 			className={className}
// 			onClick={onClick}
// 			style={{color:"lightgray", width:"50px", height:"50px", zIndex:"100", top:"250px", right:"-30px"}}
//       size="lg"
// 		/>
//   );
// }