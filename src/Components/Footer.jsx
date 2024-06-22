import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex gap-6 text-gray-400 font-lato">
        <li>
          <a href="a">Facebook</a>
        </li>
        <li>
          <a href="a">Instagram</a>
        </li>
        <li>
          <a href="a">Twitter</a>
        </li>
      </ul>
      <div className='"flex-gap-2'>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className='font-thin font-playfair'> 
            Have any Questions?
          </p>
          <a href="a" className='font-medium font-lato'>Talk to a specialist </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
