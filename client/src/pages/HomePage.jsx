import React from 'react';

const HomePage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <span className='text-2xl'>Inicio</span>

            <div className='bg-white max-w-md h-96 rounded-md'>
                <input type='text' className='w-full rounded-md text-black border-2 border-gray-200 shadow-md p-2 m-5 outline-none'/>
            </div>
        </div>
    );
}

export default HomePage;