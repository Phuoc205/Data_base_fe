import React from 'react' // nạp thư viện react
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login.js'
import Homepage from './routes/homepage.js'
import Cart from './routes/cart.js'
import Introduction from './routes/Info.js'
import Test from './routes/test.js'


import Laptop from './routes/Product/laptop.js'
import CasePC from './routes/Product/casepc.js'
import Table from './routes/Product/table.js'
import Monitor from './routes/Product/monitor.js'
import Cooler from './routes/Product/cooler.js'
import Console from './routes/Product/console.js'
import Headphones from './routes/Product/headphones.js'
import Keyboard from './routes/Product/keyboard.js'
import Mouse from './routes/Product/mouse.js'

import Manage from './routes/management.js'
import ProductCategories from './routes/Manager/ProductCategories.js'
import Unit from './routes/Manager/Unit.js'
import ProductList from './routes/Manager/ProductList.js'
import ProductStat from './routes/Manager/ProductStat.js'
import OrdersPage from './routes/Manager/OrdersPage.js'
import OrderDetailsPage from './routes/Manager/OrderDetaislPage.js'

function App() {
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/laptop" element={<Laptop/>}/>
        <Route path="/casepc" element={<CasePC/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/monitor" element={<Monitor/>}/>
        <Route path="/cooler" element={<Cooler/>}/>
        <Route path="/console" element={<Console/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/keyboard" element={<Keyboard/>}/>
        <Route path="/mouse" element={<Mouse/>}/>

        <Route path="/login/management/product_categories" element={<ProductCategories />} />
        <Route path="/login/management" element={<Manage />} />
        <Route path="/login/management/units" element={<Unit />} />
        <Route path="/login/management/product_list" element={<ProductList />} />
        <Route path="/login/management/product_stat" element={<ProductStat />} />
        <Route path="/login/management/product_list/order" element={<OrdersPage />} />
        <Route path="/login/management/product_list/orderdetails" element={<OrderDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App