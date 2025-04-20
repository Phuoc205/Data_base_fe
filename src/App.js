import React from 'react' // nạp thư viện react
import { createRoot } from 'react-dom/client' // cú pháp mới cho React 18+
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login.js'
import Homepage from './routes/homepage.js'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index.html" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)