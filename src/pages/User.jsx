import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Header from '../components/header';

const User = () => {
  const [miniSidebar, setMiniSidebar] = useState(true);

  return (
    <main className='d-flex w-100 bgimg1 text-white'>
        <Sidebar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />
      <section className={`d-grid ${miniSidebar ? 'col-md-10' : 'col-md-11'} col-12 pb-3 min-vh-100`}>
        <Header />
        <Outlet />
      </section>
    </main>
  )
}

export default User
