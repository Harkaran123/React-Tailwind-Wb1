import React from 'react'

function Analytics() {
    return (
        <div className='w-full bg-white'>
            <div className='w-[80%] m-auto py-[50px] flex flex-col md:flex-row justify-between items-center text-[black] gap-[40px] '>
                <div className=" w-[90%] md:w-[40%] h-[400px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZ1eEi3hCrArVp9ECPB40ZS2rvSmr7v0mPQ&usqp=CAU')] bg-center bg-cover"></div>
                <div className=' w-[90%]  md:w-[50%] leading-8 text-centre '>
                    <h4 className='text-[#00df9a] text-[30px] font-[500] pb-[10px]'>Grow with Data Analytics</h4>
                    <h2>Data Analytics is Future</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et impedit, excepturi doloribus perferendis sint vitae temporibus, corporis cum mollitia voluptas tempore veritatis esse sequi, rerum fugit nemo fuga quasi? Quos.</p>
                    <button className='py-[10px] px-[33px] bg-[black] text-[white] mt-[20px] rounded-[3px] hover:bg-[#00df9a] hover:text-[black] hover:border-black ease-in duration-150'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
