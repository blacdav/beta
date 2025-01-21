import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Header from '../components/header';
import Loading from '../components/Loading';
// import { useAuth } from '../auth/auth';

const User = () => {
  const [miniSidebar, setMiniSidebar] = useState(true);
  // const { mobileSidebar, setMobileSidebar } = useAuth();

  return (
    <main className='d-flex m-0 p-0 bgimg1 text-white'>
        <Sidebar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />
      <section className={`d-grid ${miniSidebar ? 'col-lg-10' : 'col-lg-11'} container-fluid m-0 p-0 pb-2 hidden-scrollbar`}>
        <Header />
        <Outlet />
      </section>
    </main>
  )
}

export default User
