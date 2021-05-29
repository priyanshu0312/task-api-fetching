import React, { useState, useEffect } from 'react'

const UserDetails = (props) => {
  const [user, setUser] = useState([])

  const getUsers = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/' + props.match.params.id,
    )

    setUser(await response.json())
  }

  useEffect(() => {
    getUsers()
  })
  return (
    <div className="container">
      <h4>{user.name}</h4>
      <h4>{user.username}</h4>

     
      <h4>{user.website}</h4>

      {/* <h4>{user.company.name} </h4>
      <h4> {user.company.catchPhrase}</h4>
      <h4>{user.company.bs}</h4> */}
    </div>
  )
}

export default UserDetails
