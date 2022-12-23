import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard3 = () => {

    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/dawonMain.JPG")} />
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>Dasole</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };


export default HomePortfolioCard3;
