import React from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";

// import db from "./firebase";

export default function Navbar() {
  const [details, setDetails] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = async (event) => {
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

    const q = query(collection(db, "donationDetails"));

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {;
      data.push(doc.data());
    });
    setDetails(data);
    handleShow();
  };
  
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }


  return (
    <nav>
      <h3 className="nav--logo_text">Donate For A Cause!</h3>
      <button className="nav--title" onClick={handleClick}>
        View Donations
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="donate--header" closeButton>
          <Modal.Title>DonationDetails</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model--style">
          
      {details && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Time
                  <button className="table--button">Sort ⬆️</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {details.map((i) => (
              <tr>
                <td>{i.name}</td>
                <td>{i.amount}</td>
                <td>{i.currency}</td>
                <td>{timeConverter(i.timestamp)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    
        </Modal.Body>
        </Modal>

    </nav>
  );
}
