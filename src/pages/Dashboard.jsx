import React from 'react';
import wolf from '../IMG/wolf.svg';
import cover from '../IMG/cover_photo.png';
import profile from '../IMG/profile_photo.png';
import LearnToEarn from '../components/learn_to_earn';

// const url = process.env.REACT_APP_API_URL;

const Dashboard = () => {
  return (
    <section className='d-grid d-md-flex gap-2 gap-md-4 col-12 px-3 px-md-4 min-vh-75 overflow-y-scroll hidden-scrollbar'>
      <section className='d-grid h-100 col-12 col-md-9 py-3'>
        <div className='dashboard w-full d-flex justify-content-between align-items-center rounded-3 px-3 px-md-5 py-4'>
          <div className='col-5 col-md-9 d-grid gap-2'>
            <small>#hackathonNFTs</small>
            <p className='fw-semibold'>A Plarform that enebles holders to earn and display non-fungible token(NFT) certificates as proof of their educational archievements.</p>
            <button className="w-75 d-block d-md-none py-1 bg-primary text-white rounded-3">View Collection</button>
            <button className="w-50 d-none d-md-block py-1 bg-primary text-white rounded-3">View Collection</button>
          </div>
          <img src={wolf} alt="wolf" width={250} height={250} className='d-block img-fluid' style={{marginTop: '-2rem', marginLeft: '-3rem'}} />
          {/* <img src={wolf} alt="wolf" width={250} height={250} className='d-block d-md-none' /> */}
        </div>

        <div className='rounded-3 col-12'>
          <h3>Top Earners</h3>
          <div className='d-flex col-12 flex-nowrap gap-3 overflow-x-auto hidden-scrollba' style={{maxWidth: '100%', whiteSpace: 'nowrap', overflowX: 'auto' }}>
            {
              [...Array(3)].map((_, i) => {
                return (
                  <div key={i} className='d-inline-block border-0 rounded-4 overflow-hidden' style={{minWidth: '11rem', flexShrink: 0}}>
                    <img src={cover} alt="cover" />
                    <div className='bg-bg pb-3 d-grid text-center justify-content-center'>
                      <img src={profile} alt="avater" className='rounded-circle mb-1 mx-auto' style={{marginTop: '-1.5rem'}} />
                      <p className='m-0 fw-bold'>David David</p>
                      <p className='m-0'>ID: 80771162</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <LearnToEarn />
      </section>

      <aside className='d-grid gap-4 h-100 col-12 col-md-3 pt-5'>
        <div className='bg-primary p-3 rounded-3'>
          <h3>Upcoming NFTs</h3>

          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
        </div>
        
        <div className='bg-primary p-3 rounded-3'>
          <h3>Top Creators</h3>

          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
          <div className='d-flex gap-2 aligm-items-center'>
            <img src="#" alt="img" className='' />
            <div>
              <p>Blacdav</p>
              <small>@blacdav.com</small>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Dashboard
