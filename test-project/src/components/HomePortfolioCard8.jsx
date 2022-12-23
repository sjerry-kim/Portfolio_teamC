import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard8 = () => {
    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/oneMain.JPG")} />
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>Mono</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };

export default HomePortfolioCard8;
