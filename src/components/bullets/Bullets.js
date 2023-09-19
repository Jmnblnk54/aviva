import { bulletArray } from "../../constants";
import "./bullets.css";
import { Row, Col } from "react-bootstrap";
import { FaWind } from "react-icons/fa";

const Bullets = ({ handleModalClose, handleModalOpen }) => {
  return (
    <div className="bullets-container">
      <div className="title">
        <h1>HURRICANE IDALIA DAMAGE</h1>
      </div>
      <div className="bullet-points">
        {bulletArray.map((bullet, idx) => (
          <Row key={idx}>
            <Col sm={2}>
              <FaWind />
            </Col>
            <Col sm={10}>
              <h3>{bullet}</h3>
            </Col>
          </Row>
        ))}
        <Row>
          <button onClick={handleModalOpen} className="modal-button">
            I NEED TO PLACE A HURRICANE IDALIA CLAIM
          </button>
        </Row>
      </div>
    </div>
  );
};

export default Bullets;
