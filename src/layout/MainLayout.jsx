import React from 'react';
import Nav from '../components/Navbar/Nav';
import { Outlet, ScrollRestoration } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <ScrollRestoration />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;