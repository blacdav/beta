import React from 'react'
import nft from '../IMG/cat_nft.png';

const LearnToEarn = () => {
  return (
    <div className='p-3 rounded-3 col-12'>
        <h3>Learn To Earn</h3>
        <div className='d-flex col-12 gap-3 overflow-x-scroll hidden-scrollbar'>
            {
                [...Array(5)].map((_, i) => {
                    return (
                        <div key={i} className='d-grid border rounded-4 overflow-hidden' style={{minWidth: '15rem'}}>
                            <img src={nft} alt="nft" />
                            <div className='p-2 rounded-3 bg-primary mx-auto' style={{marginTop: '-7rem', minWidth: '12rem', height: '6rem', marginBottom: '.5rem'}}>
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
