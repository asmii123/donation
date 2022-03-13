// import React from "react"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
// import Form from "./Form.js"

export default function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="donate--header">Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>We're grateful for your contribution!</Modal.Body>
        <Form>
          <Form.Group className="form--amount" controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="amount" placeholder="Enter amount to donate" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          
          <Form.Group className="from--check" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to donate" />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Donate
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="main--body">
        <img
          src="./images/chairty.png"
          height="700"
          widht="1600"
          className="main--image"
        />
        <main className="main--title">
          <h2>Join Us</h2>
          <h3>To Make a Difference!</h3>
          <button className="form--button" onClick={handleShow}>
            Donate
          </button>
        </main>
      </div>
    </div>
  );
}
