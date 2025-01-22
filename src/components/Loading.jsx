import React from 'react'
import wolf from '../IMG/wolf.svg'

const Loading = () => {
  return (
    <main className='d-flex position-absolute min-h-100 min-vw-100 justify-content-center align-items-center bg-black bg-opacity-75' style={{inset: 0}}>
      <div className='bg-bgblue w-100 h-100 d-flex justify-content-center align-items-center'>
        <img src={wolf} alt="wolf logo" width={250} />
      </div>
    </main>
  )
}

export default Loading
