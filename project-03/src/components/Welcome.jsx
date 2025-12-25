import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="h-110 w-300 flex justify-between items-center">
                <div className="w-1/2">
                    <img src="/image/dices.png" alt="" />
                </div>
                <div className="w-1/2 text-center flex flex-col">
                    <h1 className="text-8xl"><strong>DICE GAME</strong></h1>
                    <Link to="/arena" className="self-end">
                        <button className="px-15 py-1 mr-10 mt-3 cursor-pointer bg-black text-white rounded hover:bg-blue-600">Play Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome