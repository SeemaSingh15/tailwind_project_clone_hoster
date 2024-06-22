import React from 'react';
import BlueShape from '/assets/Blue-Shape.svg';
import Checkmark from '/assets/Checkmark.svg';
import HeroModel from '/assets/Hero-Model.png';
import PinkShape from '/assets/Pink-Shape.svg';
import PurpleShape from '/assets/Purple-Shape.svg';

const Body = () => {
  return (
    <div className='-space-y-4 lg:flex'>
      <div className="flex justify-center items-enter lg:flex-1 lg:order-2 lg:justify-end">
        <img src={BlueShape} alt="1st" className="h-64 -rotate-45 md:h-72 lg:h-[400px]" />
        <img src={PinkShape} alt="2st" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]" />
        <img src={PurpleShape} alt="3st" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
        <img src={HeroModel} alt="Hero" className="absolute h-64 md:h-72 lg:h-[400px]" />
      </div>
      <div className='lg:flex-1 lg:order-1'>
        <h1 className="text-5xl font-bold leading-tight font-playfair">Host your website in less than 5 minutes</h1>
        <p className="text-gray-400 font-lato">With hoster, get your website up and running in no less than 5 minutes with the most competitive pricing packages and something.</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="px-4 py-3 rounded-md placeholder:text-gray-400" type="email" placeholder="enter email address" />
          <button className="px-4 py-3 text-white bg-blue-400 rounded-md hover:bg-blue-600"> Join Waitlist</button>
        </form>
        <div className="flex gap-2">
          <img src={Checkmark} alt="check" />
          <p className="text-gray-400 font-lato"> NO spam , ever. Unsubscribe anythime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
