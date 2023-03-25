import React, { useState } from 'react';
import './footer.css';
import Logo from '../images/Logo.png';
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Footer(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <div className='flex'>
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
        <div>
        <ul className='footer'>
        <li className='footer-item'><button className="contact" onClick={handleShow}>Contact Us</button></li>
        <li className='footer-item'>About Us</li>
        <li className='footer-item'>For Business</li>
        <li className='footer-item'>Careers</li>
        <li className='footer-item'>Terms of Services</li>
        <li className='footer-item'>Privacy Policy</li>
       </ul>
       <h6 className='ltd'>© 2022 AmieExplore Ltd</h6>
       <ul className='setting_item'>
        <li><h6>Legal Information</h6></li>
        <li><h6>Setting</h6></li>
       </ul>
       </div>
       <div className='logos'>
        <img src={Logo} alt='logo' height='130' width='164' />

        <div className='social-logo'>
        <h6>Follow Us:</h6>
        <BsInstagram size={30} style={{ fill:'#ED056B'}} />
        <BsTwitter size={30} style={{ fill:'#1DA1F2'}} />
        <BsLinkedin size={30} style={{ fill:'#0072b1'}}/>
        </div>
       </div>
            
        </div>
        </>
    )
}
export default Footer;