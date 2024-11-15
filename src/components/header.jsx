import React from 'react'
import search from '../IMG/tabler_search.svg';

const Header = () => {
  return (
    <header className='d-flex borderh pt-3 pb-2 px-5 min-vh-25 justify-content-between'>
      <div className='d-flex align-items-center gap-2 w-50 h-75 border border-2 border-primary rounded-pill py-1 px-3'>
        <img src={search} alt="search icon" />
        <input type="search" placeholder='Search for NFTs, Collection & Artist' className='w-100 h-75 rounded-pill px-3 bg-transparent border-0 button-outline-primary text-white' />
      </div>
      <div className='d-flex align-items-center justify-content-between px-4 border border-2 border-primary p-3 rounded-pill h-75 w-25'>
        {/* <img src="#" alt="avater" /> */}O
        <div className='d-flex flex-column col-8'>
          <p>Blacdav</p>
          <small>80771162</small>
        </div>
      </div>
    </header>
  )
}

export default Header
