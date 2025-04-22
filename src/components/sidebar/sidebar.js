import React from "react";
import './sidebar.css'

function Sidebar(props) {
    return (
        <aside className="sidebar_container">
        <ul className="sidebar_item">
            <li><a href="/laptop" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Laptop</a></li>
            <li><a href="/casepc" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Case PC</a></li>
            <li><a href="/monitor" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Màn hình</a></li>
            <li><a href="/headphone" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Tai nghe</a></li>
            <li><a href="/cooler" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Tản nhiệt</a></li>
            <li><a href="/mouse" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Chuột</a></li>
            <li><a href="/keyboard" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Bàn phím</a></li>
            <li><a href="/table" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Bàn ghế</a></li>
            <li><a href="/console" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Console</a></li>
        </ul>
    </aside>
    )
}

export default Sidebar