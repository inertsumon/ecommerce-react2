import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            
            <nav className="nav-item">
                <div> <NavLink to="/shop">AsadZon</NavLink></div>
                <div><NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink></div>
                
            </nav>
        </div>
    );
};

export default Header;