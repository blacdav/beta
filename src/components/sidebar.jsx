import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../IMG/logo.png'
import back from '../IMG/arrow-back.svg'
import dashboard_icon from '../IMG/dashboard.png'
import earn_nft_icon from '../IMG/earn-nft.png'
import collection_icon from '../IMG/collection.png'
import notification_icon from '../IMG/notification.png'
import settings_icon from '../IMG/settings.png'
import support from '../IMG/support.png'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../auth/auth'

const Sidebar = ({ miniSidebar, setMiniSidebar}) => {
  const { mobileSidebar } = useAuth();

  const location = useLocation();

  const dashboard = location.pathname === '/dashboard';
  const earn_nft = location.pathname === '/dashboard/earn';
  const collection = location.pathname === '/dashboard/collections';
  const notification = location.pathname === '/dashboard/notifications';
  const settings = location.pathname === '/dashboard/settings';

  return (
    <aside className={`${miniSidebar ? 'col-2' : 'col-1'} ${mobileSidebar ? 'd-grid' : 'd-grid'} py-3 min-vh-100 bg-whitebg text-blue d-none d-md-grid align-content-between`}>
      <div className='d-grid gap-5 ps-2'>
        <ul className='d-flex justify-content-between align-items-center'>
          <li className='overflow-hidden loader'><img src={logo} alt="beta logo" width={miniSidebar ? 100 : 50} height={miniSidebar ? 60 : 30} /></li>
          <li className={`overflow-hidden ${miniSidebar ? 'rotate-90' : 'rotate-180'}`}><img src={back} alt="minimize button" onClick={() => setMiniSidebar(!miniSidebar)} className='rotate-90' /></li>
        </ul>

        <ul className={`d-grid gap-5 text-bold`}>
          <li className='overflow-hidden'><Link className={`text-decoration-none d-flex align-items-center gap-2 ${dashboard ? 'fw-bold' : ''}`} to='/dashboard'><img src={dashboard_icon} alt="dashboard icon" /><p className={`${miniSidebar ? '' : 'd-none'} m-0`}>Dashboard</p></Link></li>
          <li className='overflow-hidden'><Link className={`text-decoration-none d-flex align-items-center gap-2 ${earn_nft ? 'fw-bold' : ''}`} to='earn'><img src={earn_nft_icon} alt="earn nft icon" /><p className={`${miniSidebar ? '' : 'd-none'} m-0`}>Earn NFTs</p></Link></li>
          <li className='overflow-hidden'><Link className={`text-decoration-none d-flex align-items-center gap-2 ${collection ? 'fw-bold' : ''}`} to='collections'><img src={collection_icon} alt="nft collections icon" /><p className={`${miniSidebar ? '' : 'd-none'} m-0`}>NFT Collections</p></Link></li>
          <li className='overflow-hidden'><Link className={`text-decoration-none d-flex align-items-center gap-2 ${notification ? 'fw-bold' : ''}`} to='notifications'><img src={notification_icon} alt="notification icon" /><p className={`${miniSidebar ? '' : 'd-none'} m-0`}>Notifications</p></Link></li>
        </ul>
      </div>

      <ul className={`d-grid gap-4 ms-2`}>
        <li className='overflow-hidden'><Link className={`text-decoration-none d-flex align-items-center gap-2 ${settings ? 'fw-bold' : ''}`} to='settings'><img src={settings_icon} alt="setting icon" /><p className={`${miniSidebar ? '' : 'd-none'} m-0`}>Settings</p></Link></li>
        <li className='overflow-hidden'><Link className='text-decoration-none d-flex align-items-center gap-2' to=''><img src={support} alt="support icon" /><p className={`${miniSidebar ? '' : 'd-none'} m-0`}>Support</p></Link></li>
        <li className={`overflow-hidden ${settings ? 'd-block' : 'd-none'}`}><p className='text-decoration-none d-flex align-items-center gap-2 pointer-event'><img src={support} alt="support icon" /><p className={`${miniSidebar ? '' : 'd-none'} m-0`}>LogOut</p></p></li>
      </ul>
    </aside>
  )
}

export default Sidebar
