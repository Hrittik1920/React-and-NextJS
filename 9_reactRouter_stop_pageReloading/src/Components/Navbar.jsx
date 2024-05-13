import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/contactUs"><li>ContactUs</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
