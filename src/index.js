import React from 'react' // nạp thư viện react
import { createRoot } from 'react-dom/client' // cú pháp mới cho React 18+
import App from './App.js'


const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
