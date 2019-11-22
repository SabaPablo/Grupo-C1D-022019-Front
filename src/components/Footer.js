import React from "react";
import logo from "../assets/12Cactus.png"

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <div className="" />
      <img src={logo} style={{height :'80px'}} alt={'12Cactus'}/>
    <p>
      Powered by #12Cactus
    </p>
    <p>
      Sponsored by <a href="https://unquipedia.com.ar">Unquipedia</a>
    </p>
  </footer>
);

export default Footer;
