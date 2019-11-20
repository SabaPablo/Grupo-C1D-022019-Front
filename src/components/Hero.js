import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      TDamian se la come<a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
