import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HomeComponent() {
  return (
    <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '80%', maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ color: 'black', padding: '20px', border: '2px solid black' }}>Home Component Page</h1>
        {/* Render nested routes */}
        <Outlet />
      </div>
    </div>
  );
}
