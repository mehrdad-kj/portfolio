import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#071330] flex justify-center items-center pt-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-10'>
        <form method='POST' action="https://getform.io/f/c51fe967-d434-46fd-942f-5b7827d83406" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#738FA7] text-[#C3CEDA]'>Contact</p>
                <p className='text-[#C3CEDA] py-4'>Submit the form below or shoot me an email - mehrdadk.jourabi@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#C3CEDA] hover:border-[#C3CEDA] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </div>  
    </div>
  )
}

export default Contact