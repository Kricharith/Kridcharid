import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/Profile';
import Activities from './pages/Activities';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="https://kricharith.github.io/Kridcharid/#/" element={<Navigate to="https://kricharith.github.io/Kridcharid/#/profile" replace />} />
            <Route path="https://kricharith.github.io/Kridcharid/#/profile" element={<Profile />} />
            <Route path="https://kricharith.github.io/Kridcharid/#/activities" element={<Activities />} />
            <Route path="https://kricharith.github.io/Kridcharid/#/certificate" element={<Certificate />} />
            <Route path="https://kricharith.github.io/Kridcharid/#/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;