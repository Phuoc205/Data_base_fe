import React from 'react'
import Header from '../components/Header/header.js'
import Content from '../components/Content/content.js'
import Footer from '../components/Footer/Footer.js'
// Tạo component App
function Homepage () {
    return (
        <div className='App'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Homepage