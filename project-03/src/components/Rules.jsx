import React from 'react'

const Rules = () => {
  return (
    <div className='p-5 bg-sky-200 my-6 max-w-2/3 flex flex-col mx-auto rounded justify-center '>
        <h1 className='text-2xl font-bold mb-4'>How to play dice game</h1>
        <div>
            <p className=''>Select any number.</p>
            <p className=''>Click on dice image.</p>
            <p className=''>after click on dice if selected number is equal to dice number you
          will get same point as dice.</p>
            <p className=''>if you get wrong guess then 2 point will be dedcuted.</p>
        </div>
    </div>
  )
}

export default Rules