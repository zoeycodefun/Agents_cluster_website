import React from 'react';
import { type Category } from '../configs/app_config';

interface AgentsPageProps {
    category: Category;
}

const AgentsPage: React.FC<AgentsPageProps> = ({ category}) => {
    const { agents } = category;
    return (
        <div className='min-h-screen py-16 px-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {agents.map((agent) => (
                        <div
                        key = {agent.id}
                        className=' bg-white p-4 md:p-6 rounded-lg border shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-200 border-gray-200'
                        >
                            {agent.imageUrl && (
                                <img 
                                src={agent.imageUrl}
                                alt={`${agent.name} icon`} 
                                className='w-full h-32 md:h-40 object-cover rounded-md mb-4'
                                onError={(error) => {
                                    (error.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                                }}
                                />
                            )}
                            {/** status indicator */}
                            {agent.status && (
                                <span
                                className={`inline-block px-2 py-1 text-xs md:text-sm font-medium rounded-full mb-2
                                    ${agent.status === 'active' ? 'bg-green-50 text-green-800' : 'bg-gray-100 text-gray-800'}
                                    `}
                                >
                                    {agent.status === 'active' ? 'Active' : 'Upcoming'}
                                </span>
                            )}
                            {/** agent title and description */}
                            <p className='font-medium text-lg md:text-xl mb-2 text-gray-900'>
                                {agent.name}
                            </p>
                            <p className='text-gray-600 leading-relaxed mb-4 text-sm md:text-base'>
                                {agent.description}
                            </p>
                            {/** tags */}
                            {agent.tags && agent.tags.length > 0 && (
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {agent.tags.map((tag, index) => (
                                        <span 
                                        key={index}
                                        className='bg-blue-50 text-blue-1000 text-xs md:text-sm px-2 py-1 rounded-lg'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {/** agent button to it website */}
                            <div className='flex flex-col sm:flex-row gap-2 pt-4'>
                                {agent.websiteUrl && (
                                <a 
                                href= {agent.websiteUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex-1 bg-blue-100 hover:bg-blue-200 px-2 py-2 rounded-lg transition-colors text-center text-sm'
                                >
                                    Visit Agent Website
                                </a>
                            )}
                            {agent.githubUrl && (
                                <a 
                                href={agent.githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex-1 bg-gray-100 hover:bg-gray-200 px-2 py-2 rounded-lg transition-colors text-center text-sm'
                                >
                                    View on GitHub
                                </a>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
                {/** no data indicator */}
                {agents.length === 0 && (
                    <div className=''>
                        <p className=''>
                            No agents available in this category.
                            Please check back later for updates!
                        </p>
                    </div>
                )}
        </div>
    );
};
export default AgentsPage;
