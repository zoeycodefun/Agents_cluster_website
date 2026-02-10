// app config: manage agents navigation and agents data

export interface Agent {
    id: string;
    name: string;
    description: string;
    category: string;
    websiteUrl?: string;
    imageUrl?: string;
    status?: 'active' | 'upcoming';
    tags?: string[];
}
// type of navigation
export interface Category {
    id: string;
    label: string;
    path: string;
    agents: Agent[];
}
// navigation and agents data
export const categories: Category[] = [
    // hedge trade
    {
        id: 'hedge_trade',
        label: 'Hedge Trade Agents',
        path: '/hedge_trade',
        agents: [
            {
                id: 'hedge_trade_BTC_ETH_correlation_monitor_agent',
                name: 'BTC-ETH Correlation Monitor Agent',
                description: 'Monitor the correlation between BTC and ETH, and provide insights for hedge trading strategies.',
                category: 'hedge_trade',
                websiteUrl: '',
                imageUrl: '',
                status: 'active',
                tags: ['BTC', 'ETH', 'correlation', 'hedge'],
            },
            {
                id: 'hedge_trade_BTC_ETH_dual_asset_hedge_position_calculator_agent',
                name: 'BTC-ETH Dual Asset Hedge Position Calculator Agent',
                description: 'Calculate optimal hedge positions for BTC and ETH based on market conditions and user risk preferences.',
                category: 'hedge_trade',
                websiteUrl: '',
                imageUrl: '',
                status: 'active',
                tags: ['BTC', 'ETH', 'hedge', 'position calculator'],
            },
            {
                id: 'hedge_trade_hedged_position_management_agent',
                name: 'Hedged Position Management Agent',
                description: 'Manage and adjust hedged positions in real-time to maintain optimal risk exposure.',
                category: 'hedge_trade',
                websiteUrl: '',
                imageUrl: '',
                status: 'active',
                tags: ['hedge', 'position management', 'real-time', 'risk management'],
            },
            {
                id: 'hedge_trade_night_sleep_session_market_watcher_agent',
                name: 'Night Sleep Session Market Watcher Agent',
                description: 'Monitor the market during night sleep sessions and provide alerts for significant price movements or opportunities.',
                category: 'hedge_trade',
                websiteUrl: '',
                imageUrl: '',
                status: 'active',
                tags: ['night session', 'market watcher', 'alerts', 'price movements'],
            }
        ]
    },
    // market analysis
    {
        id: 'market_analysis',
        label: 'Market Analysis Agents',
        path: '/market_analysis',
        agents: [
            {
                id: 'market_analysis_crypto_whale_tracking_agent',
                name: 'Crypto Whale Tracking Agent',
                description: 'Track the activities of crypto whales and provide insights on potential market movements.',
                category: 'market_analysis',
                websiteUrl: '',
                imageUrl: '',
                status: 'upcoming',
                tags: ['crypto', 'whale tracking', 'market insights'],
            }

        ]
    }
];

// helper function
export const getCategoryByPath = (path: string): Category | undefined => {
    return categories.find(category => category.path === path);
}
