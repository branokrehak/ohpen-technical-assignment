import React from 'react';

export default function Bell({ size = 16, color = '#636363' }) {
    return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5.3335C4 4.27263 4.42143 3.25521 5.17157 2.50507C5.92172 1.75492 6.93913 1.3335 8 1.3335C9.06087 1.3335 10.0783 1.75492 10.8284 2.50507C11.5786 3.25521 12 4.27263 12 5.3335C12 10.0002 14 11.3335 14 11.3335H2C2 11.3335 4 10.0002 4 5.3335Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.8667 14C6.97829 14.203 7.14233 14.3722 7.34169 14.4901C7.54106 14.608 7.76842 14.6702 8.00003 14.6702C8.23165 14.6702 8.45901 14.608 8.65837 14.4901C8.85773 14.3722 9.02178 14.203 9.13337 14" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
}
