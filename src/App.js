import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import UserDetails from './UserDetails'
import Users from './Users'

export const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/login"  exact component={Login} />
        <Route path="/users"  exact component={Users} />
        <Route path="/userdetails/:id" component={UserDetails} />
       
      </div>
    </Router>
  )
}

export default App
