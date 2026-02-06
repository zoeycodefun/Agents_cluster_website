import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'

import Home from './pages/home'
import HedgeTrade from './pages/hedge_trade'
import { categories } from './data/products'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>
    </Router>
  )
}

export default App
