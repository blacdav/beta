import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import wolf from '../IMG/wolf.svg'

const Login = () => {
  const [signup, setSignup] = useState({category: ''})
  // const [user, setUser] = useState([])

  
  return (
    <main className='bgimg2 d-flex py-4 pe-5 align-items-center'>
      <div className='w-25 h-100 d-grid align-items-center'>
        <img src={wolf} alt="..." className='h-75' />
      </div>
      <div className='bg-secondary shadow clip-box w-75 h-100 py-3 px-5 rounded-3 d-flex justify-content-end'>
        <form action="/login" method="post" className='w-75 d-flex flex-column align-items-end fw-semibold text-primary gap-2'>
          <div className='w-100 bg-light d-flex p-2 ps-4 rounded-5 gap-2'>
            <input name='category' type="radio" className='px-5 py-1 rounded-5 border-2 border-primary' placeholder='email / username' value='NFT-Issuer' onChange={(e) => {setSignup({...signup, category: e.target.value.trim()})}} />
            <label htmlFor="">NFT Issuer</label>
          </div>

          <div className='w-100 bg-light d-flex p-2 ps-4 rounded-5 gap-2'>
            <input name='category' type="radio" className='px-2 py-1 rounded-5 border-2 border-primary' placeholder='Enter your password' value='NFT-Claimer' onChange={(e) => {setSignup({...signup, category: e.target.value.trim()})}} />
            <label htmlFor="password">NFT Claimer</label>
          </div>

          <button className='w-100 px-2 mt-3 py-1 fw-semibold text-white rounded-5 bg-primary border-2 border-primary'>Log in</button>
        </form>
      </div>
    </main>
  )
}

export default Login
