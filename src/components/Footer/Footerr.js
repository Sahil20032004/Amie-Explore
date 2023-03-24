import React from 'react';
import './footer.css';
import Logo from '../images/Logo.png';
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footerr(){
    return(
        <>
        <div className='flex'>
        <ul className='footer'>
        <li className='footer-item'><button className="contact">Contact Us</button></li>
        <li className='footer-item'>About Us</li>
        <li className='footer-item'>Community</li>
        <li className='footer-item'>Careers</li>
        <li className='footer-item'>Terms of Services</li>
        <li className='footer-item'>Privacy Policy</li>
       </ul>
       <div className='logos'>
        <img src={Logo} alt='logo' />

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
export default Footerr;