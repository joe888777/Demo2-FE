import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import MockGraph from './pages/mockGraph';
import CurrentTransaction from './pages/CurrentTxGraph';
import Footer from "./components/footer";
import Header from './partials/Header';
import WelcomeBanner from './partials/dashboard/WelcomeBanner';
import {RecoilRoot} from 'recoil';
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <RecoilRoot>
    <Header sidebarOpen={false} setSidebarOpen={()=>{}} />
    <WelcomeBanner/>
      <Routes>
        <Route exact path="/" element={<MockGraph />} />
      </Routes>
      <Routes>
        <Route exact path="/current-tx" element={<CurrentTransaction />} />
      </Routes>
      <Footer/>
      </RecoilRoot>
    </>
  );
}

export default App;
