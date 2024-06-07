import React from 'react'
import '../App.css';
import logo from '../IMG/logo.svg'

const Connect = () => {
  return (
    <main className='bgimg2 px-1 px-lg-5 py-4'>
      <div className='w-100 h-100 d-flex bg-secondary p-4 rounded-3'>
        <div className='flex h-100 w-25 justify-content-center align-items-center'>
          <img src={logo} alt="..." width={150} className='flex h-5 justify-content-center align-items-center' />
        </div>
        <div>
          <h1>Connect To Wallet</h1>
        </div>
      </div>
    </main>
  )
}

export default Connect
