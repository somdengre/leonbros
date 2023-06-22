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
import Card from './Card';






function Categories() {
  return (
    <div className='categories'>
        <div className='ctext'>CATEGORIES</div>
        <div className='items'>
            <Card image={hub} description="HUB BEARING"/>
            <Card image={engine} description="ENGINE &TRANS. MOUNTS"/>
            <Card image={water} description="WATER PUMPS"/>
        </div>
        <div className='items'>
            <Card image={suspenssion} description="SUSPENSSION PARTS"/>
            <Card image={brake} description="BRAKE PADS & ROTORS"/>
            <Card image={engineparts} description="ENGINE PARTS & GASKETS"/>  
        </div>
        <div className='items'>
            <Card image={ignition} description="IGNITION & FUEL MANAGEMENT"/>
            <Card image={drive} description="DRIVE SAFETY & AXEL"/>
            <Card image={coming} description="COMING SOON.."/>
        </div>
        
    </div>
  )
}

export default Categories;