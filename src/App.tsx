import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'

// pages
import Home from './pages/home'
import HedgeTrade from './pages/hedge_trade'
import TradeSignals from './pages/trade_signals'

// define the config of pages:routers for pages and components
const pageRouters = {
  'hedge_trade' : HedgeTrade,
  'trade_signals' : TradeSignals
} as const;

// type security:get the type of page keys from the pageRouters object, which ensures that only valid page keys can be used in the app and prevents runtime errors due to typos or invalid keys
type PageKey = keyof typeof pageRouters;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          {/* dynamically generate routes for pages based on the pageRouters config, which allows for easy addition of new pages by simply updating the pageRouters object without needing to modify the routing logic */}
          
        </Route>
      </Routes>
    </Router>
  )
}

export default App
