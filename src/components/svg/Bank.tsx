import React from 'react';

export default function Bank({ size = 20, color = '#0056A4' }) {
    return <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 18.333H17.5" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 15.0003V9.16699" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.3335 15.0003V9.16699" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6665 15.0003V9.16699" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15.0003V9.16699" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0002 1.66699L16.6668 5.83366H3.3335L10.0002 1.66699Z" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
}
