import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("Hrittik");
  // const handleChange = (e) => {
  //   setName(e.target.value);
  // }
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    // setting values for form
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  const handleClick = () => {
    alert("Hey I am clicked!")
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div onMouseEnter={() => console.log("Mouse enter hua hai!")} className="red">
        I am a div whose background color is red!
      </div>
      {/* <input type="text" value={name} onChange={handleChange}/> */}

      <input type="text" name='email' value={form.email ? form.email : ""} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone ? form.phone : ""} onChange={handleChange}/>
    </>
  )
}

export default App
