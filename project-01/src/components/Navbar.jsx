import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between mx-10 h-18 items-center'>
            <div>
                <img src="/image/brand_logo.png" alt="" />
            </div>
            <div>
              <ul className='flex gap-5'>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTECT</li>
              </ul>
            </div>
            <div>
              <button className='bg-red-700 px-5 py-0.5 text-white'>Login</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar