import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const url = 'https://jsonplaceholder.typicode.com/users'

const User = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const GetUser = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setUsers(data)
      // console.log(data)
    }
    GetUser()
  }, [])

  return (
    <div>
      Users Page Username is Nifemi
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          )
        })
      }
      <Outlet />
    </div>
  )
}

export default User
