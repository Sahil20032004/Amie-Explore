import React, { useState } from 'react';
import './Navbar.css';
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Navbar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <div className='flexs'>
    <nav>
      <ul className="list">
       <div className='tab'>
        <li className='list_item'>For Business</li>
        <li className='list_item' onClick={handleShow}>Contact Us</li>
        </div>
        <div className='buttons'>
        <li className='list_item'>
          <DropdownList
             defaultValue="Location"
             data={["Delhi", "Nainital", "Kashmir", "Mumbai"]}/></li>
       <li className='list_item'><button type="submit" className="outline">Login</button></li>
       <li className='list_item'><button className="signup">Sign Up</button></li>
       </div>
     </ul>
     </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Query</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='modal_button' onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
    <hr />
    </>
  )
}
export default Navbar;