// import React from "react"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
// import Form from "./Form.js"

export default function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="donate--header" closeButton>
          <Modal.Title>Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model--style">
          We're grateful for your contribution!
        </Modal.Body>
        <Dropdown>
        <DropdownButton className="dropdown-button" id="dropdown-basic-button" variant="dark" title="Choose your currency">
          <Dropdown.Item>NPR</Dropdown.Item>
          <Dropdown.Item>USD</Dropdown.Item>
          <Dropdown.Item>EUR</Dropdown.Item>
        </DropdownButton>
        </Dropdown>
        <Form>
          <Form.Group className="form--amount" controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="amount" placeholder="Enter amount to donate" />
          </Form.Group>

          <Form.Group className="form--check" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirm" />
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
          <h1>Join Us</h1>
          <h3>To Make a Difference!</h3>
          <button className="form--button" onClick={handleShow}>
            Donate
          </button>
        </main>
      </div>
    </div>
  );
}
