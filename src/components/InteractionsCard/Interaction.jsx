import React from 'react';
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";


const Interaction = ({ data }) => {
    const { type, friendName, date } = data;

    const getIcon = () => {
        if (type === 'text') return <BsFillChatLeftTextFill />;
        if (type === 'video') return <FaVideo />;
        if (type === 'call') return <IoCall />;
        return <TbArrowsRandom />; 
    };

    return (
        <div className='p-4 mb-3 border border-gray-200 rounded-lg bg-white flex items-center gap-4'>
            
            <div className='text-3xl drop-shadow-sm'>
                {getIcon()}
            </div>
            
            <div>
                <h4 className='font-semibold text-gray-800 text-base'>
                    {type} <span className='text-gray-500 font-normal'>with {friendName}</span>
                </h4>
                <p className='text-[#64748b] text-sm mt-0.5'>{date}</p>
            </div>
        </div>
    );
};

export default Interaction;