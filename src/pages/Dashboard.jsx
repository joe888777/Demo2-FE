import React, { useState } from 'react';
import { GRAPH_URL } from '../core/setting';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import Bars from '../partials/dashboard/Bars';
import Footer from '../components/Footer';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className='main min-h-screen'>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />
            <Bars />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}


            </div>

            {/* Cards */}
            <div className="">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              
            </div>

          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default Dashboard;