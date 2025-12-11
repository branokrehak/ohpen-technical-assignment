import React from 'react';

export default function CheckMark({ size = 12, color = '#636363' }) {
    return <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 6L5.5 7L7.5 5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
}
