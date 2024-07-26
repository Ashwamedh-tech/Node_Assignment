import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './login'
import Register from './Register'

import './index.css'
import { BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom'
import Weather from './Weather.jsx'
import User from './User.jsx'
import SignUp from './signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Weather /> */}
    {/* <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/weather" element={<Weather />} />
        <Route path='/userpage' element={<User />} />
      </Routes>
    </Router> */}
    <SignUp />
  </React.StrictMode>,
)
