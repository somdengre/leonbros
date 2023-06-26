import React from 'react'
import logo from "../../Assets/logored.svg";
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='logo'><img src={logo}/></div>
        <div className='navigation'>
            <div className='head'>Navigation</div>
            <div className='text'>Home</div>
            <div className='text'>About Us</div>
            <div className='text'>Login</div>
        </div>
        <div className='contact'>
            <div className='con'>
                <div className='head'>Contact</div>
                <div className='text'>support@leon&bros.inc@leon&bros</div>
                
            </div>
            <div className='other'>
                <div className=''>Quizz </div>
            </div>
        </div>
        <div className='blog'>
            <div className='head'>Blog</div>
            <div className='text'>What is Leon&bros</div>
            <div className='text'>What is Leon&bros</div>
            <div className='text'>What is Leon&bros</div>
        </div>
    </div>
  )
}

export default Footer