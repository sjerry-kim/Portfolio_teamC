import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { } from "../css/Portfolio.css";
import DataContext from "../data/DataContext";


const Portfolio = (props) => {
  const { state } = useContext(DataContext);
  const disappearSign = () => {
    document.querySelector(".click_card1").style.display = "none"
    document.querySelector(".click_card2").style.display = "none"
  }

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
          <h3 className="click_card1">Click Card</h3>
          <a href="#" className="click_card2" onClick={() => { disappearSign() }} ><span></span><span></span><span></span></a>
          <div className="portfolio-cards" onClick={() => { disappearSign() }}>
            <label for="s1" id="portfolio-slide1">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[0].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[0].name}
                  </p>
                  <p className="portfolio_intro">{state.score[0].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/1">View More</Link></button>
              </div>
            </label>
            <label for="s2" id="portfolio-slide2">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[1].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[1].name}
                  </p>
                  <p className="portfolio_intro">{state.score[1].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/2">View More</Link></button>
              </div>
            </label>
            <label for="s3" id="portfolio-slide3">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[2].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[2].name}
                  </p>
                  <p className="portfolio_intro">{state.score[2].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/3">View More</Link></button>
              </div>
            </label>
            <label for="s4" id="portfolio-slide4">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[3].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[3].name}
                  </p>
                  <p className="portfolio_intro">{state.score[3].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/4">View More</Link></button>
              </div>
            </label>
            <label for="s5" id="portfolio-slide5">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[4].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[4].name}
                  </p>
                  <p className="portfolio_intro">{state.score[4].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/5">View More</Link></button>
              </div>
            </label>
            <label for="s6" id="portfolio-slide6">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[5].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[5].name}
                  </p>
                  <p className="portfolio_intro">{state.score[5].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/6">View More</Link></button>
              </div>
            </label>
            <label for="s7" id="portfolio-slide7">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[6].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[6].name}
                  </p>
                  <p className="portfolio_intro">{state.score[6].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/7">View More</Link></button>
              </div>
            </label>
            <label for="s8" id="portfolio-slide8">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[7].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[7].name}
                  </p>
                  <p className="portfolio_intro">{state.score[7].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/8">View More</Link></button>
              </div>
            </label>
            <label for="s9" id="portfolio-slide9">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={state.score[8].mainIMG} alt="" />
                </div>
                <div className="portfolio-infos">
                  <p className="portfolio-name">
                    {state.score[8].name}
                  </p>
                  <p className="portfolio_intro">{state.score[8].companyIntro}</p>
                </div>
                <button className="portfolio_btn"><Link to="/main/product/9">View More</Link></button>
              </div>
            </label>
          </div>
        </div>
      </body>
    </div>

  );
};

export default Portfolio;