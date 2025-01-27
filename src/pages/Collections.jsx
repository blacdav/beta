import React from 'react'
import cover from '../IMG/cover_photo.png';
import profile from '../IMG/profile_photo.png';
// import nft from '../IMG/cat_nft.png';
import LearnToEarn from '../components/learn_to_earn';
import TopCreators from '../components/TopCreators';

const Collections = () => {
  return (
    <main className='col-12 d-lg-flex justify-content-center gap-0 gap-lg-4 px-4 px-lg-5 min-vh-75 overflow-y-scroll hidden-scrollbar'>
      <section className='h-100 col-12 col-lg-9 py-3'>
        <div className='rounded-3 col-12'>
          <h3>New Collection</h3>
          <div className='d-flex col-12 flex-nowrap gap-3 overflow-x-auto hidden-scrollbar' style={{maxWidth: '100%', whiteSpace: 'nowrap', overflowX: 'auto' }}>
            {
              [...Array(5)].map((_, i) => {
                return (
                  <div key={i} className='d-inline-block border-0 rounded-4 overflow-hidden' style={{minWidth: '11rem', flexShrink: 0}}>
                    <img src={cover} alt="cover" />
                    <div className='bg-bg p-3 pb-0 d-block justify-content-start'>
                      <p className='m-0 fw-bold'>Hackathon</p>
                      <p className='m-0'>ID: 80771162</p>
                      <div className='d-flex justify-content-between align-items-baseline'>
                        <p style={{height: '1rem', width: '3rem', backgroundColor: 'orange'}}></p>
                        <small className='text fs-7'>by Blacdav</small>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <LearnToEarn />
      </section>

      <aside className='d-grid gap-4 h-auto col-12 col-lg-3 pt-5'>
        <div className='d-inline-block border-0 mx-4 mx-md-5 mx-lg-0' style={{minWidth: '9%', flexShrink: 0}}>
          <img src={cover} alt="cover" className='w-100 rounded-top-4' />
          <div className='bg-bgblue pb-3 d-grid text-center justify-content-center rounded-bottom-4'>
            <img src={profile} alt="avater" className='rounded-circle mb-1 mx-auto' style={{marginTop: '-1.5rem'}} />
            <p className='m-0 fw-bold'>David David</p>
            <p className='m-0'>ID: 80771162</p>
            <p className='m-0'>Learn and Earn More NFTs</p>
          </div>
        </div>

        <div>
          space
        </div>

        <TopCreators />
      </aside>
    </main>
  )
}

export default Collections
