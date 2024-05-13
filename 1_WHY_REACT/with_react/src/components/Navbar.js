import React from 'react';
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div>    
      <ul>
      <div className="logo">{props.logoText}</div>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
