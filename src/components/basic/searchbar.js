import React from 'react'
import search from  '../../Assets/Vector.svg'
import './searchbar.css'

function Searchbar() {
  return (
    <div className='searchbar'>
        <div className='input-class'><input className = 'in' type='text' /><div className='search-icon'> <img className='sicon' src={search}/> </div></div> 
    </div>
  )
}

export default Searchbar