import React, { use } from 'react';
import Hero from '../../components/hero/Hero';
import FriendCard from '../../components/friendsCard/FriendCard';

const friends = fetch('/datas.json')
    .then(res => res.json())

const Home = () => {

    const datas = use(friends);

    return (
        <div className='bg-[#f8fafc]'>
            <Hero></Hero>
            <div className='container mx-auto'>
                <h1 className='text-[#1f2937] font-bold text-2xl'>Your Friends</h1>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        datas.map((data)=> <FriendCard key={data.id} data={data}></FriendCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;