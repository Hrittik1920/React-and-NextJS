import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 font-normal p-3.5 px-10'>
      <h1 className='text-lg font-semibold'>Facebook</h1>
      <div className='flex gap-6'>
        <Link className='hover:font-semibold' href="/">Home</Link>
        <Link className='hover:font-semibold' href="/about">About</Link>
        <Link className='hover:font-semibold' href="/contactus">ContactUs</Link>
      </div>
    </nav>
  )
}

export default Navbar
