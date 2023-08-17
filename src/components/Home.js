import React from 'react'
import Typed from 'react-typed';

function Home() {
  return (
    <div className='text-white flex justify-center mt-[10%] w-full min- h-[80vh]' >
      <div className='flex-col justify-center text-center'>
        <h5 className='font-[400] text-[25px] text-[#00df9a]'>Growing with AI</h5>
        <h1 className='text-[65px]'>Grow with data</h1>
        <div className='flex justify-center gap-3 text-[20px]'>
            <p>Fast, Flexible for</p>
            <Typed strings={["BTS", "PLAN", "CLUE"]} typeSpeed={40} backSpeed={50}/>
        </div>
        <p className='py-[10px]'>Monitor Your Business with AI Tools</p>
        <button className='py-[15px] px-[35px] bg-[#fff] text-[#000] rounded-[5px] hover:bg-[#00df9a] hover:ease-in duration-100 mt-[8px]'>Get Started</button>
      </div>
    </div>
  )
}

export default Home
