import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tack för dina svar!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Dina svar har nu sparats och vinnarna kommer kontaktas via mail under
          fredagen. Tack för att du tävlat i kontaktkampen och följ
          kontaktdagarna på facebook för att få se facit till frågorna och mer
          roliga aktiviteter.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Stäng
          </Button>
          <Button
            variant="primary"
            href="https://www.facebook.com/kontaktdagarna"
            onClick={handleClose}
          >
            Följ kontaktdagarna
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
