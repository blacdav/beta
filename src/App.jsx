import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="border-bottom border-primary">
        <header className='d-flex align-baseline justify-content-between w-75 m-auto p-4'>
          <h1>Beta</h1>
          <ul className='d-flex justify-content-between overflow-hidden'>
            <li>Home</li>
            <li>About us</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>

          <div className='d-flex'>
            <p>Q</p>
            <button className='py-1 ms-5 rounded-5'>Wallet Connect</button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
