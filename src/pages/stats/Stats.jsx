import React, { useContext } from 'react';
import { Pie, PieChart } from 'recharts';
import Footer from '../../components/footer/Footer';
import { FriendContext } from '../../components/context/FriendProvider';

const Stats = () => {

    const { intaList } = useContext(FriendContext);

    let TextValue = 0;
    let CallValue = 0;
    let VideoValue = 0;


    intaList.forEach(interaction => {
        if (interaction.type === 'text') {
            TextValue += 1;
        } else if (interaction.type === 'call') {
            CallValue += 1;
        } else if (interaction.type === 'video') {
            VideoValue += 1;
        }
    });


    const data = [
        { name: 'Text', value: TextValue, fill: 'blue' },
        { name: 'Call', value: CallValue, fill: 'green' },
        { name: 'Video Call', value: VideoValue, fill: 'orange' }
    ];

    return (
        <div className='bg-[#f8fafc]'>
            <div className='container mx-auto py-16 px-3 xl:px-0 '>
                <h1 className='text-3xl font-bold mb-10'>Friendship Analytics</h1>
                <div className='bg-white p-5 rounded-xl shadow-md mb-6'>
                    <h2 className='text-xl text-[#244d3f] mt-2'>By Interaction Type</h2>
                    <div className='w-fit mx-auto my-10'>
                        {
                            intaList.length === 0 ?
                                <div className="flex flex-col items-center justify-center py-16 bg-white border-2 border-dashed border-gray-200 rounded-2xl">
                                    <div className="text-5xl mb-4 opacity-20">🧮</div>
                                    <h3 className="text-xl font-semibold text-gray-500 px-10">Add Interactions to see Analytics</h3>
                                </div>
                                :
                                <div>
                                    <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
                                        <Pie data={data} innerRadius="80%"
                                            outerRadius="100%"
                                            cornerRadius="50%"
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        />
                                    </PieChart>
                                </div>
                        }
                        <div className='flex gap-x-10 md:gap-x-20 justify-center mt-12'>
                            <div className='flex items-center justify-center'>
                                <div className='w-4 h-4 bg-blue-600 rounded-full mr-2'></div>
                                <p>Text</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='w-4 h-4 bg-green-500 rounded-full mr-2'></div>
                                <p>Call</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='w-4 h-4 bg-orange-400 rounded-full  mr-2'></div>
                                <p>Video Call</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Stats;