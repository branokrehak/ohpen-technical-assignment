import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    return <>
        <main className="flex flex-row">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header />
                <Outlet />
            </div>
        </main>
    </>;
}
