import React from 'react';
import './Header.scss';
import logo1x from '../../assets/Logo/InStock-Logo_1x.png'
import logo2x from '../../assets/Logo/InStock-Logo_2x.png'


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