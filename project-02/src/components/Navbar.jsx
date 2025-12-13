
const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between mx-25 h-18 items-center">
            <div>
                <img src="/images/logo.png" alt="" />
            </div>
            <div>
                <ul className="flex gap-5">
                    <li className="cursor-pointer">HOME</li>
                    <li className="cursor-pointer">ABOUT</li>
                    <li className="cursor-pointer">CONTECT</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar