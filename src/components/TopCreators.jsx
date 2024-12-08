import React from 'react'
import nft from '../IMG/cat_nft.png';

const TopCreators = () => {
  return (
    <section className='bg-bgblue p-3 rounded-3'>
      <h3 className='text-greybg'>Top Creators</h3>
      <div className='d-grid gap-2'>
      {
        [...Array(4)].map((_, i) => {
          return (
            <div key={i} className='d-flex gap-2 p-2 rounded-3 aligm-items-center cursor-pointer bg-greybg'>
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
      
    </section>
  )
}

export default TopCreators
