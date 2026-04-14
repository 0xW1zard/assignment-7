import React, { use } from 'react';
import Hero from '../../components/hero/Hero';
import FriendCard from '../../components/friendsCard/FriendCard';
import Footer from '../../components/footer/Footer';

const friends = fetch('/datas.json')
    .then(res => res.json())

const Home = () => {

    const datas = use(friends);

    return (
        <>
            <div className='bg-[#f8fafc] px-4 pb-6'>
                <Hero></Hero>
                <div className='container mx-auto'>
                    <h1 className='text-[#1f2937] font-bold text-2xl'>Your Friends</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {
                            datas.map((data) => <FriendCard key={data.id} data={data}></FriendCard>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;