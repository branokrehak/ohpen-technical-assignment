import React, { useState } from 'react';

import Arrow1 from '../svg/Arrow1';

export default function CollapseButton({ onClick, isCollapsed }: { onClick: () => void, isCollapsed: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return <>
        <button onClick={onClick} className="flex items-center justify-center mt-auto border-t w-full cursor-pointer border-t-white3 h-12.5 transition-all duration-300 hover:bg-blue1/10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <span className={`transition-all duration-300 ${isCollapsed ? 'rotate-180' : ''}`}><Arrow1 color={isHovered ? '#0056A4' : '#636363'} /></span>
        </button>
    </>;
}
