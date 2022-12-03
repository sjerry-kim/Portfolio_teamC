import {} from "../css/ProductBestRe.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import house06 from "../img/house06.jpg";
import house04 from "../img/house04.jpg";
import house07 from "../img/house07.jpg";
const ProductBestRe = () => {
  return (
    <div className="Product-bestRe">
      <h1>Best Reviews</h1>
      <ReviewCard></ReviewCard>
    </div>
  );
};

export default ProductBestRe;

function ReviewCard() {
  return (
    <div className="Product-reviewCards">
      <div className="Product-reCard1">
        <Card className="Product-reCards">
          <Card.Img
            variant="top"
            className="Product-card-img-top"
            src={house06}
          />
          <Card.Body>
            <Card.Title>Where does it come from?</Card.Title>
            <Card.Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="Product-reCard2">
        <Card>
          <Card.Img variant="top" src={house07} />
          <Card.Body>
            <Card.Title>Where does it come from?</Card.Title>
            <Card.Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="Product-reCard3">
        <Card>
          <Card.Img variant="top" src={house04} />
          <Card.Body>
            <Card.Title>Where does it come from?</Card.Title>
            <Card.Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Card.Text>
            <Button variant="primary">후기 보러가기</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
