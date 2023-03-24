import React from 'react';
import Logo from '../images/Logo.png';
import './Navbar.css';

function Navbar(){
  return(
    <>
    <div className='flexs'>
      <div className="logo">
      <img src={Logo} alt="" width="110" height="85" className='logo'/>
    </div>
    <nav>
      <ul className="list">
        <li className='list_item'>For Business</li>
        <li className='list_item'>Contact Us</li>
       <li className='list_item'><button type="submit" className="outline">Login</button></li>
       <li className='list_item'><button className="signup">Sign Up</button></li>
     </ul>
     </nav>
    </div>
    <hr />
    </>
  )
}
export default Navbar;