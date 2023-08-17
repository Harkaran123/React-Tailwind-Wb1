import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

const Footer = () => {
    return (
        <div className='w-full py-[40px] px-2 md:px-20'>
            <div className="row w-[100%] md:w-[90%] flex flex-col md:flex-row m-auto justify-evenly items-center text-[white]">
                <div className="col-1 w-[200px] h-[200px]  px-5  leading-8">
                    <h1 className='text-xl text-[#00df9a]'>React.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="social-icons flex justify-between mt-6">
                        <BsFacebook size={35} />
                        <BsInstagram size={35} />
                        <BsTwitter size={35} />
                    </div>
                </div>


                <div className=" text-[10px] md:text-[13px] col-2 w-[80%] md:w-[60%] h-[200px] flex justify-between leading-9 md:ml-9">
                    <div className="other">
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                    </div>
                    <div className="other">
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                    </div>
                    <div className="other">
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                        <h2>Lorem Lorem</h2>
                    </div>
                </div>
            </div>
            <p className='text-[white] text-center text-sm'>copyright Harkaran</p>
        </div>
    )
}

export default Footer
