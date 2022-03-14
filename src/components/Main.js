import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function Main() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currency, setCurrency] = useState(null);
  const changeSelectOptionHandler = (event) => {
    setCurrency(event.target.value);
  };

  const [amount, setAmount] = useState(null);
  const changeAmount = (event) => {
    setAmount(event.target.value);
  };
  const [name, setName] = useState("Anonymous");
  const changeName = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const firebaseApp = initializeApp({
      apiKey: "AIzaSyBRVJgbVfvAMF8GtfqIadQwV3jPMQQ0hjc",
      authDomain: "demooooo-f1e7d.firebaseapp.com",
      projectId: "demooooo-f1e7d",
      storageBucket: "demooooo-f1e7d.appspot.com",
      messagingSenderId: "295941954870",
      appId: "1:295941954870:web:0af92bc8a3e757b2c1e797",
      measurementId: "G-VYVHZCSGGR",
    });

    const db = getFirestore();

    const data = {
      name: name,
      amount: amount,
      currency: currency,
      timestamp: Date.now(),
    };
    const docRef = await addDoc(collection(db, "donationDetails"), data);
    console.log("Document written with ID: ", docRef.id);

    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="donate--header" closeButton>
          <Modal.Title>Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model--style">
          We're grateful for your contribution!
        </Modal.Body>

        <Form>
          <Form.Group className="form--name" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={changeName}
              default="Anonymous"
              type="name"
              placeholder="Enter your name (You may donate Anonymously too)"
            />
          </Form.Group>
          <Form.Select
            className="form--currency"
            onChange={changeSelectOptionHandler}
          >
            <option>Choose your currency</option>
            <option>NPR</option>
            <option>USD</option>
            <option>EUR</option>
          </Form.Select>

          <Form.Group
            className="form--amount"
            controlId="formAmount"
            onChange={changeAmount}
          >
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Enter amount to donate" />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
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
