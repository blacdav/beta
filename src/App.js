import React from 'react';
import '../src/custombootstrap/color.scss';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Signup from './auth/Signup';
import Login from './auth/Login';
import Connect from './auth/Connect';
import NoMatch from './pages/NoMatch';
// import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Category from './auth/Category';
import EarnNFT from './pages/EarnNFT'
import Collections from './pages/Collections';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
const Landing = React.lazy(() => import('./pages/Landing'))
const User = React.lazy(() => import('./pages/User'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<React.Suspense fallback='Loading...'><Landing /></React.Suspense>} />
      <Route path='signup' element={<Signup />} />
      <Route path='category' element={<Category />} />
      <Route path='login' element={<Login />} />
      <Route path='connect' element={<Connect />} />
      <Route path='user' element={<React.Suspense fallback='Loading Please Wait...'><User /></React.Suspense>}>
        <Route index element={<Dashboard />} />
        {/* <Route path='category' element={<Category />} /> */}
        <Route path='earn' element={<EarnNFT />} />
        <Route path='collections' element={<Collections />} />
        <Route path='notifications' element={<Notifications />} />
        <Route path='settings' element={<Settings />} />
      </Route>
      <Route path='*'element={<NoMatch />} />
    </Routes>
  );
}

export default App;