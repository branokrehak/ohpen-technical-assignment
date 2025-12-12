import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Dashboard from '../svg/Dashboard';
import Tenants from '../svg/Tenants';
import Labels from '../svg/Labels';
import Organizations from '../svg/Organizations';
import Users from '../svg/Users';
import Settings from '../svg/Settings';
import SidebarLink from './SidebarLink';
import CollapseButton from './CollapseButton';
import Logo from '../svg/Logo';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleSidebarCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return <>
        <aside className={`flex flex-col min-h-screen bg-grey2/30 border-r border-r-white3 overflow-hidden w-56 transition-all duration-300 ${isCollapsed ? 'max-w-17' : ''}`}>
            <NavLink to="/" className="flex items-center gap-2 p-4 border-b border-b-white3 text-[16px] font-semibold">
                <span className="bg-blue1 rounded-lg flex items-center justify-center p-2"><Logo /></span>
                {isCollapsed ? '' : 'FinanceHub'}
            </NavLink>
            <ul className={`flex gap-1 flex-col p-2 ${isCollapsed ? 'hidden' : ''}`}>
                <li><SidebarLink to="/" label="Dashboard" Icon={Dashboard}></SidebarLink></li>
                <li><SidebarLink to="/tenants" label="Tenants" Icon={Tenants}></SidebarLink></li>
                <li><SidebarLink to="/labels" label="Labels" Icon={Labels}></SidebarLink></li>
                <li><SidebarLink to="/organizations" label="Organizations" Icon={Organizations}></SidebarLink></li>
                <li><SidebarLink to="/users" label="Users" Icon={Users}></SidebarLink></li>
                <li><SidebarLink to="/settings" label="Settings" Icon={Settings}></SidebarLink></li>
            </ul>
            <CollapseButton onClick={handleSidebarCollapse} isCollapsed={isCollapsed} />
        </aside>
    </>;
}
