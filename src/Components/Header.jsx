import React from 'react';
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="logo"></img>
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
      </div>
      <ul className='items-center justify-between hidden gap-6 text-gray-400 lg:flex font-lato'>
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Find Domains</a>
        </li>
        <li>
          <a href="#">Why Hoster</a>
        </li>
      </ul>
      <div className='items-center justify-center hidden gap-6 lg:flex font-lato'>
        <a href="# " className='text-gray-400'>Sign In</a>
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Join waitlist</button>
      </div>


      <div className='lg:hidden'>
        <FaBars className="relative" style={{left:'-10px'}}/>
      </div>
    </div>
  )
}

export default Header
