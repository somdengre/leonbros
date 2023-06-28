import React from 'react'
import Navbar from '../../components/basic/navbar'
import Header from '../../components/basic/header'
import Footer from '../../components/basic/footer'
import Searchbar from '../../components/basic/searchbar'
import cat7 from '../../Assets/categories/cat7.svg'
import "./hubbearing.css"




import Catitems from '../../components/basic/catitems'

function Ignition() {
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
              <div className='chead'>IGNITION & FUEL MANAGEMENT</div>
              <div className='des'>AGQP. coils are engineered and design to be an aftermarket replacement and lower cost alternative to OEM coils. Products are designed to meet or exceed factory OEM specifications.
              </div>
              <div className='lists'>
                <ul>
                  <li>100% brand new and built to meet or exceed O.E. Specification.</li>
                  <li>Neoprene boots pre-installed.</li>
                  {/* <li>Protection against entry of water and other contaminants, preventing premature failure</li> */}
                </ul>
              </div>
            </div>
            <div className='cim'>
            <img className="cimage" src={cat7} alt="hub bearing" />
            </div>
        </div>
        <div className='line'></div>

        <div><Catitems/></div>

        <div><Searchbar/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Ignition