import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Users = () => {
  const [user, setUser] = useState([])
  const [favorite, setFavorite] = useState([])

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    setUser(await response.json())
  }

  const addToFavorite = (user) => {
    setFavorite((prevFavourites) => [...prevFavourites, user])
    console.log('its work?')
    alert('Added successfully')
  }



  // this one does the exact opposite, it removes the favorite users id's
  const removeFavorite = (id) => {
    let index = favorite.indexOf(id)
    console.log(index)
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)]
    setFavorite(temp)
    alert('Removed Successfully')
  }

  useEffect(() => {
    getUsers()
  }, [])
  // if (!authorized) {
  //   return <Redirect to="/" />
  // }
  let findfavorite = user.filter((user) => favorite.includes(user.id))

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

                    <span className="faicon">
                      <h6
                        onClick={() => addToFavorite(usrElement.id)}
                      >Add to Fav</h6>
                    </span>

                    <div class="card-header">Name:{usrElement.name}</div>
                    <div class="card-body">Email:{usrElement.email}</div>
                    <div class="card-footer">Phone:{usrElement.phone}</div>
                    <Link to={'/userdetails/' + usrElement.id}>
                      <button className="btn btn-info">View details</button>
                    </Link>
                  </div>
                  <br />
                </div>
              </>
            )
          })}
        </div>

        
         
            <h2>Favorite Users</h2>
            <div class="row">
            {findfavorite.map((usr) => {
              return (
                <>
                  <div className="col-sm-4">
                    <div class="card">
                      <span>{usr.id}</span>
                      <span className="fac">
                        <h6 onClick={() => removeFavorite(usr.id)}>Remove to Fav</h6>
                      </span>
                      <div class="card-header">Name:{usr.name}</div>
                      <div class="card-body">Email:{usr.email}</div>
                      <div class="card-footer">Phone:{usr.phone}</div>
                      <Link to={'/userdetails/' + usr.id}>
                        <button className="btn btn-info">View details</button>{' '}
                      </Link>
                    </div>
                    <br/>
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
