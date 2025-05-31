import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductModal = ({show, onClose, onSubmit, title, submitTitle,children}) => {
  return (
    <div>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            {submitTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductModal;