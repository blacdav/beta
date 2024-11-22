import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Header from '../components/header';
import { useAuth } from '../auth/auth';

const User = () => {
  const [miniSidebar, setMiniSidebar] = useState(true);
  const { mobileSidebar, setMobileSidebar } = useAuth();

  return (
    <main className='d-flex col-12 bgimg1 text-white'>
        <Sidebar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />
      <section className={`d-grid ${miniSidebar ? 'col-md-10' : 'col-md-11'} pb-3 min-vh-100`}>
        <Header />
        <Outlet />
        <div className='d-grid d-md-none '>
          <Sidebar />
        </div>
      </section>
    </main>
  )
}

export default User
