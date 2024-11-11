import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Header from '../components/header';

const User = () => {
  const [miniSidebar, setMiniSidebar] = useState(true);

  return (
    <main className='d-flex w-100 bgimg1 text-white'>
        <Sidebar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />
      <section className={`d-grid ${miniSidebar ? 'col-10' : 'col-11'}`}>
        <Header />
        <Outlet />
      </section>
    </main>
  )
}

export default User
