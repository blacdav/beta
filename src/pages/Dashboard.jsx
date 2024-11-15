import wolf from '../IMG/wolf.svg';

// const url = process.env.REACT_APP_API_URL;

const Dashboard = () => {
  return (
    <section className='d-grid d-md-flex col-12 px-4 min-vh-75 overflow-y-scroll hidden-scrollbar'>
      <section className='d-grid h-100 col-12 col-md-8 gap-3 py-3 pe-0 pe-md-4'>
        <div className='dashboard d-flex justify-content-between align-items-center rounded-3 px-3 px-md-5 py-4'>
          <div className='col-9 d-grid gap-2'>
            <small>#hackathonNFTs</small>
            <p className='fw-semibold'>A Plarform that enebles holders to earn and display non-fungible token(NFT) certificates as proof of their educational archievements.</p>
            <button className="w-75 d-block d-md-none py-1 bg-primary text-white rounded-3">View Collection</button>
            <button className="w-50 d-none d-md-block py-1 bg-primary text-white rounded-3">View Collection</button>
          </div>
          <img src={wolf} alt="wolf" width={250} height={250} className='d-none d-md-block' style={{marginTop: '-2rem', marginLeft: '-3rem'}} />
          {/* <img src={wolf} alt="wolf" width={250} height={250} className='d-block d-md-none' /> */}
        </div>

        <div className='border border-2 border-blue-700 p-3 rounded-3'>
          <h3>Top Earners</h3>
          <div className='d-grid'>
            <p>NFT</p>
            <p>NFT</p>
            <p>NFT</p>
            <p>NFT</p>
            <p>NFT</p>
          </div>
        </div>

        <div className='border border-2 border-blue-700 p-3 rounded-3'>
          <h3>Learn To Earn</h3>
          <div className='d-grid'>
            <p>NFT</p>
            <p>NFT</p>
            <p>NFT</p>
            <p>NFT</p>
            <p>NFT</p>
          </div>
        </div>
      </section>

      <aside className='d-grid gap-4 h-100 col-12 col-md-4 pt-5'>
        <div className='bg-primary p-3 rounded-3'>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
        </div>

        <div className='bg-primary p-3 rounded-3'>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
          <p>NFT</p>
        </div>
      </aside>
    </section>
  )
}

export default Dashboard
