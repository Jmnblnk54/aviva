import { useState } from "react";
import "./main.css";
import Header from "../../components/header/Header";
import Catches from "../../components/catches/Catches";
import Footer from "../../components/footer/Footer";
import backgroundImg from "../../assets/flood1.jpg";
import ContactForm from "../../components/contactForm/ContactForm";

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div className="main-container">
      <Header />
      <div className="hero-container">
        <div className="background-img-container">
          <img
            src={backgroundImg}
            alt="flood waters from hurricane"
            className="background-img"
          />
        </div>

        <div className="headline">
          <h3>HURRICANE IDALIA DAMAGE</h3>
        </div>
        <div className="form-section">
          <ContactForm />
        </div>
      </div>
      <div className="catches-section">
        <Catches />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
