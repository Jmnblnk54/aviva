import "./catches.css";
import { BsSignStop } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";

const Catches = () => {
  return (
    <div className="catches-container">
      <div className="denied">
        <h3>Was Your Claim Denied?</h3>
        <BsSignStop size={40} />
      </div>
      <div className="new">
        <h3>Filing A New Claim?</h3>
        <IoDocumentsOutline size={40} />
      </div>
      <div className="more">
        <h3>Need More Money From A Claim?</h3>
        <FaHandHoldingUsd size={40} />
      </div>
    </div>
  );
};

export default Catches;
