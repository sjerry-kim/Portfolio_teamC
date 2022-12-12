import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {} from "../css/Portfolio.css";
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
                  <img src="img/Nike SuperRep Go.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    1 {state.score[0].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[0].name} {/*소개 데이터 추가되면 변경예정*/}
                    여기에 자사 소개가 들어가나요??????????????
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/1">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s2" id="portfolio-slide2">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Free run flyknit.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    2 {state.score[1].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[1].name}{" "}
                    {/*소개 데이터 추가되면 변경예정 / 번호 직접 지정 안하고는 방법이 없을까욤?*/}
                    여기에 자사 소개가 들어가나요??????????????
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/2">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s3" id="portfolio-slide3">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Black Toe Union.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    3 {state.score[2].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[2].name}
                    여기에 자사 소개가 들어가나요??????????????
                    {/*소개 데이터 추가되면 변경예정*/}
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/3">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s4" id="portfolio-slide4">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Retro High Og.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    4 {state.score[3].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[3].name}
                    여기에 자사 소개가 들어가나요??????????????
                    {/*소개 데이터 추가되면 변경예정*/}
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/4">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s5" id="portfolio-slide5">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    5 {state.score[4].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[4].name}
                    여기에 자사 소개가 들어가나요??????????????
                    {/*소개 데이터 추가되면 변경예정*/}
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/5">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s6" id="portfolio-slide6">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    6 {state.score[5].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[5].name}
                    여기에 자사 소개가 들어가나요??????????????
                    {/*소개 데이터 추가되면 변경예정*/}
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/6">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s7" id="portfolio-slide7">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    7 {state.score[6].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[6].name}
                    여기에 자사 소개가 들어가나요??????????????
                    {/*소개 데이터 추가되면 변경예정*/}
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/7">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s8" id="portfolio-slide8">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    8 {state.score[7].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[7].name}
                    여기에 자사 소개가 들어가나요??????????????
                    {/*소개 데이터 추가되면 변경예정*/}
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/8">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>

            <label for="s9" id="portfolio-slide9">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">
                    9 {state.score[8].name}
                  </span>
                  <span className="portfolio-lorem">
                    {state.score[8].name}
                    여기에 자사 소개가 들어가나요??????????????
                    {/*소개 데이터 추가되면 변경예정*/}
                  </span>

                  <button className="portfolio_productPageBtn">
                    <Link to="/main/product/9">상세페이지</Link>
                  </button>
                </div>
              </div>
              <Outlet />
            </label>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Portfolio;