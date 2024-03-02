// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wolf from '../public/'

function App() {
  return (
    <div className="text-light bgimg1">
      <div className="border-2 border-bottom border-primary">
        <header className='d-flex align-baseline justify-content-between container pt-5 pb-4'>
          <h1>Beta</h1>
          <ul className='navbar-nav d-flex flex-lg-row gap-5 overflow-hidden'>
            <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>About Us</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>Community</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>Contact</a></li>
          </ul>

          <div className='d-flex'>
            <p>Q</p>
            <button className='btn text-light py-0 ms-5 border-2 border-primary bg-transparent rounded-5'>Wallet Connect</button>
          </div>
        </header>
      </div>

      <div className='container d-md-flex align-content-center'>
        <div className='w-50 py-5 pe-5'>
          <h1>Get Certified And <span className='text-[#209ED9]'>Earn</span> NFT's.</h1>
          <p>
            A platform that enables learners to earn and display non-fungible token(NFT) certificates as proof of their 
            educational archievements.
          </p>
          <div>
            <button className='btn text-light px-4 py-1 me-4 border-2 border-primary bg-transparent rounded-5'> Sign Up</button>
            <button className='btn text-light px-4 py-1 border-2 border-primary bg-transparent rounded-5'> Login</button>
          </div>
        </div>

        <div className='visually-hidden'>
          <p>nbdfkjngksngbdfizbkbdfbkbskisfbusfbvih</p>
        </div>
      </div>

      <div className='container d-flex justify-content-between px-4'>
        <div className='fw-semibold text-center'>
          <p className="bg-primary py-1 px-3 rounded-2 mb-0">TOTAL ACTIVE USERS</p>
          <p className='fs-3 text-primary'>100,000+</p>
        </div>
        <div className='fw-semibold text-center'>
          <p className="bg-primary py-1 px-3 rounded-2 mb-0">NFT CERTIFICATE CLAIMERS</p>
          <p className='fs-3 text-primary'>700,945+</p>
        </div>
        <div className='fw-semibold text-center'>
          <p className="bg-primary py-1 px-3 rounded-2 mb-0">NFT CERTIFICATE ISSUERS</p>
          <p className='fs-3 text-primary'>55+</p>
        </div>
      </div>
    </div>
  );
}

export default App;
