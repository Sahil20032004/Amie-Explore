import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Cataegory from './components/Cataegories/Cataegory'
import './App.css';
import background from '../src/components/images/bgimage1.png';
import { BsSearch } from "react-icons/bs";

const App = () => (
  <div className="app">
   <div className='background' style={{ backgroundImage: `url(${background})` }}>
    <div className="navbar">
      <Navbar />
    </div>
    <div className='explore'><h2 className='animate-charcter'>Let's Explore Nearby</h2></div>
    <div className="search_wrap search_wrap_3">
			<div className="search_box">
				<input type="text" className="input" placeholder="Restaurant, Shoe Shops...." />
				<div class="btn btn_common">
					<BsSearch className='fas' />
				</div>
			</div>
		</div>
    </div>
    <Cataegory />
    <Footer />
  </div>
);

export default App;