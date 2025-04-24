import React from 'react' // nạp thư viện react
import { createRoot } from 'react-dom/client' // cú pháp mới cho React 18+
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login.js'
import Homepage from './routes/homepage.js'
import Cart from './routes/cart.js'
<<<<<<< Updated upstream
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  </BrowserRouter>
=======
import Laptop from './routes/Product/laptop.js'
import CasePC from './routes/Product/casepc.js'
import Table from './routes/Product/table.js'
import Monitor from './routes/Product/monitor.js'
import Cooler from './routes/Product/cooler.js'
import Console from './routes/Product/console.js'
import Headphones from './routes/Product/headphones.js'
import Keyboard from './routes/Product/keyboard.js'
import Mouse from './routes/Product/mouse.js'
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/laptop" element={<Laptop/>}/>
        <Route path="/casepc" element={<CasePC/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/monitor" element={<Monitor/>}/>
        <Route path="/cooler" element={<Cooler/>}/>
        <Route path="/console" element={<Console/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/keyboard" element={<Keyboard/>}/>
        <Route path="/mouse" element={<Mouse/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  )
}
export default App