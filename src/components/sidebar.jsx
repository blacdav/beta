import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../IMG/logo.png'
import back from '../IMG/arrow-back.svg'
import dashboard from '../IMG/dashboard.png'
import earn_nft from '../IMG/earn-nft.png'
import collection from '../IMG/collection.png'
import notification from '../IMG/notification.png'
import settings from '../IMG/settings.png'
import support from '../IMG/support.png'

const Sidebar = ({ miniSidebar, setMiniSidebar}) => {
  return (
    <aside className={`${miniSidebar ? 'col-2' : 'col-1'} py-3 min-vh-100 bg-whitebg text-blue d-none d-md-grid align-content-between`}>
      <div className='d-grid gap-5 ps-2'>
        <ul className='d-flex justify-content-between align-items-center'>
          <li className='overflow-hidden'><img src={logo} alt="beta logo" width={miniSidebar ? 100 : 50} height={miniSidebar ? 60 : 30} /></li>
          <li className={`overflow-hidden ${miniSidebar ? 'rotate-90' : 'rotate-180'}`}><img src={back} alt="minimize button" onClick={() => setMiniSidebar(!miniSidebar)} /></li>
        </ul>

        <ul className={`${miniSidebar ? 'gap-3' : 'gap-5'} d-grid text-bold`}>
          <li className='overflow-hidden'><Link className='text-decoration-none d-flex align-items-baseline gap-2' to='/user'><img src={dashboard} alt="dashboard icon" /><p className={`${miniSidebar ? '' : 'd-none'} font-bold`}>Dashboard</p></Link></li>
          <li className='overflow-hidden'><Link className='text-decoration-none d-flex align-items-baseline gap-2' to='earn'><img src={earn_nft} alt="earn nft icon" /><p className={`${miniSidebar ? '' : 'd-none'}`}>Earn NFTs</p></Link></li>
          <li className='overflow-hidden'><Link className='text-decoration-none d-flex align-items-baseline gap-2' to='collections'><img src={collection} alt="nft collections icon" /><p className={`${miniSidebar ? '' : 'd-none'}`}>NFT Collections</p></Link></li>
          <li className='overflow-hidden'><Link className='text-decoration-none d-flex align-items-baseline gap-2' to='notifications'><img src={notification} alt="notification icon" /><p className={`${miniSidebar ? '' : 'd-none'}`}>Notifications</p></Link></li>
        </ul>
      </div>

      <ul className={`d-grid ${miniSidebar ? 'gap-3' : 'gap-5'} ms-2`}>
        <li className='overflow-hidden'><Link className='text-decoration-none d-flex align-items-baseline gap-2' to='settings'><img src={settings} alt="setting icon" /><p className={`${miniSidebar ? '' : 'd-none'}`}>Setting</p></Link></li>
        <li className='overflow-hidden'><Link className='text-decoration-none d-flex align-items-baseline gap-2' to=''><img src={support} alt="support icon" /><p className={`${miniSidebar ? '' : 'd-none'}`}>Support</p></Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
