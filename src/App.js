import React from 'react' // nạp thư viện react
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login.js'
import Homepage from './routes/homepage.js'
import Cart from './routes/cart.js'
import Introduction from './routes/Info.js'
import Test from './routes/test.js'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App