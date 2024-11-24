import React from 'react'
import cover from '../IMG/cover_photo.png';
import profile from '../IMG/profile_photo.png';
import nft from '../IMG/cat_nft.png';
import LearnToEarn from '../components/learn_to_earn';
import TopCreators from '../components/TopCreators';

const Collections = () => {
  return (
    <main className='d-gri row col-12 gap-md-2 px-4 min-vh-75 overflow-y-scroll hidden-scrollbar'>
      <section className='row h-100 col-12 col-md-9 py-3'>
        <div className='rounded-3 col-12'>
          <h3>Top Earners</h3>
          <div className='d-flex col-12 flex-nowrap gap-3 overflow-x-auto hidden-scrollbar' style={{maxWidth: '100%', whiteSpace: 'nowrap', overflowX: 'auto' }}>
            {
              [...Array(5)].map((_, i) => {
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
        

        <TopCreators />
      </aside>
    </main>
  )
}

export default Collections
