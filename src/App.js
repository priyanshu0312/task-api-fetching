import React, { useReducer, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import UserDetails from './UserDetails'
import Users from './Users'

export const App = () => {
  const adminUser = {
    username: 'priyanshu',
    password: 'sinha0312',
  }

  const [users, setUsers] = useState({ name: '', username: '' })
  const [error, setError] = useState('')

  const Logins = (details) => {
    console.log(details)

    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log('Logged In')
      setUsers({
        username: details.username,
        password: details.password,
      })
    } else {
      // alert('Please enter valid username or password')
      console.log('Details do not match!')
      setError("Invalid username or password")
      
    }
  }
  const Logout = () => {
    setUsers({ username: '', password: '' })
  }
  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {users.username != '' ? (
                <>
                  <Users />
                  <div>
                    <button
                      type="button"
                      style={{ position: 'fixed', top: '1%', left: '10%' }}
                      className="btn btn-danger"
                      onClick={Logout}
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <Login Logins={Logins} error={error} />
              )}
            </>
          )}
        />

        <Route path="/userdetails/:id" component={UserDetails} />
      </div>
    </Router>
  )
}

export default App
