import React from 'react'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import Imageslider from '../../components/home/imageslider'
import Categories from '../../components/home/categories'
import About from '../../components/home/about'
import Searchbar from '../../components/basic/searchbar'
import Footer from '../../components/basic/footer'



function Home() {
  return (
    <div>
        <div><Header/></div>
      <div><Navbar/></div>  
      <div><Imageslider/></div>
      <div><Categories/></div>
      <div><About/></div>
      <div><Searchbar/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Home