import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard9 = () => {
    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/purenMain.JPG")} />
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>One</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };

export default HomePortfolioCard9;
