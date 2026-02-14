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
            },
            {
                id: 'gas_fee_anomaly_detection_agent',
                name: 'Gas Fee Anomaly Detection Agent',
                description: 'Detect anomalies in gas fees on blockchain networks to identify potential issues or opportunities.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Gas_fee_anomaly_detection_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['gas fees', 'anomaly detection', 'blockchain monitoring'],
            },
            {
                id: 'mempool_transaction_prediction_agent',
                name: 'Mempool Transaction Prediction Agent',
                description: 'Analyze mempool transactions to predict potential market movements and provide insights on trading opportunities.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Mempool_transaction_prediction_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['mempool', 'transaction prediction', 'market insights'],
            },
            {
                id: 'NFT_market_monitor_agent',
                name: 'NFT Market Monitor Agent',
                description: 'Monitor the NFT market for significant transactions and trends to provide insights on market activity.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/NFT_market_monitor_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['NFT', 'market monitoring', 'on-chain insights'],

            },
            {
                id: 'solana_transaction_monitor_agent',
                name: 'Solana Transaction Monitor Agent',
                description: 'Monitor Solana blockchain transactions to provide real-time insights on network activity and trends.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Solana_transaction_monitor_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['solana', 'transaction monitoring', 'on-chain insights'],
            },
            {
                id: 'token_contract_monitor_agent',
                name: 'Token Contract Monitor Agent',
                description: 'Monitor token contracts for significant events and provide insights on token activity and trends.',
                category: 'onchain_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Token_contract_monitor_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['token contracts', 'event monitoring', 'on-chain insights'],
            },
        ]
    },
    // exchange_data_monitoring
    {
        id: 'exchange_data_monitoring',
        label: 'Exchange Data Monitoring Agents',
        path: '/exchange_data_monitoring',
        agents: [
            {
                id: 'cex_orderbook_real_time_agent',
                name: 'CEX Orderbook Real-Time Agent',
                description: 'Monitor centralized exchange (CEX) order books in real-time to provide insights on market depth and potential trading opportunities.',
                category: 'exchange_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/CEX_orderbook_real_time_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['CEX', 'order book monitoring', 'real-time insights'],
            },
            {
                id: 'dex_liquidity_pool_monitor_agent',
                name: 'DEX Liquidity Pool Monitor Agent',
                description: 'Monitor decentralized exchange (DEX) liquidity pools to provide insights on liquidity movements and potential trading opportunities.',
                category: 'exchange_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/DEX_liquidity_pool_monitor_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['DEX', 'liquidity pool monitoring', 'trading insights'],
            },
            {
                id: 'funding_rate_collection_agent',
                name: 'Funding Rate Collection Agent',
                description: 'Collect and analyze funding rates from various exchanges to provide insights on market sentiment and potential trading opportunities.',
                category: 'exchange_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Funding_rate_collection_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['funding rates', 'exchange monitoring', 'market insights'],
            },
            {
                id: 'liquidation_data_tracker_agent',
                name: 'Liquidation Data Tracker Agent',
                description: 'Track liquidation data across various exchanges to provide insights on market volatility and potential trading opportunities.',
                category: 'exchange_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Liquidation_data_tracker_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['liquidation data', 'exchange monitoring', 'market insights'],
            },
            {
                id: 'options_greeks_data_agent',
                name: 'Options Greeks Data Agent',
                description: 'Collect and analyze options Greeks data from various exchanges to provide insights on market sentiment and potential trading opportunities.',
                category: 'exchange_data_monitoring',
                githubUrl: 'https://github.com/zoeycodefun/Options_greeks_data_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['options', 'Greeks data', 'exchange monitoring', 'market insights'],
            }
        ]
    },
    // anomaly_detection
    {
        id: 'anomaly_detection',
        label: 'Anomaly Detection Agents',
        path: '/anomaly_detection',
        agents: [
            {
                id: 'price_anomaly_detection_agent',
                name: 'Price Anomaly Detection Agent',
                description: 'Detect anomalies in asset prices to identify potential market manipulation or significant events.',
                category: 'anomaly_detection',
                githubUrl: 'https://github.com/zoeycodefun/Price_anomaly_detection_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['price anomalies', 'market monitoring', 'manipulation detection'],
            },
            {
                id: 'rug_pull_early_warning_agent',
                name: 'Rug Pull Early Warning Agent',
                description: 'Detect early warning signs of potential rug pulls in the crypto market to help users avoid scams.',
                category: 'anomaly_detection',
                githubUrl: 'https://github.com/zoeycodefun/Rug_pull_early_warning_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['rug pull', 'early warning', 'scam detection'],
            },
            {
                id: 'volume_spike_detection_agent',
                name: 'Volume Spike Detection Agent',
                description: 'Detect spikes in trading volume to identify potential market manipulation or significant events.',
                category: 'anomaly_detection',
                githubUrl: 'https://github.com/zoeycodefun/Volume_spike_detection_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['volume spikes', 'market monitoring', 'manipulation detection'],
            }
        ]
    },
    // trade_execution_positiomn_management
    {
        id: 'trade_execution_position_management',
        label: 'Trade Execution & Position Management Agents',
        path: '/trade_execution_position_management',
        agents: [
            {
                id: 'BTC_ETH_correlation_monitor_agent',
                name: 'BTC-ETH Correlation Monitor Agent',
                description: 'Monitor the correlation between Bitcoin and Ethereum to provide insights on potential trading opportunities and market trends.',
                category: 'trade_execution_position_management',
                githubUrl: 'https://github.com/zoeycodefun/BTC_ETH_correlation_monitor_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['BTC', 'ETH', 'correlation monitoring', 'market insights'],
            },
            {
                id: 'BTC_ETH_dual_asset_hedge_position_calculator_agent',
                name: 'BTC-ETH Dual Asset Hedge Position Calculator Agent',
                description: 'Calculate optimal hedge positions for BTC and ETH to assist traders in managing risk and maximizing returns.',
                category: 'trade_execution_position_management',
                githubUrl: 'https://github.com/zoeycodefun/BTC_ETH_dual_asset_hedge_position_calculator_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['BTC', 'ETH', 'hedge position calculation', 'risk management'],
            },
            {
                id: 'hedged_position_management_agent',
                name: 'Hedged Position Management Agent',
                description: 'Manage hedged positions across multiple assets to optimize risk and return for traders.',
                category: 'trade_execution_position_management',
                githubUrl: 'https://github.com/zoeycodefun/Hedged_position_management_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['hedged positions', 'position management', 'risk optimization'],
            },
            {
                id: 'night_sleep_session_market_watcher_agent',
                name: 'Night Sleep Session Market Watcher Agent',
                description: 'Monitor the market during night sessions to provide insights on potential trading opportunities and market trends for traders who prefer to sleep during the day.',
                category: 'trade_execution_position_management',
                githubUrl: 'https://github.com/zoeycodefun/Night_sleep_session_market_watcher_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['night session', 'market monitoring', 'trading insights'],
            },
        ]
    },
    // tradin_strategy_agents
    {
        id: 'trading_strategy_agents',
        label: 'Trading Strategy Agents',
        path: '/trading_strategy_agents',
        agents: [
            {
                id: 'arbitrage_strategies_agent',
                name: 'Arbitrage Strategies Agent',
                description: 'Identify and execute arbitrage opportunities across different exchanges to maximize trading profits.',
                category: 'trading_strategy_agents',
                githubUrl: 'https://github.com/zoeycodefun/Arbitrage_strategies_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['arbitrage', 'trading strategies', 'profit maximization'],
            },
            {
                id: 'high_frequency_strategies_agent',
                name: 'High-Frequency Strategies Agent',
                description: 'Implement high-frequency trading strategies to capitalize on short-term market movements and generate profits.',
                category: 'trading_strategy_agents',
                githubUrl: 'https://github.com/zoeycodefun/High_frequency_strategies_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['high-frequency trading', 'trading strategies', 'short-term profits'],
            },
            {
                id: 'market_making_strategies_agent',
                name: 'Market Making Strategies Agent',
                description: 'Implement market making strategies to provide liquidity and earn profits from the bid-ask spread.',
                category: 'trading_strategy_agents',
                githubUrl: 'https://github.com/zoeycodefun/Market_making_strategies_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['market making', 'trading strategies', 'liquidity provision'],
            },
            {
                id: 'mean_reversion_strategies_agent',
                name: 'Mean Reversion Strategies Agent',
                description: 'Implement mean reversion trading strategies to capitalize on price deviations from the mean and generate profits.',
                category: 'trading_strategy_agents',
                githubUrl: 'https://github.com/zoeycodefun/Mean_reversion_strategies_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['mean reversion', 'trading strategies', 'profit generation'],
            },
            {
                id: 'trend_following_strategies_agent',
                name: 'Trend Following Strategies Agent',
                description: 'Implement trend following trading strategies to capitalize on market trends and generate profits.',
                category: 'trading_strategy_agents',
                githubUrl: 'https://github.com/zoeycodefun/Trend_following_strategies_agent',
                websiteUrl: 'https://agents-cluster-website.vercel.app',
                imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
                status: 'upcoming',
                tags: ['trend following', 'trading strategies', 'market trends'],
            },
        ]
    },
    // risk_management
    {
        id: 'risk_management',
        label: 'Risk Management Agents',
        path: '/risk_management',
        agents: [{
            id: 'holder_classification_agent',
            name: 'Holder Classification Agent',
            description: 'Classify holders of a particular asset into different categories (e.g., long-term holders, short-term traders) to provide insights on market sentiment and potential risks.',
            category: 'risk_management',
            githubUrl: 'https://github.com/zoeycodefun/Risk_management_agent',
            websiteUrl: 'https://agents-cluster-website.vercel.app',
            imageUrl: 'https://images.pexels.com/photos/16027815/pexels-photo-16027815.jpeg',
            status: 'upcoming',
            tags: ['risk management', 'holder classification', 'market sentiment'],
        },
        
    ]
    }
    // AI_prediction_models_agents
    // entity_recognition
    // blockchain

    

    
    
    





];

// helper function
export const getCategoryByPath = (path: string): Category | undefined => {
    return categories.find(category => category.path === path);
}
