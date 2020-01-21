import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/ConsoleNav.css'

function Console() {
    return(
        <div className="console-nav-container">
            <NavLink to='/contactmsgs' className='console-navlink' activeClassName='active'>Contact Inbox</NavLink>
            <NavLink to='/curatemsgs' className='console-navlink' activeClassName='active'>Curate Inbox</NavLink>
            <NavLink to='/eventconsole' className='console-navlink' activeClassName='active'>Event Console</NavLink>
            <NavLink to='/merchconsole' className='console-navlink' activeClassName='active'>Merch Console</NavLink>

        </div>
    )
}

export default Console