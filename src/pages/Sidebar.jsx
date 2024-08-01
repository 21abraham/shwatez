import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummy from '../assets/dummy.jpg';

const submenu = [
    {
        title: 'Dashboard',
        optionIcons: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
        ),
    },
    {
        title: 'Content',
        optionIcons: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
        ),
    },
    {
        title: 'Analytics',
        optionIcons: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
        ),
    },
    {
        title: 'Comments',
        optionIcons: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
        ),
    },
];

const Sidebar = ({ onSubMenuClick }) => {
    const [openMenu, setOpenMenu] = useState(Array(submenu.length).fill(true));
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleMenuClick = (index) => {
        const updatedMenuState = [...openMenu];
        updatedMenuState[index] = !updatedMenuState[index];
        setOpenMenu(updatedMenuState);
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSubMenuItemClick = (option) => {
        onSubMenuClick(option);
        setActiveMenuItem(option);
    };

   return (
        <div className="shadow-xl h-screen bg-[#282828] w-full">
            <div className="h-full overflow-y-auto overflow-x-hidden w-full">
                <div className="w-full h-72 max-md:h-32 grid grid-rows-6 mt-12">
                    <div className="w-full h-full row-span-4 flex items-end justify-center">
                        <img src={dummy} className="rounded-full w-32 h-32 max-md:w-12 max-md:h-12" alt=""/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center text-white"><h1 className="max-md:hidden">Your channel</h1></div>
                    <div className="w-full h-full flex items-start justify-center text-gray-400"><h1 className="max-md:hidden">Rumman Shaikh</h1></div>
                </div>
                <ul>
                    {submenu.map((item, index) => (
                        <li key={index} className={`hover:bg-[#212121]`} onClick={() => handleSubMenuItemClick(item.title)}>
<div className={`w-full h-full grid grid-cols-7 ${activeMenuItem === item.title ? 'bg-[#212121]' : ''}`}>
    <div className={`w-1 h-full ${activeMenuItem === item.title ? 'bg-red-600' : ''}`}></div>
    <div className="w-full h-full py-4">
        {React.cloneElement(item.optionIcons, {
                                    className: `w-8 h-8 text-gray-300 ${activeMenuItem === item.title ? 'text-red-600' : ''}`
                                })}
    </div>
    <div className="w-full h-full col-span-5 py-4">
        <span className={`max-md:hidden font-bold text-left text-gray-300 w-full flex items-center ml-8 ${activeMenuItem === item.title ? 'text-red-600' : ''}`}>{item.title}</span>
    </div>
</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
