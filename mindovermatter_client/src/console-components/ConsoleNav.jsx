import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/ConsoleNav.css'

function ConsoleNav() {
    return(
        <div className="console-nav-container">
            <NavLink to='/contactmsgs' className='console-navlink' activeClassName='active'>Contact Inbox</NavLink>
            <NavLink to='/curatemsgs' className='console-navlink' activeClassName='active'>Curate Inbox</NavLink>

        </div>
    )
}

export default ConsoleNav