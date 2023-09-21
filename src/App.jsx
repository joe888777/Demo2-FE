import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages

import MockGraph from './pages/mockGraph';
import MockGraph2D from './pages/mockGraph2D';
import CurrentTransaction from './pages/CurrentTxGraph';
import CurrentTransaction2D from './pages/CurrentTxGraph2D';
import Footer from "./components/footer.jsx";
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
      <Routes>
        <Route exact path="/mock-2d" element={<MockGraph2D/>} />
      </Routes>
      <Routes>
        <Route exact path="/current-tx-2d" element={<CurrentTransaction2D/>} />
      </Routes>
      <Footer/>
      </RecoilRoot>
    </>
  );
}

export default App;
