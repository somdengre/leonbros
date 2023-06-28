import React from 'react'
import Catitems from '../../components/basic/catitems'
import Searchbar from '../../components/basic/searchbar'
import Footer from '../../components/basic/footer'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import cat3 from '../../Assets/categories/cat3.svg'
function Water() {
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
              <div className='chead'>WATER PUMPS</div>
              <div className='des'>You can count on superior performance from AGQO new water pumps. Each pump is engineered to keep your engine cooling system in premium running condition and deliver maximum coolant flow and durability just like its OE counterpart.
              </div>
              <div className='lists'>
                <ul>
                  <li>Unitized seals for exceptional protection against leakage and contamination</li>
                  <li>Durable housings that feature precisely machined mounting surfaces for proper sealing</li>
                  
                </ul>
              </div>
            </div>
            <div className='cim'>
            <img className="cimage" src={cat3} alt="engine & trans. mounts" />
            </div>
        </div>
        <div className='line'></div>

        <div><Catitems/></div>

        <div><Searchbar/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Water