import { useState } from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComp(props) {
  const [props1, setProps1] = useState(props.item)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

       <Button variant="success" onClick={handleShow}>
        Läs mer
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props1.location}</Modal.Title>
          </Modal.Header>

        <Modal.Body>{props1.description} </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Stäng
          </Button>


        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ModalComp;
