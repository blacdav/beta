import React from 'react'
import search from '../IMG/tabler_search.svg';
import profile from '../IMG/profile_photo.png';
import logo from '../IMG/logo.png'
import menu from '../IMG/menu.png';
import { useAuth } from '../auth/auth';

const Header = () => {
  const { mobileSidebar, setMobileSidebar } = useAuth();

  return (
    <header className='d-flex col-12 borderh pt-3 pb-2 px-4 px-md-5 min-vh-25 justify-content-between'>
      <img src={logo} alt="beta logo" width={60} height={40} className='d-block d-md-none' />
      <div className='d-flex d-md-none gap-2 align-items-center'>
        <img src={search} alt="beta logo" width={20} />
        <img src={menu} alt="beta logo" width={30} height={30} onClick={() => setMobileSidebar(!mobileSidebar)} />
      </div>
      <div className='d-none d-md-flex align-items-center gap-2 w-50 h-75 border border-2 border-primary rounded-pill py-1 px-3'>
        <img src={search} alt="search icon" />
        <input type="search" placeholder='Search for NFTs, Collection & Artist' className='w-100 h-75 rounded-pill px-3 bg-transparent border-0 button-outline-primary text-white' />
      </div>
      <div className='d-none d-md-flex align-items-center justify-content-between px-4 border border-2 border-primary p-3 rounded-pill h-75 w-25'>
        <img src={profile} alt="avater" className='rounded-circle' />
        <div className='d-flex flex-column col-8'>
          <p className='m-0 fw-bold'>Blacdav</p>
          <small className='m-0'>ID: 80771162</small>
        </div>
      </div>
    </header>
  )
}

export default Header
