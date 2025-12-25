import React, { useState } from 'react'
import { FaArrowDown } from "react-icons/fa";
import Rules from './Rules';

const ArenaRollDice = ({currentDice, rollDice, setScore}) => {
    const [showRule, setShowRule] = useState(false)
    const resetScore = ()=>{
        setScore(0)
    }
    const toggleRules = () => {
        setShowRule(!showRule)
    }

  return (
    <div className='flex justify-center flex-col items-center'>
        <div onClick={rollDice} className='cursor-pointer'>
        <img src={`/image/dice_${currentDice}.png`} alt={`dice_${currentDice}`} />
        </div>
        <p className='text-xl'>Click On Dice To Roll</p>
        <button className='mt-5 px-5 py-1.5 border hover:bg-black hover:text-white rounded cursor-pointer' onClick={resetScore}>Reset Game</button>
        <button onClick={toggleRules} className='mt-3 px-5 py-1.5 bg-black text-white rounded cursor-pointer flex items-center gap-2'>Show Rules <FaArrowDown /></button>
        {showRule && <Rules />}
    </div>
  )
}

export default ArenaRollDice