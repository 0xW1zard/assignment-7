import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import TimeLine from '../pages/timeline/TimeLine';
import Home from '../pages/home/Home';
import Stats from '../pages/stats/Stats';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/timeline',
                element: <TimeLine />
            },
            {
                path: '/stats',
                element: <Stats/>
            }
        ],
        errorElement: <div>404 Not Founddddddddddddddddddddddddddddddddddddd</div>
    }
]);