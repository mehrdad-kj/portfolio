import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#2fffff]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mehrdad Karami Jourabi
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front End Developer.
        </h2>
        <p className='text-[#8892b0] py-6 max-w-[800px]'>
        “The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.” _ Steve Jobs
        </p>
        
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2fffff] hover:border-[#2fffff]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;