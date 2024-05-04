import React, {useState, useEffect} from 'react'

const url = 'https://jsonplaceholder.typicode.com/users'

const Dashboard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const GetUser = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setUsers(data)
    }
    GetUser()
  }, [])

  return (
    <div>
      Dashboard Page

      {
        users.map((user) => {
          return(
            <div key={user.id}>
              <p>
                {user.id} {user.company.name}
              </p>
            </div>
          ) 
        })
      }
    </div>
  )
}

export default Dashboard
