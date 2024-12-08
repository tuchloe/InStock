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
                <NavLink to='/'><img src={logo1x} alt='InStock Logo' /></NavLink>
                <div className='header__nav'>
                    <NavLink to='/warehouses' className='header__nav-link'><p>Warehouses</p></NavLink>
                    <NavLink to='/inventory' className='header__nav-link'><p>Inventory</p></NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;