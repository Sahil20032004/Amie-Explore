import React from 'react';
import './Cataegory.css';
import rest1 from '../images/rest1.png';
import rest2 from '../images/rest2.png';
import coffee1 from '../images/coffee1.png';
import coffee2 from '../images/coffee2.png';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';

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
            </div>
          </div>
        </>
    )

}
export default Cataegory;