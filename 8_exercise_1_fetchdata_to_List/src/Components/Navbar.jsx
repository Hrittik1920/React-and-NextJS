import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>{props.title}</li>
        <li>Home</li>
        <li>About</li>
        <li>ContactUs</li>
      </ul>
    </div>
  )
}

export default Navbar
