import { bulletArray } from "../../constants";
import "./bullets.css";
import { Row, Col } from "react-bootstrap";

const Bullets = () => {
  return (
    <div className="bullets-container">
      <div className="title">
        <h1>HURRICANE IDALIA DAMAGE</h1>
      </div>
      <div className="bullet-points">
        {bulletArray.map((bullet, idx) => (
          <Row key={idx}>
            <Col sm={2}>●</Col>
            <Col sm={10}>
              <h3>{bullet}</h3>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Bullets;
