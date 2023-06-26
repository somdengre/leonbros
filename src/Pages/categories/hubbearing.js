import React from 'react'
import Navbar from '../../components/basic/navbar'
import Header from '../../components/basic/header'
import Footer from '../../components/basic/footer'
import Searchbar from '../../components/basic/searchbar'
import cat1 from '../../Assets/categories/cat1.svg'
import "./hubbearing.css"




import Catitems from '../../components/basic/catitems'

function Hubbearing() {
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
              <div className='chead'>HUB BEARING</div>
              <div className='des'>AGQP hub assemblies are performance-proven and
                    quality-tested. Their application-specific design
                    enhancements provide:
              </div>
              <div className='lists'>
                <ul>
                  <li>Decreased noise and vibration for smooth performance</li>
                  <li>Reduced bearing temperatures, which improves service for life</li>
                  <li>Protection against entry of water and other contaminants, preventing premature failure</li>
                </ul>
              </div>
            </div>
            <div className='cim'>
            <img className="image" src={cat1} alt="hub bearing" />
            </div>
        </div>
        <div className='line'></div>

        <div><Catitems/></div>

        <div><Searchbar/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Hubbearing