import { useState } from "react";
import "./main.css";
import Header from "../../components/header/Header";
import Catches from "../../components/catches/Catches";
import Footer from "../../components/footer/Footer";
import backgroundImg from "../../assets/flood1.jpg";
import Bullets from "../../components/bullets/Bullets";
import ContactModal from "../../components/modal/ContactModal";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="hero-container">
          <div className="bullets-section">
            <Bullets {...{ handleModalClose, handleModalOpen }} />
          </div>
        </div>
        <div className="catches-section">
          <Catches />
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
      <ContactModal {...{ modalOpen, handleModalClose, handleModalOpen }} />
    </>
  );
};

export default Main;
