import React, {useState, useEffect} from 'react'

const url = process.env.REACT_APP_API_URL;

const Dashboard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const GetUser = async () => {
      try {
        const res = await fetch(url)

        if(res.status === 200){
          const data = await res.json()
          console.log("Success")
          setUsers(data)
        } else {
          console.log('Server Error: ', res.status)
        }
      } catch (error) {
        console.error('Error: ', error)
      }
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
