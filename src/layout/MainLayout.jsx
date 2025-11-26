import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;