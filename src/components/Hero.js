import React from "react";

import logo from "../assets/12Cactus.png";
import background from "../assets/background.jpg"


const Hero = () => (


    <div className='background-image text-center my-5' style ={ { backgroundImage: "url("+background+")" } }>
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-3" style ={ { color: "aqua"} }>Viandas Ya</h1>

  </div>
);

export default Hero;
