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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    centerPadding: '10px',
    pauseOnHover: false, //마우스 올려도 안멈춤
    pauseOnFocus: false,
    //nextArrow: <SampleNextArrow />,
		//prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };
  const imgArray = ([
    {company: "Agio Design", img : "agioCom2.JPG"},
    {company: "Dasole Design",img : "dasoleCom2.JPG"},
    {company: "Dawon Design",img : "dawonCom3.JPG"},
    {company: "Evian Design",img : "evianCom3.jpg"},
    {company: "IDAS INC.",img : "idasCom2.JPG"},
    {company: "JY Interior Design",img : "jyCom1.jpg"},
    {company: "Mono Interior",img : "monoCom2.JPG"},
    {company: "1204 Design",img : "oneCom2.jpg"},
    {company: "PurenDeul Interior",img : "purenCom1.jpg"},
  ]);

  return (
    <div>
      <div className="homeportfolio-info">
        <p className="homeportfolio-info-title">Partner Companies</p>
      </div>
    
    <Slider className="homeportfolio-com" {...settings}>
      {
        imgArray.map((img, index)=>(
          <div className="homeportfolio-map-div" key={index}>
            <img src={require(`../img/${img.img}`)} alt="" />
            <p className="homeportfolio-name">{img.company}</p>
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