import React from 'react';

const CountCard = ({ count, label }) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-6 text-center grow min-w-40'>
            <h1 className='text-3xl font-bold text-[#244d3f]'>{count}</h1>
            <p className='text-[#64748b] mt-1'>{label}</p>
        </div>
    );
};

export default CountCard;