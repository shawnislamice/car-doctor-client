import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
      <div>
        <div className="container mx-auto max-w-screen-xl">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </div>
        <div className="bg-[#151515]">
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;