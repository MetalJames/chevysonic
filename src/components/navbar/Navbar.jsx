import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

const Menu = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#chevy'>Chevy Sonic 2018</a></p>
        <p><a href='#dimentions'>Dimentions</a></p>
        <p><a href='#engine'>Engine</a></p>
        <p><a href='#gallery'>Gallery?</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='chevy__navbar'>
            <div className='chevy_navbar-links'>
                <div className='chevy__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='chevy__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='chevy__navbar-sign'>
                <button type='button'>
                    <a href='https://www.chevrolet.ca/en' target='_blank' rel="noreferrer">Official Chevy</a>
                </button>
            </div>
            <div className='chevy__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='chevy__navbar-menu_container scale-up-center'>
                        <div className='chevy__navbar-menu_container-links'>
                            <Menu />
                            <div className='chevy__navbar-menu_container-links-sign'>
                                <button type='button'>
                                <a href='https://www.chevrolet.ca/en' target='_blank' rel="noreferrer">Official Chevy</a>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar