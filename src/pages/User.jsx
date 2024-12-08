import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Header from '../components/header';
// import { useAuth } from '../auth/auth';

const User = () => {
  const [miniSidebar, setMiniSidebar] = useState(true);
  // const { mobileSidebar, setMobileSidebar } = useAuth();

  return (
    <main className='d-flex m-0 p-0 bgimg1 text-white'>
        <Sidebar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />
      <section className={`d-grid ${miniSidebar ? 'col-md-10' : 'col-md-11'} container-fluid min-vh-100 m-0 p-0 pb-3`}>
        <Header />
        <Outlet />
      </section>
    </main>
  )
}

export default User
