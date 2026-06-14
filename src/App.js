import './App.css';
import Navbar from "./Components/header/navbar";
import Main from"./Components/main/Main";
import Aboutus from "./Components/Aboutus/aboutus";
import Gameplay from "./Components/Gameplay/gameplay";
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    const [isChecked, setIsChecked] = useState(false);
  const [className, setClassName] = useState('App area');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setClassName(isChecked ? 'App area' : 'new-class');
  };
  
  return (

        <div className= {className}>
      <label id='s' className="switch">
          <input id="check" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className="slider round"></span>
      </label>
      <ul class="circles">
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<><Navbar/>
          <Main/></>}/>
          <Route path='/Aboutus' element={<Aboutus />}/>
          <Route path='/Gameplay' element={<Gameplay/>}/>
        </Routes>
      </BrowserRouter>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      
    </div>

  );
}

export default App;
