import React from 'react'
import './categories.css';
import hub from '../../Assets/hub.svg'
import engine from '../../Assets/engine.svg'
import water from '../../Assets/water.svg'
import suspenssion from '../../Assets/suspension.svg'
import engineparts from '../../Assets/engineparts.svg'
import brake from '../../Assets/brake.svg'
import coming from '../../Assets/coming.svg'
import ignition from '../../Assets/ignition.svg'
import drive from '../../Assets/drive.svg'
import Card from './Card';
import { Link } from 'react-router-dom';
import Hubbearing from '../../Pages/categories/hubbearing';



function Categories() {
  return (
    <div className='categories'>
        <div className='ctext'>CATEGORIES</div>
        <div className='items'>
            <Card linkedto={"hubbearing"}  image={hub}  description="HUB BEARING"/>
            <Card linkedto={"engine"}  image={engine} description="ENGINE &TRANS. MOUNTS"/>
            <Card linkedto={"water"} image={water} description="WATER PUMPS"/>
            <Card linkedto={"suspenssion"} image={suspenssion} description="SUSPENSSION PARTS"/>
            <Card linkedto={"brakepads"} image={brake} description="BRAKE PADS & ROTORS"/>
            <Card linkedto={"engineparts"} image={engineparts} description="ENGINE PARTS & GASKETS"/>
            <Card linkedto={"ignition"} image={ignition} description="IGNITION & FUEL MANAGEMENT"/>
            <Card linkedto={"drive"} image={drive} description="DRIVE SAFETY & AXEL"/>
            <Card  image={coming} description="COMING SOON.."/>
        </div>
        
        
    </div>
  )
}

export default Categories;