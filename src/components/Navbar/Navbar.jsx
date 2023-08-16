import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-between bg-gray-300'>
            <h1 className='m-0 p-0'>Facebak</h1>
            <ul className="flex gap-3 justify-center  p-3">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/login"}>login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;