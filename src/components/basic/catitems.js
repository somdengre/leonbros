import React from 'react'
import Item from '../../components/basic/item'
import item1 from '../../Assets/hubbearing_items/item1.svg'
import item2 from '../../Assets/hubbearing_items/item2.svg'
import item3 from '../../Assets/hubbearing_items/item3.svg'
import item4 from '../../Assets/hubbearing_items/item4.svg'
import './catitems.css';
function Catitems() {
  return (
    <div>
        <div className='citems'>
          <Item image = {item1} iname = 'Quick Steer (K6395)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(36,177)' price = '$3.20'></Item>
          <Item image = {item2} iname = 'MOOG (K202029)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$7.39'></Item>
          <Item image = {item3} iname = 'MOOG (K80833)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$52.79'></Item>
          <Item image = {item4} iname = 'MOOG (K80834)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(40,128)' price = '$53.79'></Item>
          
        </div>
        <div className='citems'>
          <Item image = {item1} iname = 'Quick Steer (K6395)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(36,177)' price = '$3.20'></Item>
          <Item image = {item2} iname = 'MOOG (K202029)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$7.39'></Item>
          <Item image = {item3} iname = 'MOOG (K80833)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$52.79'></Item>
          <Item image = {item4} iname = 'MOOG (K80834)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(40,128)' price = '$53.79'></Item>
          
        </div>
        <div className='citems'>
          <Item image = {item1} iname = 'Quick Steer (K6395)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(36,177)' price = '$3.20'></Item>
          <Item image = {item2} iname = 'MOOG (K202029)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$7.39'></Item>
          <Item image = {item3} iname = 'MOOG (K80833)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$52.79'></Item>
          <Item image = {item4} iname = 'MOOG (K80834)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(40,128)' price = '$53.79'></Item>
          
        </div>
        <div className='citems'>
          <Item image = {item1} iname = 'Quick Steer (K6395)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(36,177)' price = '$3.20'></Item>
          <Item image = {item2} iname = 'MOOG (K202029)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$7.39'></Item>
          <Item image = {item3} iname = 'MOOG (K80833)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(70,199)' price = '$52.79'></Item>
          <Item image = {item4} iname = 'MOOG (K80834)' ides = 'Control Arm Bushing' irat = '4.5' inum = '(40,128)' price = '$53.79'></Item>
          
        </div>

        <div><button className='catbtn'>Load More</button></div>
    </div>
  )
}

export default Catitems