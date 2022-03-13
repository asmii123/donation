// import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
// import Form from "./Form.js"

export default function Main() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    return (
        <div>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      <div className="main--body">
       <img src="./images/chairty.png"
            height='450'
            widht='500'
            className="main--image" />
        <main className="main--title">
            <h2>Join Us</h2>
            <h3>To Make a Difference!</h3>  
             <button
        className="form--button"
        onClick={handleShow}
   
        >
        Donate
        </button>
        </main>
             </div>
       
       </div>    
   
      
    )
}