import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route } from 'react-router-dom';

import Home from '../pages/index';
import Labels from '../pages/labels';
import Login from '../pages/login';
import Onboarding from '../pages/onboarding';
import Organizations from '../pages/organizations';
import Settings from '../pages/settings';
import Tenants from '../pages/tenants';
import Users from '../pages/users';
import Layout from '../components/layout';

function ProtectedRoute() {
    const isLoggedIn = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (!isLoggedIn) return <Navigate to="/login" replace />;

    return <Outlet />;
}

export const router = createBrowserRouter(
    createRoutesFromElements(<>
        <Route path="login" element={<Login />} />
        <Route path="onboarding" element={<Onboarding />} />

        {/* requires login */}
        <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="labels" element={<Labels />} />
                <Route path="organizations" element={<Organizations />} />
                <Route path="settings" element={<Settings />} />
                <Route path="tenants" element={<Tenants />} />
                <Route path="users" element={<Users />} />
            </Route>
        </Route>
    </>)
);
