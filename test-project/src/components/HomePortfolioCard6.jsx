import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard6 = () => {
    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/jyMain.JPG")} />
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>Idas</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };

export default HomePortfolioCard6;
