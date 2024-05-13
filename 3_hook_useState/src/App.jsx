import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  return (
    <>
      <div>The count is {count}</div>
      {/* <button onClick={() => {setCount(count-1)}}>Click me</button> */}
      <button onClick={() => {setCount(count**2)}}>Click me</button>
    </>
  )
}

export default App
