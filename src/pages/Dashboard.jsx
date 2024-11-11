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
    <section className='d-grid col-8 p-5 h-75'>
      <section>
        <div className='d-grid d-md-flex h-75 justify-content-between border border-2 border-red-700'>
          <div>
            <h2>sergyetyea</h2>
            <p>A Plarform that enebles holders to earn and display non-fungible token(NFT) certificates as proof of their educational archievements.</p>
            <button></button>
          </div>
          <img src="#" alt="wolf" width={250} height={250} />
        </div>

        <div></div>
        
        <div></div>
      </section>

      <section>
        <div>
          sgseg
        </div>
      </section>

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
    </section>
  )
}

export default Dashboard
