import React from 'react';
import './Cataegory.css';
import rest1 from '../images/rest1.png';
import rest2 from '../images/rest2.png';
import coffee1 from '../images/coffee1.png';
import coffee2 from '../images/coffee2.png';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import art1 from '../images/art1.png';
import art2 from '../images/art2.png';
import local1 from '../images/local1.png';
import local2 from '../images/local2.png';
import hotels1 from '../images/hotels1.png';
import hotels2 from '../images/hotels2.png';
import Recent from '../Recent Activities/Recent';

function Cataegory(){
    return(
        <>
          <div className='cataegory'>
            <div className='text'>
                <h2>Cataegories</h2>
            </div>
            <div className='cardsimg'>
             <div className='restaurant'>
              <img src={rest1} alt='Restaurant' className='beforehover'/>
              <img src={rest2} alt='Restaurant' className='afterhover'/>
             </div> 
             <div className='restaurant'>
              <img src={coffee1} alt='coffee' className='beforehover'/>
              <img src={coffee2} alt='coffee' className='afterhover'/>
             </div>
             <div className='restaurant'>
              <img src={home1} alt='home' className='beforehover'/>
              <img src={home2} alt='home' className='afterhover'/>
             </div>
             <div className='restaurant'>
              <img src={art1} alt='arts' className='beforehover'/>
              <img src={art2} alt='arts' className='afterhover'/>
             </div>
             <div className='restaurant'>
              <img src={local1} alt='local' className='beforehover'/>
              <img src={local2} alt='local' className='afterhover'/>
             </div>
             <div className='restaurant'>
              <img src={hotels1} alt='hotel' className='beforehover'/>
              <img src={hotels2} alt='hotel' className='afterhover'/>
             </div>
            </div>
            <Recent />
          </div>
        </>
    )

}
export default Cataegory;