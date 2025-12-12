import React, { useState, type ComponentType } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyle = ({ isActive, isHovered }: { isActive: boolean, isHovered: boolean }) => `flex gap-3 items-center text-[14px] py-2.5 px-4 font-medium ${(isActive || isHovered) ? 'bg-blue1/10 rounded-md text-blue1' : 'text-gray1'}`;

export default function SidebarLink({ to, Icon, label }: { to: string, Icon: ComponentType<{ color?: string }>, label: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return <>
        <NavLink to={to} className={({ isActive }) => navLinkStyle({ isActive, isHovered })} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {({ isActive }) => <><Icon color={(isActive || isHovered) ? '#0056A4' : '#636363'} /> {label}</>}
        </NavLink>
    </>;
}
