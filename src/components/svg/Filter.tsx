import React from 'react';

export default function Filter({ size = 16, color = '#636363' }) {
    return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_1379)">
            <path d="M14.6668 2H1.3335L6.66683 8.30667V12.6667L9.3335 14V8.30667L14.6668 2Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1_1379">
                <rect width={size} height={size} fill="white" />
            </clipPath>
        </defs>
    </svg>;
}
