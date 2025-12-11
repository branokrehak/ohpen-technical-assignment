import React from 'react';

export default function Arrow2({ size = 16, color = 'white' }) {
    return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.3335 8H12.6668" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3.33301L12.6667 7.99967L8 12.6663" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
}
