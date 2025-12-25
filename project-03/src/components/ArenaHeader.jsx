import React, { useState } from 'react'

const ArenaHeader = (
    {selectNumber, setSelectNumber, score, error , setError}
    ) => {
    const arr = [1, 2, 3, 4, 5, 6]
  

        const numberSelectorHandler =(value)=>{
            setSelectNumber(value)
            setError("")
        }


    return (
            
                <div className="flex justify-between p-10 h-60">
                    <div className="flex flex-col w-50 h-full items-center justify-center">
                        <h1 className='text-center text-9xl'>{score}</h1>
                        <h1 className='text-center text-2xl'>Total Score</h1>
                    </div>
                    <div className="w-1/2 flex flex-col h-full justify-between">
                        <p className="text-red-500 self-end pr-12">{error}</p>
                        <div className="flex justify-evenly px-10 pt-5">
                            {arr.map((value, i) => (
                                <div onClick={() => numberSelectorHandler(value)} key={i} className={`h-20 w-20 border text-7xl text-center ${selectNumber === value ? "bg-black text-white" : ""}`}>{value}</div>
                            ))}

                        </div>
                        <h1 className='self-end px-10 text-2xl'>
                            <strong>Select Number</strong>
                        </h1>
                    </div>
                </div>

            
    )
}

export default ArenaHeader