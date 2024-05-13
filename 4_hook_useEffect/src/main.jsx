import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// We are using <React.StrictMode> tag which run program TWO times in it's FIRST RELOAD to check it in development phase,
// in production phase we generaly remove this tag so it will run directly in one go.

// when it's RELOAD ON ALREADY RUNNING PROGRAM then it will ONLY RUN ONE TIME like usual.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
