import React from "react";
import Modal from "react-bootstrap/Modal";
import FormLayout from "../formLayout/FormLayout";

const ModalContainer = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton className="bg-green-100 text-green-600">
        Lets learn , share inspired each other with our passion for computer
        engineering, Sign up now
      </Modal.Header>
      <Modal.Body>
        <FormLayout />
      </Modal.Body>
    </Modal>
  );
};

export default ModalContainer;
