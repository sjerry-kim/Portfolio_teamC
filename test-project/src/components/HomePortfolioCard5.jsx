import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard5 = () => {
    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/idasMain.JPG")} />
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>Evian</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };

export default HomePortfolioCard5;
