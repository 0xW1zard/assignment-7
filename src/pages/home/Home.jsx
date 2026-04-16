import React, { Suspense, use } from 'react';
import Hero from '../../components/hero/Hero';
import FriendCard from '../../components/friendsCard/FriendCard';
import Footer from '../../components/footer/Footer';


const friendsPromise = fetch('/datas.json').then(res => res.json());

const FriendList = () => {
    const friendsData = use(friendsPromise);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6'>
            {friendsData.map((data) => (
                <FriendCard key={data.id} data={data} />
            ))}
        </div>
    );
};

const Home = () => {

    const datas = use(friendsPromise);

    return (
        <>
            <div className='bg-[#f8fafc] px-4 pb-6'>
                <Hero datas={datas}></Hero>
                <div className='container mx-auto'>
                    <h1 className='text-[#1f2937] font-bold text-2xl'>Your Friends</h1>
                    <div>
                    <Suspense fallback={<div className='col-span-full text-center py-10 font-medium text-gray-500'>Loading friends...</div>}>
                            
                            <FriendList />

                        </Suspense>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;