import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../configs/app_config';

const AgentsPagesNavigation: React.FC = () => {
    return (
        <nav className=''>
            <div className=''>
                {/** title */}
                <span className=''>
                    Agents Cluster
                </span>
                {/** navigation links */}
                <div className=''>
                    {categories.map((category) => (
                        <NavLink
                        key={category.id}
                        to={category.path}
                        className={({isActive}) => 
                            `
                        ${isActive ? 'bg-orange-100 text-orange-800' : 'text-gray-700 hover:bg-orange-50 hover:text-gray-800'}
                        `}
                        >
                            {category.label}
                        </NavLink> 
                    ))}
                </div>
                {/** functional zone */}
                <div className=''>
                    {/* future functional components */}
                    <span>other function</span>
                </div>
            </div>
        </nav>
    );
};
export default AgentsPagesNavigation;