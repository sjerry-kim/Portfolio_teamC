import { Link } from "react-router-dom";
import {} from "../css/Portfolio.css";

const Portfolio = () => {
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
                  <span className="portfolio-name">1번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum dolor sit amet, sit amet adipiscing elit. Aenean
                    vel ansd . Nullam lorem. Nulla eu sodales
                  </span>

                  <button>
                    <Link to="/product">product</Link>
                  </button>
                </div>
              </div>
            </label>

            <label for="s2" id="portfolio-slide2">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Free run flyknit.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">2번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum dolor sit, adipiscing elit. Aenean vel sit ansd
                    . Nullam lorem. Nulla eu sodales karma stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s3" id="portfolio-slide3">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Black Toe Union.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">3번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum dolor, sit amet let kar adipiscing. Aenean vel
                    velit sit ansd . Nullam lorem. Nulla karma stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s4" id="portfolio-slide4">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Retro High Og.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">4번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum dolor sit, sit amet elit. Aenean sit amet sit
                    amet vel velit sit ansd. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s5" id="portfolio-slide5">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">5번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                    Nullam lorem. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s6" id="portfolio-slide6">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">6번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                    Nullam lorem. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s7" id="portfolio-slide7">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">7번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                    Nullam lorem. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>


            <label for="s8" id="portfolio-slide8">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">새로 추가한 8번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                    Nullam lorem. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s9" id="portfolio-slide9">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="portfolio-infos">
                  <span className="portfolio-name">새로 추가한 9번째 카드</span>
                  <span className="portfolio-lorem">
                    Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                    Nullam lorem. Nulla eu sodales stellus
                  </span>
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