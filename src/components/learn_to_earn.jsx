import React, { useState } from 'react'
import nft from '../IMG/cat_nft.png';

const LearnToEarn = () => {
    const [hover, setHover] = useState(-1);

  return (
    <div className='py-3 px-0 rounded-3 col-12'>
        <h3>Learn To Earn</h3>
        <div className='d-flex col-12 gap-3 overflow-x-scroll hidden-scrollbar'>
            {
                [...Array(5)].map((_, i) => {
                    return (
                        <div key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)} className='d-grid border rounded-4 overflow-hidden' style={{minWidth: '15rem'}}>
                            <img src={nft} alt="nft" />
                            <div   className={`${hover === i ? 'd-grid' : 'd-none'} p-2 rounded-3 bg-primary mx-auto`} style={{marginTop: '-7rem', minWidth: '14rem', height: '6rem', marginBottom: '.5rem'}}>
                                <div className='d-flex justify-content-between'>
                                    <p className='m-0'>Rex Felix</p>
                                    <p className='m-0'>Rex Felix</p>
                                </div>
                                <p className='m-0'>Free</p>
                                <div className='d-flex justify-content-between'>
                                    <small className='m-0'>#hackathonNFTs</small>
                                    <button className='m-0 fs-7 rounded-3'>Earn NFT</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default LearnToEarn
