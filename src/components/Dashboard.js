import React from 'react';

export const Dashboard = () => {
  return (
    <div className='relative h-[90vh]'>
      <video src='https://videos.pexels.com/video-files/8811079/8811079-hd_1920_1080_25fps.mp4' autoPlay muted loop className='h-full w-full object-cover ' ></video>
      <div className='absolute h-full w-full top-0 left-0 heroPage flex'>
        <h1 className='text-white my-auto mx-10'><span className='font-cinzel text-2xl'>Hello Every One</span> <br/>
        <span className='font-cinzel text-2xl'>Welcome to </span><span className='font-Merienda text-4xl text-[#df35f2] text-shadow'>AKILA</span> <span className='font-Satisfy text-3xl'> Restaurant</span>
        <p className='font-Satisfy text-2xl text-green-600'>King of tasty foods</p></h1>
      </div>
    </div>
  )
}
