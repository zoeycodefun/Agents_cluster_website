// app config: manage agents navigation and agents data

export interface Agent {
    id: string;
    name: string;
    description: string;
    category: string;
    githubUrl?: string,
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
    // ❌ website just for testing, waiting for the real one
    // ❌ image just for testing, waiting for the real one


    // crypto_web3_market_intelligence
    {
        id: 'crypto_web3_market_intelligence',
        label: 'Crypto & Web3 Market Intelligence Agents',
        path: '/crypto_web3_market_intelligence',
        agents: [
            {
                id: 'crypto_web3_categorized_news_feed_agent',
                name: 'Crypto & Web3 Categorized News Feed Agent',
                description: 'Aggregate and categorize news related to crypto and web3 from various sources to provide users with a comprehensive market intelligence feed.',
                category: 'crypto_web3_market_intelligence',
                githubUrl: 'https://github.com/zoeycodefun/Crypto_web3_categorized_news_feed_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['crypto', 'web3', 'news feed', 'market intelligence'],
            },
            {
                id: 'crypto_web3_market_flash_news_aggregator_agent',
                name: 'Crypto & Web3 Market Flash News Aggregator Agent',
                description: 'Aggregate and provide flash news updates related to crypto and web3 from various sources to keep users informed in real-time.',
                category: 'crypto_web3_market_intelligence',
                githubUrl: 'https://github.com/zoeycodefun/Crypto_web3_market_flash_news_aggregator_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['crypto', 'web3', 'flash news', 'market intelligence'],
            },
            {
                id: 'FOMO_market_sentiment_detection_agent',
                name: 'FOMO Market Sentiment Detection Agent',
                description: 'Detect and analyze market sentiment to identify potential FOMO (Fear of Missing Out) opportunities.',
                category: 'crypto_web3_market_intelligence',
                githubUrl: 'https://github.com/zoeycodefun/FOMO_market_sentiment_detection_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['crypto', 'web3', 'market sentiment', 'FOMO'],
            },
            {
                id: 'twitter_account_relationship_graph_builder_agent',
                name: 'Twitter Account Relationship Graph Builder Agent',
                description: 'Build and analyze relationship graphs of Twitter accounts to identify their relationship, for example, builders, and investors.',
                category: 'crypto_web3_market_intelligence',
                githubUrl: 'https://github.com/zoeycodefun/Twitter_account_relationship_graph_builder_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['crypto', 'web3', 'twitter', 'relationship graph'],
            }
        ]
    },
    // data_analysis_tracking
    {
        id: 'data_analysis_tracking',
        label: 'Data Analysis & Tracking Agents',
        path: '/data_analysis_tracking',
        agents: [
            {
                id: 'macroeconomic_analysis_agent',
                name: 'Macroeconomic Analysis Agent',
                description: 'Analyze macroeconomic trends and provide insights on potential market movements.',
                category: 'data_analysis_tracking',
                githubUrl: 'https://github.com/zoeycodefun/Macroeconomic_analysis_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['macroeconomics', 'data analysis', 'market insights'],
            },
            {
                id: 'market_sentiment_analysis_agent',
                name: 'Market Sentiment Analysis Agent',
                description: 'Analyze market sentiment using data from various sources to provide insights on potential market trends.',
                category: 'data_analysis_tracking',
                githubUrl: 'https://github.com/zoeycodefun/Market_sentiment_analysis_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['market sentiment', 'data analysis', 'market trends'],
            },
            {
                id: 'on_chain_feature_analysis_agent',
                name: 'On-Chain Feature Analysis Agent',
                description: 'Analyze on-chain data to extract features and provide insights on blockchain networks.',
                category: 'data_analysis_tracking',
                githubUrl: 'https://github.com/zoeycodefun/On_chain_feature_analysis_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['on-chain', 'data analysis', 'blockchain insights'],
            },
            {
                id: 'on_chain_project_analysis_alert_agent',
                name: 'On-Chain Project Analysis & Alert Agent',
                description: 'Analyze on-chain projects and provide alerts on significant developments or changes.',
                category: 'data_analysis_tracking',
                githubUrl: 'https://github.com/zoeycodefun/On_chain_project_analysis_alert_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['on-chain', 'project analysis', 'alerts'],
            },
            {
                id: 'technical_indicators_calculator_agent',
                name: 'Technical Indicators Calculator Agent',
                description: 'Calculate various technical indicators to assist in market analysis and trading decisions.',
                category: 'data_analysis_tracking',
                githubUrl: 'https://github.com/zoeycodefun/Technical_indicators_calculator_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['technical indicators', 'data analysis', 'trading assistance'],
            },
        ]
    },
    // onchain data monitoring
    {
        id: 'onchain_data_monitoring',
        label: 'On-Chain Data Monitoring Agents',
        path: '/onchain_data_monitoring',
        agents: [
            {
                id: 'base_chain_activity_tracker_agent',
                name: 'Base Chain Activity Tracker Agent',
                description: 'Track and analyze activity on the Base blockchain to provide insights on network usage and trends.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Base_chain_activity_tracker_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['base chain', 'activity tracking', 'on-chain monitoring'],
            },
            {
                id: 'bitcoin_chain_monitor_agent',
                name: 'Bitcoin Chain Monitor Agent',
                description: 'Monitor the Bitcoin blockchain for significant transactions and provide insights on network activity.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Bitcoin_chain_monitor_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['bitcoin', 'chain monitoring', 'on-chain insights'],
            },
            {
                id: 'cross_chain_bridge_fund_flow_agent',
                name: 'Cross-Chain Bridge Fund Flow Agent',
                description: 'Monitor fund flows across cross-chain bridges to provide insights on liquidity movements and potential risks.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Cross_chain_bridge_fund_flow_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['cross-chain', 'bridge monitoring', 'fund flow insights'],
            },
            {
                id: 'DEX_new_pool_listener_agent',
                name: 'DEX New Pool Listener Agent',
                description: 'Monitor decentralized exchanges (DEXs) for the creation of new liquidity pools and provide insights on emerging trading opportunities.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/DEX_new_pool_listener_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['DEX', 'new pool monitoring', 'trading opportunities'],
            },
            {
                id: 'Ethereum_event_listener_agent',
                name: 'Ethereum Event Listener Agent',
                description:'Monitor Ethereum blockchain events to provide real-time insights on contract interactions and network activity.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Ethereum_event_listener_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['ethereum', 'event monitoring', 'on-chain insights'],
            }


        ]
    },
    // exchange_data_monitoring
    // anomaly_detection
    // trade_execution_positiomn_management
    // tradin_strategy_agents
    // risk_management
    // AI_prediction_models_agents
    // entity_recognition
    // blockchain

    

    
    
    





];

// helper function
export const getCategoryByPath = (path: string): Category | undefined => {
    return categories.find(category => category.path === path);
}
