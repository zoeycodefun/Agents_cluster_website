// page navigation(导航组件)
import React, { use } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { categories } from '../../data/products';
import { type Category } from '../../types/interface';

// define the interfaces of the the guide components props
interface NavigationProps {
    className?: string;
}
// guide component
const PageNavigation: React.FC<NavigationProps> = ({ className = ''}) => {
    const location = useLocation();
    const handleNavigationClick = (category: Category) => {
        // ‼️ 点击分析，预加载
        console.log(`Navigating to ${category.name}`);
    };
    return (
        <nav className=''>

        </nav>
        
    )
}
export default PageNavigation;
