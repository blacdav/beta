import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import wolf from '../IMG/wolf.svg'

const Login = () => {
  return (
    <main className='bgimg2 d-flex py-4 pe-5 align-items-center'>
      <div className='w-25 h-100 d-grid align-items-center'>
        <img src={wolf} alt="..." className='h-75' />
      </div>
      <div className='bg-white w-75 h-100 p-4 rounded-3'>
        <form action="/login" method="post">
          <div>
            <label htmlFor="">FirstName:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
