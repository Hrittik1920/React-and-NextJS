import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import User from './Components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>
    },
    {
      path: "/contactus",
      element: <><Navbar/><ContactUs /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User /></>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
