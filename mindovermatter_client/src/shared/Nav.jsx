import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Nav.css'

function Nav() {
    return(
        <div className = "nav-main-container">
            <NavLink to='/history' className='nav nav-history' activeClassName='active'>History</NavLink>
            <NavLink to='/events' className='nav nav-events' activeClassName='active'>Events</NavLink>
            <NavLink to='/curate' className='nav nav-curate' activeClassName='active'>Curate</NavLink>
            <NavLink to='/merch' className='nav nav-merch' activeClassName='active'>Merch</NavLink>
            <NavLink to='/contact' className='nav nav-contact' activeClassName='active'>Contact</NavLink>
        </div>
    )
}

export default Nav