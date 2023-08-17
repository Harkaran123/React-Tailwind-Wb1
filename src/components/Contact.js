import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className='w-[80%] mib-h-[50vh] flex flex-col md:flex-row justify-between items-center text-[white] m-auto py-[50px] gap-6' >
            <div className='w-[100%]  md:w-[50%]'>
                <h1 className='text-[30px]'>Want tip & trick to optimize your flow</h1>
                <h5>Sign up toour news letter to stay up to date.</h5>
            </div>
            <div className='w-[100%] md:w-[40%]'>
                <div className= "flex flex-col md:flex-row justify-center gap-8">
                    <input  className="py-4 px-[23px] rounded-sm text-[black]" type="text" placeholder='Enter Your Email' />
                    <button className='py-4 px-[29px] bg-[#00df9a] rounded-sm'>Notify Me</button>
                </div>

                <div className='mt-4 md:ml-8'>
                    <h4>We care about your data</h4>
                    <a className='text-[#00df9a]' href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
