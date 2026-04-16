import React, { useContext } from 'react';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { PiArchiveBold } from "react-icons/pi";
import { MdDeleteForever, MdHistory, MdOutlineCall, MdOutlineMessage } from "react-icons/md";
import { Link, useLoaderData, useParams } from 'react-router';
import { BiVideo } from 'react-icons/bi';
import Footer from '../../components/footer/Footer';
import { FriendContext } from '../../components/context/FriendProvider';
import Interaction from '../../components/InteractionsCard/Interaction';

const FriendDetails = () => {

    const { handleCall, handleText, handleVideoCall, intaList } = useContext(FriendContext)


    const params = useParams();
    const friend = useLoaderData().find(f => f.id === parseInt(params.id));

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;

    const stat = (currentStatus) => {
        const base = "w-fit py-2 px-3.5 rounded-full text-sm font-bold capitalize ";

        if (currentStatus === "ontrack") return base + "bg-[#244d3f] text-white";
        if (currentStatus === "almost due") return base + "bg-yellow-500 text-white";
        if (currentStatus === "overdue") return base + "bg-red-500 text-white";

        return base;
    };

    const FriendInta = intaList.filter(item => item.id === friend.id);

    return (
        <div>
            <div className='bg-[#f8fafc] px-4 py-14'>
                <div className='container mx-auto flex flex-col md:flex-row gap-6 max-w-6xl'>
                    <div>
                        <div className='bg-white p-5 rounded-xl shadow-md text-center space-y-3 flex flex-col items-center'>
                            <img className='rounded-full' src={picture} alt={name} />
                            <h1 className='font-semibold text-xl'>{name}</h1>
                            <div className={stat(status)}>{status}</div>
                            <div className='flex gap-2 flex-wrap justify-center'>
                                {
                                    tags.map((i, index) => <div className='text-[#244d3f] font-semibold py-2 px-3.5 bg-[#cbfadb] rounded-4xl ' key={index}>{i}</div>)
                                }
                            </div>
                            <p className='text-[#64748b] italic'>"{bio}"</p>
                            <p className='text-[#64748b] text-sm'>Preferred: {email}</p>
                        </div>
                        <div className='mt-4 space-y-2 text-center'>
                            <div className="p-3 bg-white border border-base-300 rounded-lg flex justify-center items-center gap-2 "><RiNotificationSnoozeLine />Snooze 2 Weeks</div>
                            <div className="p-3 bg-white border border-base-300 rounded-lg flex justify-center items-center gap-2 "><PiArchiveBold />Archive</div>
                            <div className="p-3 bg-white border border-base-300 rounded-lg text-red-500 flex justify-center items-center gap-2 "><MdDeleteForever />Delete</div>
                        </div>
                    </div>

                    <div className='w-full md:w-7/10 space-y-4'>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                            <div className='bg-white p-5 rounded-xl shadow-sm text-center  '>
                                <h2 className='text-3xl font-bold text-[#244d3f]'>{days_since_contact}</h2>
                                <p className='text-[#64748b] text-sm mt-1'>Days Since Contact</p>
                            </div>
                            <div className='bg-white p-5 rounded-xl shadow-sm text-center '>
                                <h2 className='text-3xl font-bold text-[#244d3f]'>{goal}</h2>
                                <p className='text-[#64748b] text-sm mt-1'>Goal (Days)</p>
                            </div>
                            <div className='bg-white p-5 rounded-xl shadow-sm text-center '>
                                <h2 className='text-2xl font-bold text-[#244d3f]'>{next_due_date}</h2>
                                <p className='text-[#64748b] text-sm mt-1'>Next Due</p>
                            </div>
                        </div>

                        <div className='bg-white p-5 rounded-xl shadow-sm '>
                            <div className='flex justify-between items-center mb-2'>
                                <h3 className='font-semibold text-[#244d3f]'>Relationship Goal</h3>
                                <button className='px-4 py-1.5 bg-gray-50 border border-gray-200 text-sm rounded-md font-medium hover:bg-gray-100'>Edit</button>
                            </div>
                            <p className='text-[#64748b] text-sm'>Connect every <strong className='text-gray-800'>{goal} days</strong></p>
                        </div>

                        <div className='bg-white p-5 rounded-xl shadow-sm '>
                            <h3 className='font-semibold text-[#244d3f] mb-4'>Quick Check-In</h3>
                            <div className='grid grid-cols-3 gap-4'>
                                <button onClick={() => handleCall(friend)} className='py-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-200 hover:shadow-lg text-gray-700 transition'>
                                    <MdOutlineCall size={24} />
                                    <span className='text-sm font-medium'>Call</span>
                                </button>
                                <button onClick={() => handleText(friend)} className='py-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-200 hover:shadow-lg text-gray-700 transition'>
                                    <MdOutlineMessage size={24} />
                                    <span className='text-sm font-medium'>Text</span>
                                </button>
                                <button onClick={() => handleVideoCall(friend)} className='py-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-gray-200 hover:shadow-lg text-gray-700 transition'>
                                    <BiVideo size={24} />
                                    <span className='text-sm font-medium'>Video</span>
                                </button>
                            </div>
                        </div>


                        <div className='bg-white p-5 rounded-xl shadow-sm'>
                            <div className='flex justify-between items-center mb-4'>
                                <h3 className='font-semibold text-[#244d3f]'>Recent Interactions</h3>
                                <Link to={'/timeline'} className='px-3 py-1.5 border border-gray-200 rounded-md flex items-center gap-1.5 text-sm bg-gray-50 font-medium hover:bg-gray-100'>
                                    <MdHistory size={16} /> Full History
                                </Link>
                            </div>
                            <div>
                                { FriendInta.map((item) => (
                                    <Interaction key={item.keyId} data={item} />
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FriendDetails;