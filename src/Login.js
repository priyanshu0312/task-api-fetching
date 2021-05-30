import React, { useState, useEffect } from 'react'


import './Login.css'

const Login = ({ Logins, error }) => {
  const [details, setDetails] = useState({ username: '', password: '' })

  const onSubmit = (e) => {
    e.preventDefault()

    if (!details.username) {
      alert('please enter username ')
      return
    }
    if (!details.password) {
      alert('Please enter password ')
      return
    }
    Logins(details)
  }

  return (
    <div className="outerContainerJoin allhead">
      <h1 className="heading">Join Now!</h1>
      <form onSubmit={onSubmit}>
        {error != '' ? <div className="error">{error}</div> : ''}
        <div class="row">
          <input
            placeholder="username"
            className=""
            type="text"
            value={details.username}
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
        </div>
        <br />
        <div class="row">
          <input
            placeholder="Password"
            className=""
            type="text"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>

        <button className="buttons" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default Login
