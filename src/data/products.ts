import { type Product, type Category } from "../types/interface";

// types of products
export const categories: Category[] = [
    { id: 'hedge_trade', name: 'Hedge Trade', slug: 'hedge_trade_interface'},
    { id: 'trade_signals', name: 'Trade Signals', slug: 'trade_signals_interface'},
]
// products data(‼️API)
export const products: Product[] = [
    // hedge trade
    {
        id: 'hedge_trade_btc_eth_correlation_monitor',
        name: 'BTC ETH correlation monitor agent',
        description: 'Monitor the correlation between BTC and ETH and provide trading signals based on the correlation.',
        imageUrl: '',
        websiteUrl: '',
        category: 'hedge_trade'
    },
    {
        id: 'hedge_trade_btc_eth_hedge_position_calculator',
        name: 'BTC ETH hedge position calculator agent',
        description: 'Calculate the optimal hedge position between BTC and ETH based on their correlation.',
        imageUrl: '',
        websiteUrl: '',
        category: 'hedge_trade'

    },
    {
        id: 'hedge_position_management_agent',
        name: 'Hedge position management agent',
        description: 'Manage hedge positions for various crypto assets to minimize risk and maximize returns.',
        imageUrl: '',
        websiteUrl: '',
        category: 'hedge_trade'
    },
    {
        id: 'night_sleep_session_market_watcher',
        name: 'Night sleep session market watcher agent',
        description: 'Monitor the crypto market during night sessions and provide alerts for significant movements.',
        imageUrl: '',
        websiteUrl: '',
        category: 'hedge_trade'
    }
    // trade signals
    
]
// the tool function of getting products list by slugs(including error handling)
export const getProductsByCategory = (categorySlug: string): Product[] => {
    // check the input index
    if (!categorySlug || typeof categorySlug !== 'string') {
        console.warn('Invalid category slug provided to getProductsByCategory');
        return []; // return empty array for invalid input and avoid runtime errors
    }
    // filter the products and return
    return products.filter(product => product.category === categorySlug);
};
// the tool function of getting all categories
export const getAllCategories = (): Category[] => {
    return [...categories] // return a copy of the categories array to prevent external mutations
}

