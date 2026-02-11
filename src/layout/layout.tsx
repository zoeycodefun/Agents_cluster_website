import React from 'react';
import { Outlet } from 'react-router-dom';
import AgentsPagesNavigation from './layout_components/agents_pages_navigation';

const Layout: React.FC = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <header className='fixed lg:top-8 top-0 left-0 right-0 z-50'>
                <AgentsPagesNavigation />
            </header>
            <main className='flex-1 pt-10 md:pt-32'>
                <Outlet />
            </main>
        </div>
    );
};
export default Layout;
