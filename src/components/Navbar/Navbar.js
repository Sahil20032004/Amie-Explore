import React from 'react';
import './Navbar.css';
import Location from '../Location/Location';

function Navbar(){

  return(
    <>
    <div className='flexs'>
    <nav>
      <ul className="list buttons">
       <li className='list_item'><button type="submit" className="signup">Login</button></li>
       <li className='list_item'><button className="signup">Sign Up</button></li>
       <li>
        <Location />
          </li>
     </ul>
     </nav>
    </div>
    <hr />
    </>
  )
}
export default Navbar;