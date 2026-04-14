import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {

    const link = (
        <>
            <li><NavLink to={"/"} className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : " text-[#64748B] "}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </span>Home</NavLink></li>
            <li><NavLink to={"/timeline"} className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : "text-[#64748B] "}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </span>Timeline</NavLink></li>
            <li><NavLink to={"/stats"} className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : "text-[#64748B] "}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            </span>Stats</NavLink></li>
        </>
    )

    return (
        <div className=" bg-base-100 shadow-sm sticky top-0 z-10">
            <div className='navbar container mx-auto'>
                <div className="navbar-start">

                    <a className="text-2xl text-[#244D3F] font-semibold"><span className='text-[#1F2937] font-extrabold'>Keen</span>Keeper</a>
                </div>
                <div className="navbar-end">
                    <div className='hidden md:flex'>
                        <ul className="menu menu-horizontal px-1 space-x-1.5">
                            {link}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-2.5 shadow space-y-1.5 ">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Nav;