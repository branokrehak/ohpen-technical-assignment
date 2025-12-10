import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

export default function Layout() {
    return <>
        <main className="layout">
            <Sidebar />
            <Outlet />
        </main>
    </>;
}
