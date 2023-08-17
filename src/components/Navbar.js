import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
function Navbar() {

  const [nav, setNav] = useState(false);

  return (
    <div className= 'text-white flex justify-between items-center w-full h-24 px-16'>
      <h1 className='font-bold text-3xl text-[#00df9a]'>React.</h1>
        <div className="navbar hidden md:flex gap-20 text-[18px]">
            <a href=""><h1 className='text-[#00df9a]'>Home</h1></a>
            <a href=""><h1 className='hover:text-[#00df9a]'>About</h1></a>
            <a href=""><h1 className='hover:text-[#00df9a]'>Services</h1></a>
            <a href=""><h1 className='hover:text-[#00df9a]'>Contact</h1></a>
        </div>

        <div onClick={() => setNav(!nav)} className='md:hidden'> 
              { nav ? < RxCross1  size={24}/> : <RxHamburgerMenu size={24} />}
        </div>
        
        <div className={ nav ? 'absolute min-h-screen top-20 w-full left-[0] px-9 py-9 ease-in duration-500 bg-[black] z-10' : 'absolute min-h-screen top-20  w-full left-[-100%] px-9 py-9 ease-in duration-500 bg-black z-10' }>
        
            
            {/* <h1 className='font-bold text-3xl text-[#00df9a] mb-5 ml'>React.</h1> */}
            <div className="navbar flex flex-col gap-8  w-40 ml-10 pt-12">
                <h1 className='text-xl border-b-2 pb-3'><a href="">Home</a></h1>
                <h1 className='text-xl border-b-2 pb-3'><a href="">About</a></h1>
                <h1 className='text-xl border-b-2 pb-3'><a href="">Services</a></h1>
                <h1 className='text-xl border-b-2 pb-3'><a href="">Contact Us</a></h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar
