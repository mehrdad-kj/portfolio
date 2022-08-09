import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-[80%] bg-[#071330] text-[#C3CEDA]'>
      <div className='flex flex-col justify-center items-center w-full h-full py-10'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#738FA7]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' text-4xl font-bold'>
              <p>Hi. I'm Mehrdad, nice to meet you. Please take a look around.</p>
            </div>
            <div className='text-xl pb-[50px]'>
              <p>
              I’m passionate about front-end development. I work hard, 
              I care about writing clean code and I genuinely love to learn. I’m currently looking for the right 
              opportunity as a junior developer to work in an environment that will help me 
              progress to a competent front-end developer.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;