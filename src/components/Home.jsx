import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#071330]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#C3CEDA]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#C3CEDA] hover:animate-pulse'>
          Mehrdad Karami Jourabi
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#738FA7] hover:animate-pulse'>
          I'm a Front End Developer.
        </h2>
        <div className='quotes text-[#C3CEDA] py-6 max-w-[800px] text-xl'>
          <span> “The </span>
          <span> only  </span>
          <span> way  </span>
          <span> to do </span>
          <span> great </span>
          <span> work  </span>
          <span> is to  </span>
          <span> love   </span>
          <span> what   </span>
          <span> you    </span>
          <span> do.    </span>
          <span> If    </span>
          <span> you    </span>
          <span> haven’t     </span>
          <span> you    </span>
          <span> found    </span>
          <span> it yet,    </span>
          <span> keep     </span>
          <span> looking.     </span>
          <span> Don’t     </span>
          <span> settle.”     </span>
          <span> _     </span>
          <span> Steve      </span>
          <span> Jobs     </span>
        </div>
        
        <div>
          <Link to='work' smooth={true} duration={500}>
           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C3CEDA] hover:border-[#C3CEDA] hover:text-black'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;