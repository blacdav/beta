import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../IMG/logo.png'
import back from '../IMG/arrow-back.svg'

const Connect = () => {
  const navigate = useNavigate();
  return (
    <main className='bgimg3'>
      <div className='d-flex gap-4 flex-column px-3 px-lg-5 py-4 h-100'>
        <div className="d-flex d-md-none justify-content-start w-100 z-1">
          <img src={back} alt="back button" onClick={() => navigate(-1)} />
        </div>
        <div className='container w-100 h-100 d-flex flex-column gap-5 gap-md-0 flex-md-row bg-whitebg shadow p-4 rounded-3'>
          <div className='d-flex col-md-4 justify-content-center align-items-start align-items-md-center'>
            <img src={logo} alt="beta logo" className='flex h-5 justify-content-center align-items-center' />
          </div>
          <div className='col-md-8 d-grid align-items-center justify-content-center'>
            <div className='d-grid w-100 align-items-center text-center'>
              <h1 className='text-text'>Connect To Wallet</h1>
              <p className=''>Start by connecting with one of the wallets bellow.</p>
              <button className='p-2 rounded-3'>Connect Wallet</button>
            </div>
            {/* <div>
              <ul className='d-flex gap-5'>
                <li className='overflow-hidden bg-primary px-4 py-3 rounded-3'>A</li>
                <li className='overflow-hidden bg-primary px-4 py-3 rounded-3'>B</li>
                <li className='overflow-hidden bg-primary px-4 py-3 rounded-3'>C</li>
                <li className='overflow-hidden bg-primary px-4 py-3 rounded-3'>D</li>
                <li className='overflow-hidden bg-primary px-4 py-3 rounded-3'>E</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Connect
