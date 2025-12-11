import React from 'react';

export default function Alert({ size = 12, color = '#CC272E' }) {
    return <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 4V6" stroke="#CC272E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8H6.005" stroke="#CC272E" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
}
