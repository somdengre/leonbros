import React from 'react'
import "./item.css"
import star from '../../Assets/hubbearing_items/star.svg'
function Item(props) {
  return (
    <div className='it'>
        <div className='ii'>
            <img className="iimage" src={props.image} alt="hub bearing" />
        </div>
        <div className='iname'>{props.iname}</div>
        <div className='ides'>{props.ides}</div>
        <div className='irat'>
            <div className='istar'>
                <div className='istars'>{props.irat}</div>
                <div className='star'>
                    <img className="imgstar" src={star} alt="hub bearing" />
                </div>
            </div>
            <div className='inum'>{props.inum}</div>
        </div>
        <div className='iprice'>{props.price}</div>

    </div>
  )
}

export default Item