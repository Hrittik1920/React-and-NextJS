import React, { memo } from 'react'

const Navbar = ({adjective, changeAdjective}) => {
    console.log("Navbar is rendering...")
  return (
    <div>
      I am a {adjective} navbar
      <button onClick={() => {changeAdjective()}}>{changeAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
