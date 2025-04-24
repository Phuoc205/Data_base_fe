import React from "react";
import './sidebar.css'
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar_container">
        <ul className="sidebar_item">
            <li><Link to="/laptop" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Laptop</Link></li>
            <li><Link to="/casepc" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Case PC</Link></li>
            <li><Link to="/monitor" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Màn hình</Link></li>
            <li><Link to="/headphone" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Tai nghe</Link></li>
            <li><Link to="/cooler" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Tản nhiệt</Link></li>
            <li><Link to="/mouse" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Chuột</Link></li>
            <li><Link to="/keyboard" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Bàn phím</Link></li>
            <li><Link to="/table" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Bàn ghế</Link></li>
            <li><Link to="/console" className="sidebar-item-mini"><i className="fa fa-leaf"></i>Console</Link></li>
        </ul>
    </aside>
    )
}

export default Sidebar