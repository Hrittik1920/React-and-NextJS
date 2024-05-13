import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-6 bg-blue-500 font-normal p-4'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contactus">ContactUs</a>
    </nav>
  )
}

export default Navbar
