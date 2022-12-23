import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard4 = () => {
    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/evianMain.JPG")}  />
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>Dawon</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };
export default HomePortfolioCard4;
