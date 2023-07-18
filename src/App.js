import React from 'react';
import './App.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/home';
import Hubbearing from './Pages/categories/hubbearing';
import Engine from './Pages/categories/engine';
import Water from './Pages/categories/water';
import Suspenssion from './Pages/categories/suspenssion';
import Brakepads from './Pages/categories/brakepads';
import Engineparts from './Pages/categories/engineparts';
import Ignition from './Pages/categories/ignition';
import Drive from './Pages/categories/drive';
// import Pq from './test/Pq';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/hubbearing" element={<Hubbearing/>}/>
        <Route path="/engine" element={<Engine/>}/>
        <Route path="/water" element={<Water/>}/>
        <Route path="/suspenssion" element={<Suspenssion/>}/>
        <Route path="/brakepads" element={<Brakepads/>}/>
        <Route path="/engineparts" element={<Engineparts/>}/>
        <Route path="/ignition" element={<Ignition/>}/>
        <Route path="/drive" element={<Drive/>}/>
        {/* <Route path="/navbar" element={<Pq/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
