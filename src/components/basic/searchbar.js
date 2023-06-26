import React from 'react'
import search from  '../../Assets/Vector.svg'
import './searchbar.css'

function Searchbar() {
  return (
    <div className='searchbar'>
        <div className='input-class'><input className = 'in' type='text' placeholder='Search by part number'/><div className='search-icon'> <img className='icon' src={search}/> </div></div> 
    </div>
  )
}

export default Searchbar