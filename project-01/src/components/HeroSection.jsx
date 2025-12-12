import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-evenly h-screen ml-40 mt-15'>
        <div className=' w-1/2 '>
            <h1 className='text-8xl'><strong>YOUR FEET DESERVE 
                <br />
                THE BEST</strong></h1>
            <p className='mt-5'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
            <div className='flex items-center gap-10 mt-5'>
                <button className='bg-red-600 px-5 py-2 text-white text-xl leading-none'>Shop Now</button>
                <button className='px-5 py-2 text-xl text-zinc-600 border-2 border-zinc-400 leading-none'>Category</button>
            </div>
            <p className='mt-7'>Also Avalable On</p>
            <div className='flex gap-2 mt-5'>
                <img src="/image/flipkart.png" alt="" />
                <img src="/image/amazon.png" alt="" />
            </div>
        </div>
        <div className='flex justify-end w-1/2 my-15'>
            <img className='' src="/image/shoe_image.png" alt="" />
        </div>
    </div>
  )
}

export default HeroSection  