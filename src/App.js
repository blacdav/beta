import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Connect from './pages/Connect';
import NoMatch from './pages/NoMatch';
// import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';
import EarnNFT from './pages/EarnNFT'
import Collections from './pages/Collections';
import Notifications from './pages/Notifications';
const Landing = React.lazy(() => import('./pages/Landing'))
const User = React.lazy(() => import('./pages/User'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<React.Suspense fallback='Loading...'><Landing /></React.Suspense>} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='connect' element={<Connect />} />
      <Route path='user' element={<React.Suspense fallback='Loading Please Wait...'><User /></React.Suspense>}>
        <Route index element={<Dashboard />} />
        <Route path='category' element={<Category />} />
        <Route path='earn' element={<EarnNFT />} />
        <Route path='collections' element={<Collections />} />
        <Route path='notifications' element={<Notifications />} />
      </Route>
      <Route path='*'element={<NoMatch />} />
    </Routes>
  );
}

export default App;