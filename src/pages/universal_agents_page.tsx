import React from 'react';
import { type Category } from '../configs/app_config';

interface AgentsPageProps {
    category: Category;
}
const AgentsPage: React.FC<AgentsPageProps> = ({ category}) => {
    const { label, agents} = category;
    return (
        <div className=''>
            <p className=''>{label}</p>
            <div className=''>
                <div className=''>
                    {agents.map((agent) => (
                        <div
                        key = {agent.id}
                        className=''
                        >
                            {agent.imageUrl && (
                                <img src={agent.imageUrl} alt={` ${agent.name} icon`} 
                                className=''
                                onError={(error) => {
                                    (error.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                                }}
                                />
                            )}
                            {/** status indicator */}
                            {agent.status && (
                                <span
                                className={`
                                    ${agent.status === 'active' ? '' : 'bg-gray-100'}
                                    `}
                                >
                                    {agent.status === 'active' ? 'Active' : 'Upcoming'}
                                </span>
                            )}
                            {/** agent title and description */}
                            <p className=''>
                                {agent.name}
                            </p>
                            <p className=''>
                                {agent.description}
                            </p>
                            {/** tags */}
                            {agent.tags && agent.tags.length > 0 && (
                                <div className=''>
                                    {agent.tags.map((tag, index) => (
                                        <span 
                                        key={index}
                                        className=''
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {/** agent button to it website */}
                            {agent.websiteUrl && (
                                <a 
                                href= {agent.websiteUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className=''
                                >
                                    Visit Agent Website
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                {agents.length === 0 && (
                    <div className=''>
                        <p className=''>
                            No agents available in this category.
                            Please check back later for updates!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default AgentsPage;
