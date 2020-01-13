import React from 'react';
import './styles/Header.css'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import mainLogo from '../assets/mainLogo.png'


function Header() {
    return (
        <div className="header-container">
            
            <NavLink className="mind-matter-nav" to="/">
                <img src ={mainLogo} className="main-logo" alt="hero"/>
            </NavLink>
            <Nav />
        </div>
    )
}

export default Header