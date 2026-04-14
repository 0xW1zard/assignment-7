import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from 'react-router';


const Footer = () => {
    return (
        <div className='bg-[#244d3f] py-20'>
            <div className=' text-white text-center space-y-5 container mx-auto'>
                <h1 className='text-7xl  font-bold'>KeenKeeper</h1>
                <p className='text-base-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <h2 className='text-xl font-medium'>Social Links</h2>
                    <div className=' flex w-fit gap-2 mx-auto mt-4'>
                        <Link to="https://facebook.com" target='_blank' className="p-2.5 bg-white rounded-full text-black"><TiSocialFacebook /></Link>
                        <Link to="https://twitter.com" target='_blank' className="p-2.5 bg-white rounded-full text-black"><RiTwitterXLine /></Link>
                        <Link to="https://instagram.com" target='_blank' className="p-2.5 bg-white rounded-full text-black"><SlSocialInstagram /></Link>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-7 border-t border-[#fafafa7e] pt-4 px-4'>
                    <p className='text-sm text-[#fafafa7e]'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div>
                        <Link to="/#" className='text-sm text-[#fafafa7e] mx-2'>Terms of Service</Link>
                        <Link to="/#" className='text-sm text-[#fafafa7e] mx-2'>Cookie</Link>
                        <Link to="/#" className='text-sm text-[#fafafa7e] mx-2'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;