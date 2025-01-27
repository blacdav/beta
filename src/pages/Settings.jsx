import React from 'react'
import cover from '../IMG/cover_photo.png';
import profile from '../IMG/profile_photo.png';
import TopCreators from '../components/TopCreators';

const Settings = () => {
  return (
    <main className='d-lg-flex col-12 gap-0 gap-lg-4 justify-content-center pt-4 px-4 min-vh-75 overflow-y-scroll hidden-scrollbar'>
      <section className='col-12 col-lg-8'>
        <div className='d-inline-block border-0 mx-4 mx-md-5 mx-lg-0' style={{width: '100%', flexShrink: 0}}>
          <img src={cover} alt="cover" style={{height: '25%'}} className='w-100 h-25 rounded-top-4' />
          <div className='bg-bgblue pb-3 d-grid w-100 px-3 text-center justify-content-center rounded-bottom-4'>
            <img src={profile} alt="avater" className='rounded-circle mb-1 mx-auto' style={{marginTop: '-1.5rem'}} />
            <p className='m-0 fw-bold'>David David</p>
            <p className='m-0'>ID: 80771162</p>
            <p className='m-0'>Learn and Earn More NFTs</p>
          </div>
        </div>

        <div className='col-12 mt-4'>
          <h2>Edit your information</h2>

          <div className='d-lg-flex gap-3'>
            <form className='col-8'>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" className='w-100 rounded-pill' />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" className='w-100 rounded-pill' />
              </div>
              <div>
                <label htmlFor="Username">Username</label>
                <input type="text" className='w-100 rounded-pill' />
              </div>
            </form>
            
            <div className='col-3 d-grid gap-3 align-items-cente mt-4'>
              <button className='fs-7 w-100 h-100 rounded-pill'>Change Password</button>
              <button className='fs-7 w-100 h-100 rounded-pill'>Connect New Wallet</button>
              <button className='fs-7 w-100 h-100 rounded-pill'>Save NFT to Device</button>
            </div>
          </div>
        </div>
      </section>

      <aside className='d-grid col-lg-3 h-100 col-12 col-lg-3 px-0'>
        <TopCreators />
      </aside>
    </main>
  )
}

export default Settings
