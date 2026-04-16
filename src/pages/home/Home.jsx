import React, { Suspense, useEffect, useState } from 'react';
import Hero from '../../components/hero/Hero';
import FriendCard from '../../components/friendsCard/FriendCard';
import Footer from '../../components/footer/Footer';


const Home = () => {

    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/datas.json').then(res => res.json()).then(data => {
            setDatas(data);
            setLoading(false);
        })
            .catch(() => setLoading(false));

    }, [])


    return (
        <>
            <div className='bg-[#f8fafc] px-4 pb-6'>
                <Hero datas={datas}></Hero>
                <div className='container mx-auto'>
                    <h1 className='text-[#1f2937] font-bold text-2xl'>Your Friends</h1>
                    <div className='pb-10'>
                        {
                            loading && <div className="flex items-center justify-center">
                                <span className="loading loading-spinner loading-xl"></span>
                            </div>
                        }
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6'>
                            {datas.map((data) => (
                                <FriendCard key={data.id} data={data} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;