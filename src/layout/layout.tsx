import React from 'react';
import { Outlet } from 'react-router-dom';
import PageNavigation from './layout_components/pages_navigation';

// define the interfaces of the layout component props:if show navigation;
interface LayoutProps {
    showNavigation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ showNavigation = true}) => {
    return (
        <div className='min-h-screen bg-gray-50'>
            {showNavigation && <PageNavigation />}
            <main className={`transition-all duration-300 ${showNavigation ? 'pt-20' : ''}`}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;