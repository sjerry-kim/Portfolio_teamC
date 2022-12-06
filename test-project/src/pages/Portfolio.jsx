import { } from "../css/ProductSlider.css";

const Slider = () => {


  const sliderData = [
    { labelNum: "s1", sliderNum: "slider1", title: "업체1", desc: "설명1", img: "house01.jpg" },
    { labelNum: "s2", sliderNum: "slider2", title: "업체2", desc: "설명2", img: "house02.jpg" },
    { labelNum: "s3", sliderNum: "slider3", title: "업체3", desc: "설명3", img: "house03.jpg" },
    { labelNum: "s4", sliderNum: "slider4", title: "업체4", desc: "설명4", img: "house04.jpg" },
    { labelNum: "s5", sliderNum: "slider5", title: "업체5", desc: "설명5", img: "house05.jpg" },
    { labelNum: "s6", sliderNum: "slider6", title: "업체6", desc: "설명6", img: "house06.jpg" },
    { labelNum: "s7", sliderNum: "slider7", title: "업체7", desc: "설명7", img: "house07.jpg" }
  ];

  return (
    <div>
      <div style={{ width: "100%", height: "150px", backgroundColor: "yellow" }}></div>
      <di className="slider-body">
        <div className="slider-container">
          <input type="radio" name="slider" className="d-none" id="s1" />
          <input type="radio" name="slider" className="d-none" id="s2" />
          <input type="radio" name="slider" className="d-none" id="s3" />
          <input type="radio" name="slider" className="d-none" id="s4" />
          <input type="radio" name="slider" className="d-none" id="s5" />
          <input type="radio" name="slider" className="d-none" id="s6" />
          <input type="radio" name="slider" className="d-none" id="s7" />
          <div className="slider-cards">
            {sliderData.map((sliderData, index) => {
              <label key={index} for={sliderData.labelNum} id={sliderData.sliderNum}>
                <div className="slider-card">
                  <div className="slider-image">
                    <img src={require(`../img/${sliderData.img}`)} />
                  </div>
                  <div className="slider-infos">
                    <span>{sliderData.title}</span>
                    <span>{sliderData.desc}</span>
                  </div>
                </div>
              </label>
            })}
          </div>
        </div>
      </di>
    </div>


  )
};

export default Slider;
