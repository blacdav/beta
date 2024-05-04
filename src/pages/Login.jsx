import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import wolf from '../IMG/wolf.svg'

const Login = () => {
  const [login, setLogin] = useState({username: '', password: ''})
  // const [user, setUser] = useState([])

  
  return (
    <main className='bgimg2 d-flex py-4 pe-5 align-items-center'>
      <div className='w-25 h-100 d-grid align-items-center z-2'>
        <img src={wolf} alt="..." className='h-75' />
      </div>
      <div className='bg-white clip-box w-75 h-100 py-3 px-5 rounded-3 d-flex justify-content-end'>
        <form action="/login" method="post" className='w-75 d-flex flex-column align-items-end gap-3'>
          <div className='w-100'>
            <label htmlFor="">FirstName:</label>
            <input type="text" className='w-100 px-2 py-1 rounded-5 border-2 border-primary' placeholder='username' value={login.username} onChange={(e) => {setLogin({...login, username: e.target.value.trim()})}} />
          </div>

          <div className='w-100'>
            <label htmlFor="password">Password:</label>
            <input type="password" className='w-100 px-2 py-1 rounded-5 border-2 border-primary' placeholder='Enter your password' value={login.password} onChange={(e) => {setLogin({...login, password: e.target.value.trim()})}} />
          </div>

          <button className='w-100 px-2 py-1 fw-semibold rounded-5 bg-bg-primary border-2 border-primary'>Submit</button>
        </form>
      </div>
    </main>
  )
}

export default Login
