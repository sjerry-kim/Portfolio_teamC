import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard1 = () => {
    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/agioMain.JPG")}/>
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>Puren</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };


export default HomePortfolioCard1;
