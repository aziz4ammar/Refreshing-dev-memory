import React from 'react'
import Navbar from "../header/navbar";
import mlog from "../img/logo copie5 copie3.png";
import aziz from "../img/aziz intro.png";
import jihed from "../img/jij intro.png";


const aboutus = () => {
  return (
<div className='big-container-aboutus'>
        <Navbar/>
        <img id='mi' src={mlog} alt="" />
        <div id='aboutus-container'>
            <div id='aziz' className='rainbow'>
                {/* <img className='intro' src={aziz} alt="" /> */}
            </div>
            <div className='rainbow'>
                {/* <img className='intro' id='jiji' src={jihed} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default aboutus
