import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
import background from '../src/components/images/bgimage.png';
import { BsSearch } from "react-icons/bs";

const App = () => (
  <div className="app">
   <div className='background' style={{ backgroundImage: `url(${background})` }}>
    <div className="navbar">
      <Navbar />
    </div>
    <div className='explore'>Let's Explore Nearby</div>
    <div className="search_wrap search_wrap_3">
			<div className="search_box">
				<input type="text" className="input" placeholder="Restaurant,Shoe Shop" />
        {/* <input type="text" class="input" placeholder="search..." /> */}
				<div class="btn btn_common">
					<BsSearch className='fas' />
				</div>
			</div>
		</div>
    </div>
    <Footer />
  </div>
);

export default App;