import React from 'react';
import Navbarr from './components/Navbar/Navbarr.js';
import Footerr from './components/Footer/Footerr.js';
import './App.css';
import background from '../src/components/images/bgimage.png'

const App = () => (
  <div className="app">
   <div className='background' style={{ backgroundImage: `url(${background})` }}>
    <div className="navbar">
      <Navbarr />
    </div>
    </div>
    <Footerr />
  </div>
);

export default App;