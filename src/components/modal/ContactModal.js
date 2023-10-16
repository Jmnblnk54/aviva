import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactForm from "../contactForm/ContactForm";

const ContactModal = ({ modalOpen, handleModalClose, handleModalOpen }) => {
  return (
    <>
      <Modal show={modalOpen} onHide={handleModalClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>I am a ...</Modal.Title> */}
        </Modal.Header>
        <ContactForm />
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactModal;
