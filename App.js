import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Cataegory from './components/Cataegories/Cataegory'
import './App.css';
import background from '../src/components/images/bgimage.png';
import { BsSearch } from "react-icons/bs";
import Recent from './components/Recent Activities/Recent.js';
const App = () => (
  <div className="app">
   <div className='background' style={{ backgroundImage: `url(${background})` }}>
    <div className="navbar">
      <Navbar />
    </div>
    <div className='explore'>Let's Explore Nearby</div>
    <div className="search_wrap search_wrap_3">
    <input type='text' className='restaurant' placeholder="Restaurant,Shoe Shop....." />
			<div className="search_box">
				<input type="text" className="input" placeholder="Location...." />
				<div class="btn btn_common">
					<BsSearch className='fas' />
				</div>
			</div>
		</div>
    </div>
    <Recent/>
    <Footer />
  </div>
);

export default App;