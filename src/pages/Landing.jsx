import React from 'react'
import '../App.css';
import '../App.scss';
import { Link } from 'react-router-dom';
import logo from '../IMG/logo.svg'
import wallet from '../IMG/solar_wallet-linear.svg'
import wolf from '../IMG/wolf.svg'
import search from '../IMG/tabler_search.svg'
import logout from '../IMG/ion_rocket-sharp.svg'
import login from '../IMG/login.svg'

const Landing = () => {
  return (
    <div className="text-light w-100 overflow-hidden bgimg1">
      <div className="container border-bottom-0 border-primary">
        <header className='d-flex justify-content-between align-items-baseline container pt-3 pb-4'>
          <img src={logo} alt="..." width={100} />
          <nav className='navbar-nav d-none d-md-flex flex-row gap-5 align-items-end overflow-hidde'>
            <Link to='/' className='nav-item align-bottom text-decoration-none text-light'>Home</Link>
            <Link to='/' className='nav-item align-bottom text-decoration-none text-light'>About Us</Link>
            <Link to='/' className='nav-item align-bottom text-decoration-none text-light'>Community</Link>
            <Link to='/' className='nav-item align-bottom text-decoration-none text-light'>Contact</Link>
          </nav>

          <div className='d-flex align-items-baseline'>
            <img src={search} alt="..." width={20} />
            <Link to='connect' className='btn text-light d-none d-sm-flex py-2 px-3 ms-5 h-5  border-2 border-primary bg-transparent rounded-5'><img src={wallet} alt="..." /> Wallet Connect</Link>
          </div>
        </header>
      </div>

      <div className='container d-md-flex align-content-center'>
        <div className='container mx-auto w-md-50 py-5 pe-md-5'>
          <h1>Get Certified And <span className='text-primary'>Earn</span> NFT's.</h1>
          <p>
            A platform that enables learners to earn and display non-fungible token(NFT) certificates as proof of their 
            educational archievements.
          </p>
          <div className='w-100 d-grid d-md-flex gap-2 gap-md-0'>
            <Link to='signup' className='btn text-light px-4 py-1 me-md-4 border-2 border-primary bg-transparent rounded-5'><img src={logout} alt="..." /> Sign Up</Link>
            <Link to='login' className='btn text-light px-4 py-1 border-2 border-primary bg-transparent rounded-5'><img src={login} alt="..." /> Login</Link>
          </div>
        </div>

        <div className='d-none d-md-flex'>
          <img src={wolf} alt="..." width={450} height={450} />
        </div>
      </div>

      <div className='container d-flex justify-content-between px-4 gap-4'>
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

export default Landing;