import React from 'react';
import { Outlet } from 'react-router-dom';
import AgentsPagesNavigation from './layout_components/agents_pages_navigation';

const Layout: React.FC = () => {
    return (
        <div className=''>
            <header className=''>
                <AgentsPagesNavigation />
            </header>
            <main className=''>
                <Outlet />
            </main>
        </div>
    );
};
export default Layout;
