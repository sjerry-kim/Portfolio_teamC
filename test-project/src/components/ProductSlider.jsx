import {} from "../css/ProductSlider.css";

const Slider = () => {
  return (
    <div>
      <div
        style={{ width: "100%", height: "150px", backgroundColor: "yellow" }}
      ></div>
      <body className="slider-body">
        <div className="slider-container">
          <input type="radio" name="slider" className="d-none" id="s1" />
          <input type="radio" name="slider" className="d-none" id="s2" />
          <input type="radio" name="slider" className="d-none" id="s3" />
          <input type="radio" name="slider" className="d-none" id="s4" />
          <input type="radio" name="slider" className="d-none" id="s5" />
          <input type="radio" name="slider" className="d-none" id="s6" />
          <input type="radio" name="slider" className="d-none" id="s7" />

          <div className="slider-cards">
            <label for="s1" id="slide1">
              <div className="slider-card">
                <div className="slider-image">
                  <img src="img/Nike SuperRep Go.jpg" alt="" />
                </div>
                <div className="slider-infos">
                  <span className="slider-name">Nike SuperRep Go</span>
                  <span className="slider-lorem">
                    Lorem ipsum dolor sit amet, sit amet adipiscing elit. Aenean
                    vel ansd . Nullam lorem. Nulla eu sodales
                  </span>
                </div>
              </div>
            </label>

            <label for="s2" id="slide2">
              <div className="slider-card">
                <div className="slider-image">
                  <img src="img/Free run flyknit.jpg" alt="" />
                </div>
                <div className="slider-infos">
                  <span className="slider-name">Free Run Flyknit</span>
                  <span className="slider-lorem">
                    Lorem ipsum dolor sit, adipiscing elit. Aenean vel sit ansd
                    . Nullam lorem. Nulla eu sodales karma stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s3" id="slide3">
              <div className="slider-card">
                <div className="slider-image">
                  <img src="img/Black Toe Union.jpg" alt="" />
                </div>
                <div className="slider-infos">
                  <span className="slider-name">Black Toe Union</span>
                  <span className="slider-lorem">
                    Lorem ipsum dolor, sit amet let kar adipiscing. Aenean vel
                    velit sit ansd . Nullam lorem. Nulla karma stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s4" id="slide4">
              <div className="slider-card">
                <div className="slider-image">
                  <img src="img/Retro High Og.jpg" alt="" />
                </div>
                <div className="slider-infos">
                  <span className="slider-name">Retro High Og</span>
                  <span className="slider-lorem">
                    Lorem ipsum dolor sit, sit amet elit. Aenean sit amet sit
                    amet vel velit sit ansd. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s5" id="slide5">
              <div className="slider-card">
                <div className="slider-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="slider-infos">
                  <span className="slider-name">Off-White Air Jordan</span>
                  <span className="slider-lorem">
                    Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                    Nullam lorem. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s6" id="slide6">
              <div className="slider-card">
                <div className="slider-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="slider-infos">
                  <span className="slider-name">새로 추가한 카드1</span>
                  <span className="slider-lorem">
                    Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                    Nullam lorem. Nulla eu sodales stellus
                  </span>
                </div>
              </div>
            </label>

            <label for="s7" id="slide7">
              <div className="slider-card">
                <div className="slider-image">
                  <img src="img/Off-White x Air Jordan.jpg" alt="" />
                </div>
                <div className="slider-infos">
                  <span className="slider-name">새로 추가한 카드2</span>
                  <span className="slider-lorem">
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

export default Slider;
