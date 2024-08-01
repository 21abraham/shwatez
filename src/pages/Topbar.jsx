import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummy from '../assets/dummy.jpg';

const Topbar = () => {

   return (
        <div className="w-full h-16 bg-[#282828] shadow-sm shadow-black z-20 fixed grid grid-cols-12">
            <div className="w-full h-full col-span-3 grid grid-cols-3">
                <div className="w-ful h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                </div>
                <div className="w-ful h-full col-span-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-red-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg><h1 className="text-white ml-4 text-2xl font-thin tracking-widest">Studio</h1>

                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center col-span-6 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white absolute left-4 z-[1]">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                <input type="text" placeholder="Search across your channel" className="text-white bg-transparent border-2 border-solid border-white pl-20 py-2 w-full rounded-xl absolute"/>
            </div>
            <div className="w-full h-full col-span-3 grid grid-cols-4">
                <div className="w-full h-full flex items-center justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

                </div>
                <div className="w-full h-full flex items-center justify-center col-span-2">

                    <button className="text-white flex border-2 border-solid border-gray-500 py-2 px-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
CREATE</button>
                </div>
                <div className="w-full h-full flex items-center justify-start">
                    <img src={dummy} className="rounded-full w-10 h-10" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
