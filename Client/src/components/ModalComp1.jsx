import { useState } from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import WcIcon from '@mui/icons-material/Wc';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PoolIcon from '@mui/icons-material/Pool';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function ModalComp1(props) {
  const [props1, setProps1] = useState(props.item)
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

       <button className="postButton" onClick={handleShow}>
        Läs mer
      </button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props1.location}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
  <div style={{ marginBottom: "10px" }}>
    <LocalParkingIcon />
    Parking: {props1.parking ? <ThumbUpIcon/> : false}
  </div>

  <div style={{ marginBottom: "10px" }}>
    <PoolIcon />
    Swim: {props1.swim ? <ThumbUpIcon /> : false}
  </div>

  <div style={{ marginBottom: "10px" }}>
    <WcIcon />
    Toilets: {props1.utility ? <ThumbUpIcon /> : false}
  </div>
</Modal.Body>

        <Modal.Footer>
          <button className="postButton2" onClick={handleClose}>
            Stäng
          </button>


        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ModalComp1;
