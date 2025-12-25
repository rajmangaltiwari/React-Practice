import { useState } from "react"
import ArenaHeader from "./ArenaHeader"
import ArenaRollDice from "./ArenaRollDice"


const Arena = () => {
  const [score, setScore] = useState(0)
  const [error, setError] = useState("")
  const [selectNumber, setSelectNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)

  const generateRandomDice = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectNumber) {
            setError("Please select a number before rolling the dice.")
            return
        }
        const newDice = generateRandomDice(1, 7)
        setCurrentDice(newDice)

        if (selectNumber === newDice) {
            setScore((prev) => prev + newDice)
        }
        else if(score <= 2) {
            setScore(0)
        }
         else {
            setScore((prev) => prev - 2)
        }
        setSelectNumber(undefined)
    }

  return (
    <div className="flex flex-col">
      <ArenaHeader 
      selectNumber={selectNumber} setSelectNumber={setSelectNumber}
      score={score} error={error} setError={setError} />
      <ArenaRollDice setScore={setScore} currentDice={currentDice} rollDice={rollDice} />
    </div>  
  )
}

export default Arena