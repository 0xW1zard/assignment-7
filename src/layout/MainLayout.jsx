import React from 'react';
import Nav from '../components/Navbar/Nav';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;