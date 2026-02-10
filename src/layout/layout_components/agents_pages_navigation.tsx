import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../configs/app_config';

const AgentsPagesNavigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
        {/** table guide */}
        <nav className='hidden md:block w-[80%] mx-auto mt-4 bg-white/70 backdrop-blur-md rounded-full border border-gray-150 sticky top-4 z-50'>
            <div className='px-6 py-1.5'>
                <div className='flex items-center'>
                {/** title */}
                <div className='flex-shrink-0'>
                    <span className='text-lg font-bold text-gray-900'>
                    Agents Cluster
                    </span>
                </div>

                {/** navigation links */}
                <div className='px-4 py-1 flex space-x-4 w-[140vh] overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    {categories.map((category) => (
                        <NavLink
                        key={category.id}
                        to={category.path}
                        className={({isActive}) => 
                            `px-4 py-2 rounded-full transition-all duration-200
                        ${isActive ? 'bg-orange-100 text-orange-800' : 'text-gray-700 hover:bg-orange-50 hover:text-gray-800'}
                        `}
                        >
                            {category.label}
                        </NavLink> 
                    ))}
                </div>
            </div>
            </div>
        </nav>
        {/** mobile menu */}
        <nav className='md:hidden w-full bg-white/70 backdrop-blur-md border-b border-gray-150 sticky top-0 z-50'>
        <div className='px-4 py-3'>
            <div className='flex items-center'>
                <div className='flex-shrink-0'>
                    <span className='text-xl font-bold text-gray-900'>Agents Cluster</span>
                </div>
                <button
                onClick={toggleMobileMenu}
                className='text-gray-700 hover:bg-orange-50 focus:bg-orange-100 p-2'
                aria-label='Toggle menu'
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
        </nav>
        {/** mobile menu window when opened */}
        {isMobileMenuOpen && (
            <div className='fixed inset-0 z-50 md:hidden'>
                {/** background */}
                <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className='relative flex '></div>
            </div>
        )}    
        </>
    );
};
export default AgentsPagesNavigation;