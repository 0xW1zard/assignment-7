import React, { useContext, useState } from 'react';
import Footer from '../../components/footer/Footer';
import { FaChevronDown } from "react-icons/fa";
import { FriendContext } from '../../components/context/FriendProvider';
import Interaction from '../../components/InteractionsCard/Interaction';


const TimeLine = () => {
    const { intaList } = useContext(FriendContext);
    const [sort, setSort] = useState('all');

    const filteredList = sort === 'all' ? intaList : intaList.filter(item => item.type === sort);

    return (
        <div className='bg-[#f8fafc] flex flex-col min-h-screen'>
            <div className='container mx-auto py-16 grow px-3 md:px-0'>
                <div>
                    <h1 className='text-5xl font-semibold'>TimeLine</h1>

                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn bg-white border-gray-200 mt-6 mb-1 text-[#64748b]">
                            {sort === 'all' ? 'Filter timeline' : `Show: ${sort}`}
                            <FaChevronDown className='ml-2' />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-md border border-gray-100">
                            <li onClick={() => setSort('all')}><a>All Interactions</a></li>
                            <li onClick={() => setSort('text')}><a>Texts</a></li>
                            <li onClick={() => setSort('call')}><a>Calls</a></li>
                            <li onClick={() => setSort('video')}><a>VideoCalls</a></li>
                        </ul>
                    </div>

                    <div className='mt-8 space-y-4'>
                        {
                            filteredList.length === 0 ?
                                <div className="flex flex-col items-center justify-center py-16 bg-white border-2 border-dashed border-gray-200 rounded-2xl">
                                    <div className="text-5xl mb-4 opacity-20">📭</div>

                                    <h3 className="text-xl font-bold text-gray-700">No records found</h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {sort === 'all'
                                            ? "Your timeline is looking a bit empty."
                                            : `No ${sort} interactions to show here.`}
                                    </p>
                                </div> :
                                filteredList.map((item) => (
                                    <Interaction key={item.keyId} data={item} />
                                ))

                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TimeLine;