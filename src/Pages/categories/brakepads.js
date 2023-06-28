import React from 'react'
import Catitems from '../../components/basic/catitems'
import Searchbar from '../../components/basic/searchbar'
import Footer from '../../components/basic/footer'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import cat5 from '../../Assets/categories/cat5.svg'
function Brakepads() {
  return (
    <div>
      <div>
        <Header/>

        </div>
        <div>
        <Navbar/>

        </div>
        <div className='ccon'>
            <div className='ct'>
              <div className='chead'>BRAKE PADS & ROTORS</div>
              <div className='des'>Formulations optimized for safety, quiet, clean and great valueForm, Fit & Function that meet or exceed OE designs100% North American Manufactured
              </div>
              {/* <div className='lists'>
                <ul>
                  <li>Unitized seals for exceptional protection against leakage and contamination</li>
                  <li>Durable housings that feature precisely machined mounting surfaces for proper sealing</li>
                  
                </ul>
              </div> */}
            </div>
            <div className='cim'>
            <img className="cimage" src={cat5} alt="engine & trans. mounts" />
            </div>
        </div>
        <div className='line'></div>

        <div><Catitems/></div>

        <div><Searchbar/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Brakepads