import React from 'react';
import wolf from '../IMG/wolf.svg';
import cover from '../IMG/cover_photo.png';
import profile from '../IMG/profile_photo.png';
import LearnToEarn from '../components/learn_to_earn';
import TopCreators from '../components/TopCreators';
import nft from '../IMG/cat_nft.png';

// const url = process.env.REACT_APP_API_URL;

const Dashboard = () => {
  return (
    <section className='d-block d-md-flex col-12 m-0 px-3 gap-0 gap-md-4 min-vh-75 overflow-y-scroll hidden-scrollbar'>
      <section className='h-100 col-12 col-md-9 m-0 p-0'>
        {/* <section className='py-3 px-0 m-0'> */}
          {/* <div className='row'> */}
            <div className='d-flex dashboard w-100 h-auto d-grid col-4 align-items-center rounded-3 px-3 px-md-5 m-0 mt-2 py-4'>
              <div className='col-5 col-9 d-grid d-md-none gap-1 gap-md-2 hero_fs'>
                <small>#hackathonNFTs</small>
                <p className='fw-semibold'>A Plarform that enebles holders to earn and display non-fungible token(NFT) certificates as proof of their educational archievements.</p>
                <button className="w-50 d-block py-1 bg-primary text-white rounded-3">View Collection</button>
              </div>
              <div className='col-5 col-md-9 d-none d-md-grid gap-0 gap-md-2'>
                <small>#hackathonNFTs</small>
                <p className='fw-semibold'>A Plarform that enebles holders to earn and display non-fungible token(NFT) certificates as proof of their educational archievements.</p>
                <button className="w-75 d-block d-md-none py-1 bg-primary text-white rounded-3">View Collection</button>
                <button className="w-50 d-none d-md-block py-1 bg-primary text-white rounded-3">View Collection</button>
              </div>
              <img src={wolf} alt="wolf" width={250} height={250} className='d-none d-md-block img-fluid' style={{marginTop: '-2rem', marginLeft: '-2rem'}} />
              <img src={wolf} alt="wolf" width={80} height={80} className='d-block d-md-none col-3' />
            </div>

            <div className='px-0 rounded-3 col-12'>
              <h3>Top Earners</h3>
              <div className='d-flex col-12 flex-nowrap gap-3 overflow-x-auto hidden-scrollbar' style={{maxWidth: '100%', whiteSpace: 'nowrap', overflowX: 'auto' }}>
                {
                  [...Array(5)].map((_, i) => {
                    return (
                      <div key={i} className='d-inline-block border-0 rounded-4 overflow-hidden' style={{minWidth: '11%', flexShrink: 0}}>
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
          {/* </div> */}
        {/* </section> */}
      </section>

      <aside className='d-grid gap-4 h-100 col-12 col-md-3 px-0 pt-4'>
        <div className='bg-primary p-3 rounded-3'>
          <h3>Upcoming NFTs</h3>

          <div className='d-grid gap-2'>
            {
              [...Array(6)].map((_, i) => {
                return (
                  <div key={i} className='d-flex gap-2 p-2 rounded-3 aligm-items-center bg-warning'>
                    <img src={nft} alt="img" className='rounded-3' width={50} height={50} />
                    <div>
                      <p className='m-0 p-0'>Blacdav</p>
                      <small className='m-0 p-0'>@blacdav.com</small>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <TopCreators />
      </aside>
    </section>
  )
}

export default Dashboard
