import React from 'react';
import './Header.css';
import logo from '../images/amazon_logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='header'>
            {/* logo */}
            <Link to='/'>
            <img className="header__logo" src={logo} alt='' /> 
            </Link>
            {/* search-box */}
            <input className='header__searchInput' type='text' />
            {/* 3 links  */}
            {/* basket icon and number*/}
        </nav>
    )
}

export default Header
