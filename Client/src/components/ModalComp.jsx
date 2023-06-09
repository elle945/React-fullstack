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

       <button className='postButton3'  onClick={handleShow}>
        Läs mer
      </button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props1.firstname} {props1.lastname}</Modal.Title>
          </Modal.Header>

        <Modal.Body>{props1.about} <br></br><br></br><a href={props1.git_url} target="_blank" rel="noopener noreferrer">{props1.git_url}</a> </Modal.Body>

        <Modal.Footer>
          <button className='postButton' onClick={handleClose}>
            Stäng
          </button>


        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ModalComp;
