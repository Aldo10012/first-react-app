import logo from './logo.svg';
import './App.css';

import Title from './components/Title.js';
import POPOSList from './components/POPOSList';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import POPOSDetails from './components/POPOSDetails'

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      {/* <POPOSList />
      <Footer /> */}
    </div>
  );
}

export default App;
