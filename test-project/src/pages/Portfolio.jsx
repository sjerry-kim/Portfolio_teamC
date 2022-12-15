import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { } from "../css/Portfolio.css";
import DataContext from "../data/DataContext";


const Portfolio = (props) => {
  const { state } = useContext(DataContext);

  return (

    <div>
      <body className="portfolio-body">
        <div className="portfolio-container">
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s1"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s2"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s3"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s4"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s5"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s6"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s7"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s8"
          />
          <input
            type="radio"
            name="slider"
            className="portfolio-d-none"
            id="s9"
          />

          
          <div className="portfolio-cards">
            <label for="s1" id="portfolio-slide1">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[0].reviewImg1} alt="" />{" "}
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/1">1 {state.score[0].name}
                    </Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s2" id="portfolio-slide2">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[1].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/2"> 2 {state.score[1].name}</Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s3" id="portfolio-slide3">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[2].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/3">3 {state.score[2].name}</Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s4" id="portfolio-slide4">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[3].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/4">4 {state.score[3].name}</Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s5" id="portfolio-slide5">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[4].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/5">  5 {state.score[4].name}</Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s6" id="portfolio-slide6">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[5].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/6"> 6 {state.score[5].name}</Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s7" id="portfolio-slide7">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[6].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/7">  7 {state.score[6].name}</Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s8" id="portfolio-slide8">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[7].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    <Link to="/main/product/8"> 8 {state.score[7].name}</Link>
                  </p>
                </div>
              </div>
            </label>
            <label for="s9" id="portfolio-slide9">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[8].reviewImg1} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {/*  */}
                    
                    <Link to="/main/product/9">9{state.score[8].name}</Link>
                 

                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>











      </body>
    </div>

  );
};

export default Portfolio;