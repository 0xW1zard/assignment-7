import React from 'react';
import { Pie, PieChart } from 'recharts';
import Footer from '../../components/footer/Footer';

const Stats = () => {
    const data = [
        { name: 'Text', value: 500, fill: 'blue' },
        { name: 'Call', value: 300, fill: 'green' },
        { name: 'Video Call', value: 200, fill: 'orange' }
    ];

    return (
        <div className='bg-[#f8fafc]'>
            <div className='container mx-auto py-16 '>
                <h1 className='text-3xl font-bold mb-10'>Friendship Analytics</h1>
                <div className='bg-white p-5 rounded-xl shadow-md mb-6'>
                    <h2 className='text-xl text-[#244d3f] mt-2'>By Interaction Type</h2>
                    <div className='w-fit mx-auto my-10'>
                        <div>
                            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
                                <Pie data={data} innerRadius="80%"
                                    outerRadius="100%"
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                />
                            </PieChart>
                        </div>
                        <div className='flex gap-4  justify-around mt-12'>
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