import React from 'react'

const TopCreators = () => {
  return (
    <section className='bg-primary p-3 rounded-3'>
      <h3>Top Creators</h3>

      {
        [...Array(4)].map((_, i) => {
          return (
            <div className='d-flex gap-2 aligm-items-center'>
              <img src="#" alt="img" className='' />
              <div>
                <p>Blacdav</p>
                <small>@blacdav.com</small>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default TopCreators
