import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title : "Hello",
      desc : "I want to do morning exversices!"
    },
    {
      title : "Hey",
      desc : "I want eat as much as possible at morning"
    },
    {
      title : "Hiii",
      desc : "I wanna sleep!!"
    }
  ])

  // const Todo = ({todo}) => {
  //   return ( <>
  //     <div>{todo.title}</div>
  //     <div>{todo.desc}</div></>
  //   )
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}></Todo>
        return <div key={todo.title}>
            <div>{todo.title}</div>
            <div>{todo.desc}</div>
          </div>
      })}
      
      {showbtn ? <button>I will be only shown if showbtn is true</button> : "showbtn is false, make it true by clicking on count!"}
      {/* we can also implement this by this way */}
      {showbtn && <button>I will be only shown if showbtn is true</button>}
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1);
                                setshowbtn(!showbtn)}}>Click to Toggle, times {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
