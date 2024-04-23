import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// const bootstrap = require('bootstrap')
// import bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <main className='d-flex flex-column vh-100 justify-content-center align-items-center'>
      <p className='m-0'>PAGE NOT FOUND</p>
      <Link to="/">go back to home page</Link>
    </main>
  )
}

export default NoMatch
