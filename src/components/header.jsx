import React from 'react'
import search from '../IMG/tabler_search.svg';

const Header = () => {
  return (
    <header className='d-none d-md-flex borderh pt-3 pb-2 px-5 h-50 justify-content-between'>
      <div className='d-flex align-items-center gap-2 w-50 h-75 border border-2 border-primary rounded-pill py-1 px-3'>
        <img src={search} alt="search icon" />
        <input type="search" className='w-100 h-75 rounded-pill px-3 bg-transparent border border-transparent text-white' />
      </div>
      <div className='d-flex border border-2 border-primary p-3 rounded-pill h-100'>
        <img src="#" alt="avater" />
        <div>
          <p>Username</p>
          <small>id</small>
        </div>
      </div>
    </header>
  )
}

export default Header
