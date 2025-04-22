import React from 'react' // nạp thư viện react
import { createRoot } from 'react-dom/client' // cú pháp mới cho React 18+
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login.js'
import Homepage from './routes/homepage.js'
import Cart from './routes/cart.js'
import Content from './components/Content/content.js'
import Footer from './components/Footer/Footer.js'
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    <Content />
    <Footer />
  </BrowserRouter>
  )
}
export default App