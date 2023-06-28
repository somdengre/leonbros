import React from 'react'
import Catitems from '../../components/basic/catitems'
import Searchbar from '../../components/basic/searchbar'
import Footer from '../../components/basic/footer'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import cat2 from '../../Assets/categories/cat2.svg'


function Engine() {
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
              <div className='chead'>ENGINE & TRANS.MOUNTS</div>
              <div className='des'>AGQP. mounts are premium products that meet OEM quality standards.
              </div>
              <div className='lists'>
                <ul>
                  <li>Visual / Finish</li>
                  <li>Paint / Rubber Appearance</li>
                  <li>Weld Integrity</li>
                </ul>
              </div>
            </div>
            <div className='cim'>
            <img className="cimage" src={cat2} alt="engine & trans. mounts" />
            </div>
        </div>
        <div className='line'></div>

        <div><Catitems/></div>

        <div><Searchbar/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Engine