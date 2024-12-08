import React from 'react'
import wolf from '../IMG/wolf.svg'

const Loading = () => {
  return (
    <main className='d-flex min-vh-100 min-vw-100 justify-content-center align-items-center bg-transparent'>
      <div>
        <img src={wolf} alt="wolf logo" width={250} />
      </div>
    </main>
  )
}

export default Loading
