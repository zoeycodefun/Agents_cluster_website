import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../data/products';
import { type Category } from '../../types/interface';

// define props interface for the PageNavigation component
interface NavigationProps {
    className?: string; // self define class
    maxVisibleNavigationItems?: number;
    onNavigationClick?: (category: Category) => void; // callback function for handling navigation item clicks
}
// navigtion
const PageNavigation: React.FC<NavigationProps> = ({ 
    className = '',
    maxVisibleNavigationItems,
    onNavigationClick

}) => {
    const location = useLocation();
    const handleNavigationClick = (category: Category) => {
        // outer callback for handling navigation item clicks
        onNavigationClick?.(category);
        // development log
        if (process.env.NODE_ENV === 'development') {
            console.log(`Navigation item clicked: ${category.name}`);
        }
    };
    // visible navigation
    const visibleCategories = maxVisibleNavigationItems
    ? categories.slice(0, maxVisibleNavigationItems)
    : categories;
    return (
        <nav className={``}>
            {/** container */}
            <div className=''>
                {/** navigation content */}
                <div className=''>
                    <div>
                        <Link 
                        to = '/'
                        className=''
                        onClick={() => handleNavigationClick({id:'home', name:'Home', slug:''})}
                        >
                            Agents Cluster
                        </Link>
                        {/** separator */}
                        <div className='w-px h-6 bg-white/30 flex-shrink-0'></div>
                        {/** navigation items */}
                        {visibleCategories.map((category) => (
                            <Link 
                            key={category.id}
                            to = {`/${category.slug}`} // router
                            className={``}
                            onClick={() => handleNavigationClick(category)}
                            >
                                {category.name}
                            </Link>
                        ))}
                        {/** space for more function: search, user account(one account multiple agents use) */}
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default PageNavigation;