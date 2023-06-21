import React from 'react'
import './categories.css';
import hub from '../Assets/hub.svg'
import engine from '../Assets/engine.svg'
import water from '../Assets/water.svg'
import suspenssion from '../Assets/suspension.svg'
import engineparts from '../Assets/engineparts.svg'
import brake from '../Assets/brake.svg'
import coming from '../Assets/coming.svg'
import ignition from '../Assets/ignition.svg'
import drive from '../Assets/drive.svg'






function Categories() {
  return (
    <div className='categories'>
        <div className='ctext'>CATEGORIES</div>
        <div className='items'>
            <div className='item'>
                <div><img src={hub}/> </div>
                <div className='t'>HUB BEARING</div>
            </div>
            <div className='item'>
                <div><img src={engine}/></div>
                <div className='t'>ENGINE & TRANS. MOUNTS</div>
            </div>
            <div className='item'>
                <div> <img src={water}/></div>
                <div className='t'>WATER PUMPS</div>
            </div>
            
        </div>
        <div className='items'>
            <div className='item'>
                <div><img src={suspenssion}/> </div>
                <div className='t'>SUSPENSSION PARTS</div>
            </div>
            <div className='item'>
                <div><img src={brake}/></div>
                <div className='t'>BRAKE PADS & ROTORS</div>
            </div>
            <div className='item'>
                <div><img src={engineparts}/> </div>
                <div className='t'>ENGINE PARTS & GASKETS</div>
            </div>
            
        </div>
        <div className='items'>
            <div className='item'>
                <div><img src={ignition}/></div>
                <div className='t'>IGNITION & FUEL MANAGEMENT</div>
            </div>
            <div className='item'>
                <div><img src={drive}/></div>
                <div className='t'>DRIVE SHAFT & AXEL</div>
            </div>
            <div className='item'>
                <div> <img src={coming}/></div>
                <div className='t'>COMING SOON..</div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Categories;