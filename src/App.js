import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Cataegory from './components/Cataegories/Cataegory'
import './App.css';
import bgimage1 from '../src/components/images/bgimage1.png';
import bgimage2 from '../src/components/images/bgimage2.jpg';
import bgimage3 from '../src/components/images/bgimage3.jpg';
import { BsSearch } from "react-icons/bs";

const images = [ bgimage1, bgimage2, bgimage3 ];

export default function App() {

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 2 ? 0 : v + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return(
  <div className="app">
   <div className='background' style={{ backgroundImage: `url(${images[value]})` }}>
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

}