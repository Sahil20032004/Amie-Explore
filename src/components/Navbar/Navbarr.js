import React from 'react';
import Logo from '../images/Logo.png';
import './Navbar.css';



function Navbarr(){
  return(
    <>
    <div className='flex'>
      <div className="logo">
      <img src={Logo} alt="" width="110" height="85" className='logo'/>
    </div>
    <nav>
      <ul className="list">
        <li>For Business</li>
        <li>Contact Us</li>
       <li><button type="submit" className="outline">Login</button></li>
       <li><button className="signup">Sign Up</button></li>
     </ul>
     </nav>
    </div>
    <hr />
    </>
  )
}
export default Navbarr;