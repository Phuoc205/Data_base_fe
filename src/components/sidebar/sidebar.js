import React from "react";
import './sidebar.css'

function Sidebar(props) {
    return (
        <aside className="sidebar_container">
        <ul className="sidebar_item">
            <li><i className="fa fa-leaf"></i>Laptop</li>
            <li><i className="fa fa-leaf"></i>Case PC</li>
            <li><i className="fa fa-leaf"></i>Màn hình</li>
            <li><i className="fa fa-leaf"></i>Tai nghe</li>
            <li><i className="fa fa-leaf"></i>Tản nhiệt</li>
            <li><i className="fa fa-leaf"></i>Chuột</li>
            <li><i className="fa fa-leaf"></i>Bàn phím</li>
            <li><i className="fa fa-leaf"></i>Bàn ghế</li>
            <li><i className="fa fa-leaf"></i>Console</li>
        </ul>
    </aside>
    )
}

export default Sidebar