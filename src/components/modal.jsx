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
          Dina svar har nu registrerats. Om du blir en av de lyckliga vinnarna,
          så kommer vi att kontakta dig när tävlingen är avslutad. De rätta
          svaren kommer komma upp på kontaktadgarnas facebook-sida så se till
          att följa oss där. Tack för att du deltar i Kontaktkampen!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            href="https://www.facebook.com/kontaktdagarna"
            onClick={handleClose}
          >
            Följ kontaktdagarna
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Stäng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
