import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import wolf from '../IMG/wolf.svg'

const Signup = () => {
  const [signup, setSignup] = useState({firstname: '', lastname: '', middlename: '', email: '', tel: '', gender: ''})
  return (
    <main className='bgimg2 d-flex py-4 pe-5 align-items-centerz'>
      <div className='w-25 h-100 d-grid align-items-center'>
        <img src={wolf} alt="..." className='h-75' />
      </div>
      <div className='bg-white w-75 h-100 p-4 rounded-3'>
        <form method="post" className='d-grid justify-content-end gap-3 w-75'>
          <div className='w-screen'>
            <label htmlFor="firstname">FirstName:</label>
            <input type="text" className='w-full' value={signup.firstname} onChange={(e) => {setSignup({...signup, firstname: e.target.value})}} />
          </div>
          <div>
            <label htmlFor="">LastName:</label>
            <input type="text" value={signup.lastname} onChange={(e) => {setSignup({...signup, lastname: e.target.value})}} />
          </div>
          <div>
            <label htmlFor="">MiddleName:</label>
            <input type="text" value={signup.middlename} onChange={(e) => {setSignup({...signup, middlename: e.target.value})}} />
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input type="email" value={signup.email} onChange={(e) => {setSignup({...signup, email: e.target.value})}} />
          </div>
          <div>
            <label htmlFor="">PhoneNumber:</label>
            <input type="tel" value={signup.tel} onChange={(e) => {setSignup({...signup, tel: e.target.value})}} />
          </div>
          <select>
            <option value="others">Others</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button onClick={(e) => {e.preventDefault(); console.log(signup)}}> Submit </button>
        </form>
      </div>
    </main>
  )
}

export default Signup
