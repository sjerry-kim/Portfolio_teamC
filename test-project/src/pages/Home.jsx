import HomeAboutUs from "../components/HomeAboutUs";
import HomePortfolio from "../components/HomePortfolio";
import HomeContactUs from "../components/HomeContactUs";

import "../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect, useRef } from "react";
import HomeNavbar from "../components/HomeNavbar";

const Home = () => {
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: false,
    vertical: false,
    arrows: false,
    infinite: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          dots: true,
          touchMove: false,
          onSwipe: false,
          draggable: false,
        },
      },
    ],
  };

  const slider = useRef(null);

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);
    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);

  function scroll(e) {
    if (slider === null) return 0;
    e.wheelDelta > 0 ? slider.current.slickPrev() : slider.current.slickNext();
  }

  return (
    <div className="home-slick-div">
      <div id="home-container">
        <div id="home-container2">
          <Slider className="home-main-slick" {...settings2} ref={slider}>
            <div className="home-box one">
              <div>
                <HomeAboutUs />
              </div>
            </div>
            <div className="home-box two">
              <div className="home-slick-position1">
                <HomePortfolio />
              </div>
            </div>
            <div className="home-box three">
              <div className="home-slick-position2">
                <HomeContactUs />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="home-arrow-container">
        <div class="center-con">
          <div class="round">
            <div id="cta">
              <div className="home-arrow-title">Scroll</div>
              <span class="arrow primera next "></span>
              <span class="arrow segunda next "></span>
              <div className="homecontactus-cp">
                <p className="homecontactus-cp-p">
                  © Copyright 2022 Today Design Company. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("../img/logo_white.png")}
        className="home-logo"
        width="230"
        alt=""
      />
      <div id="outer-container">
        <HomeNavbar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap"></div>
      </div>
    </div>
  );
};

export default Home;