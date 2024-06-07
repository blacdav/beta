import React, { useState } from 'react'
import '../App.css';
import wolf from '../IMG/wolf.svg'

const Login = () => {
  const [login, setLogin] = useState({username: '', password: ''})
  // const [user, setUser] = useState([])

  
  return (
    <main className='bgimg2 d-flex py-4 pe-5 align-items-center'>
      <div className='w-25 h-100 d-grid align-items-center'>
        <img src={wolf} alt="..." className='h-75' />
      </div>
      <div className='bg-secondary shadow clip-box w-75 h-100 py-3 px-5 rounded-3 d-flex justify-content-end'>
        <form action="/login" method="post" className='w-75 d-flex flex-column align-items-end fw-semibold text-primary gap-2'>
          <div className='w-100'>
            <label htmlFor="">Email or Username</label>
            <input type="text" className='w-100 px-2 py-1 rounded-5 border-2 border-primary' placeholder='email / username' value={login.username} onChange={(e) => {setLogin({...login, username: e.target.value.trim()})}} />
          </div>

          <div className='w-100'>
            <label htmlFor="password">Password</label>
            <input type="password" className='w-100 px-2 py-1 rounded-5 border-2 border-primary' placeholder='Enter your password' value={login.password} onChange={(e) => {setLogin({...login, password: e.target.value.trim()})}} />
          </div>

          <button className='w-100 px-2 mt-3 py-1 fw-semibold text-white rounded-5 bg-primary border-2 border-primary'>Log in</button>
        </form>
      </div>
    </main>
  )
}

export default Login
