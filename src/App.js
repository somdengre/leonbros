import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import ImageSlider from './components/imageslider';
import Header from './components/header';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <div><Header/></div>
      <div><Navbar/></div>  
      <div><ImageSlider/></div>
      <div><Categories/></div>
      {/* <div><ImageSlider/></div>   */}
      
      
    </div>
  );
}

export default App;
