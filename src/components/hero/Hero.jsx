import React from 'react';
import CountCard from '../heroCountCard/CountCard';

const Hero = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="hero my-3 ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-[#64748b]">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                            relationships that matter most.
                        </p>
                        <button className="btn bg-[#244d3f] text-white"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        </span>Add a Friend</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2.5'>
                <CountCard count={10} label="Total" />
                <CountCard count={2} label="Total" />
                <CountCard count={10} label="Total" />
                <CountCard count={10} label="Total" />
            </div>
            <div className="divider my-8    "></div>
        </div>

    );
};

export default Hero;