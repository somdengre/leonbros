import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import ImageSlider from './components/imageslider';
import Header from './components/header';
import Categories from './components/categories';
import About from './components/about';
import Searchbar from './components/searchbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div><Header/></div>
      <div><Navbar/></div>  
      <div><ImageSlider/></div>
      <div><Categories/></div>
      <div><About/></div>
      <div><Searchbar/></div>
      <div><Footer/></div>
      {/* <div><ImageSlider/></div>   */}
    </div>
  );
}

export default App;
