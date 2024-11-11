import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../IMG/logo.png'
import back from '../IMG/arrow-back.svg'

const Connect = () => {
  const navigate = useNavigate();
  return (
    <main className='bgimg2'>
      <div className='d-flex gap-4 flex-column px-3 px-lg-5 py-4'>
        <div className="d-flex d-md-none justify-content-start w-100 z-1">
          <img src={back} alt="back button" onClick={() => navigate(-1)} />
        </div>
        <div className='container w-100 h-100 d-flex bg-whitebg shadow p-4 rounded-3'>
          <div className='flex h-100 w-25 justify-content-center align-items-center'>
            <img src={logo} alt="beta logo" className='flex h-5 justify-content-center align-items-center' />
          </div>
          <div>
            <h1>Connect To Wallet</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Connect
