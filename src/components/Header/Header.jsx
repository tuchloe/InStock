import React from 'react';
import './Header.scss';
import logo1x from '../../assets/Logo/InStock-Logo_1x.png'
import logo2x from '../../assets/Logo/InStock-Logo_2x.png'
import { NavLink } from 'react-router-dom'

// Notes:
// Still need to implement NavLink, but for that, the react 
// router has to be finished


const Header = () => {
    return (
        <header>
            <div className='header__flex'>
                <img src={logo1x} alt="InStock Logo" />
                <div className='header__nav'>
                    <p>Warehouses</p>
                    <p>Inventory</p>
                </div>
            </div>
        </header>
    );
}

export default Header;