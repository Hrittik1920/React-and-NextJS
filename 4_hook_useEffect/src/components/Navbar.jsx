import React, {useEffect} from 'react'

const Navbar = (props) => {
  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey! I will run on every render.")
  })

  // Case 2: Run only on first render
  useEffect(() => {
    alert("Welcome to the page. This is the first render.")
  }, [])

  // Case 3: Run only when certain value change
  useEffect(() => {
    alert("Color got changed in Navbar")
  }, [props.color])


  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to the page. This is the first render of app.jsx");
    return () => {
      alert("Component was unmounted")
    }
  })

  return (
    <div>
      I am navbar of {props.color} color hehe..
    </div>
  )
}

export default Navbar
