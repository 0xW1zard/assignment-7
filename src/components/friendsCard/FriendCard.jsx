import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ data }) => {

    const {id, name, picture, tags, status, days_since_contact } = data;


    const stat = (currentStatus) => {
        const base = "w-fit py-2 px-3.5 rounded-full text-sm font-bold capitalize ";
        
        if (currentStatus === "ontrack") return base + "bg-[#244d3f] text-white";
        if (currentStatus === "almost due") return base + "bg-yellow-500 text-white";
        if (currentStatus === "overdue") return base + "bg-red-500 text-white";
        
        return base;
    };


    return (
        <Link to={`/friend/${id}`} className='flex flex-col items-center gap-3 bg-white p-5 rounded-xl shadow-md text-center space-y-1.5 hover:shadow-xl transition-shadow duration-200'>
            <img className='rounded-full mt-2' src={picture} alt={name} />
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <p className='text-[#64748b] text-[14px]'>{days_since_contact}d Ago</p>
            <div className='flex gap-2 flex-wrap justify-center'>
                {
                    tags.map((i, index)=> <div className='text-[#244d3f] font-semibold py-2 px-3.5 bg-[#cbfadb] rounded-4xl ' key={index}>{i}</div> )
                }
            </div>
            <div className={stat(status)}>{status}</div>
        </Link>
    );
};

export default FriendCard;