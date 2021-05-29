import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  const [user, setUser] = useState([])

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    setUser(await response.json())
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div class="container">
        <h2>Users</h2>
        <div class="row text-center p-2">
          {user.map((usrElement) => {
            return (
              <>
                <div class="col-sm-4">
                  {' '}
                  <div class="card">
                    <span>{usrElement.id}</span>
                    <div class="card-header">Name:{usrElement.name}</div>
                    <div class="card-body">Email:{usrElement.email}</div>
                    <div class="card-footer">Phone:{usrElement.phone}</div>
                    <Link to={'/userdetails/' + usrElement.id}>
                      <button className="btn btn-danger">View details</button>{' '}
                    </Link>
                  </div>
                  <br />
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Users
