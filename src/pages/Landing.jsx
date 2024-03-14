import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap'
import '../App.css';
import logo from '../pages/IMG/logo.svg'
import search from '../pages/IMG/search.svg'
import wolf from '../pages/IMG/wolf.svg'
import signin from '../pages/IMG/signin.svg'
import signup from '../pages/IMG/login.svg'


const Landing = () => {
  return (
    <div className="text-light bgimg1">
      <div className="border-2 border-bottom border-primary">
        <header className='d-flex align-baseline justify-content-between container pt-2 pb-2'>
          <h1 className='w-10'><img src={logo} alt='...' width={80}/></h1>
          <ul className='navbar-nav d-flex flex-lg-row gap-5 overflow-hidden'>
            <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>About Us</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>Community</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>Contact</a></li>
          </ul>

          <div className='d-flex'>
            <p className=''><img src={search} alt="..." /></p>
            <button className='btn text-light py-0 ms-5 border-2 border-primary bg-transparent rounded-5'>Wallet Connect</button>
          </div>
        </header>
      </div>

      <div className='container d-md-flex align-content-center'>
        <div className='w-50 py-5 pe-5'>
          <h1>Get Certified And <span className='text-primary'>Earn</span> NFT's.</h1>
          <p>
            A platform that enables learners to earn and display non-fungible token(NFT) certificates as proof of their 
            educational archievements.
          </p>
          <div>
            <button className='btn text-light px-4 py-1 me-4 border-2 border-primary bg-transparent rounded-5'><img src={signin} alt="..." /> Sign Up</button>
            <button className='btn text-light px-4 py-1 border-2 border-primary bg-transparent rounded-5'><img src={signup} alt="..." /> Login</button>
          </div>
        </div>

        <div className=''>
          <p><img src={wolf} alt="..." width={500} /></p>
        </div>
      </div>

      <div className='container d-flex justify-content-between px-4'>
        <div className='fw-semibold text-center'>
          <p className="bg-primary py-1 px-3 rounded-2 mb-0">TOTAL ACTIVE USERS</p>
          <p className='fs-3 text-primary'>100,000+</p>
        </div>
        <div className='fw-semibold text-center'>
          <p className="bg-primary py-1 px-3 rounded-2 mb-0">NFT CERTIFICATE CLAIMERS</p>
          <p className='fs-3 text-primary'>700,945+</p>
        </div>
        <div className='fw-semibold text-center'>
          <p className="bg-primary py-1 px-3 rounded-2 mb-0">NFT CERTIFICATE ISSUERS</p>
          <p className='fs-3 text-primary'>55+</p>
        </div>
      </div>
    </div>
  )
}

export default Landing
