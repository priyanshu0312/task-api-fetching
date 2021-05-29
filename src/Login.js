import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BrowserRouter as router, Route, NavLink } from 'react-router-dom'

import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

     }

  return (
    <div className="outerContainerJoin allhead">
      <h1 className="heading">Join Now!</h1>
      <form onSubmit={onSubmit}>
        <div class="row">
          <input
            placeholder="Name"
            className=""
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="row">
          <input
            placeholder="Room"
            className=""
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
         <Link to="/users"> <button className="buttons" type="submit">
            Sign In
          </button></Link>
      </form>
    </div>
  )
}

export default Login
