import Sidebar from "../pages/Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Studio () {
    const {section} = useParams();
    const [selectedSubMenu, setSelectedSubMenu] = useState(section);

    const handleSubMenuClick = (selectedSubMenu) => {
        setSelectedSubMenu(selectedSubMenu);
    };
    useEffect(() => {
  window.scrollTo(0,0)
}, []);
    return (<>
    <Topbar/>
            <div className="flex font-sans h-full">
            <div className="w-1/5 max-md:w-16 overflow-x-clip fixed">
                <Sidebar onSubMenuClick={handleSubMenuClick} />
            </div>
                <div className="w-1/4 max-md:w-16 overflow-x-clip">
            </div>
            <div className="bg-[#212121] w-full relative text-white px-6 pt-16">

                {selectedSubMenu === 'Dashboard' && <Dashboard />}
            </div>
        </div>
    </>
        );
};