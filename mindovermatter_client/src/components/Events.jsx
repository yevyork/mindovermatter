import React from 'react';
import { NavLink } from 'react-router-dom'
import EventForm from '../forms/EventForm'
// import axios from 'axios'

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            pastEvents: [],
            upcomingEvents: []
         }
    }

    getUpcomingEvents = async () => {}
    getPastEvents = async () => {}

    renderEvents = () => {}


    

    render() { 
        return ( 
            <>
            <div className="event-nav-container">
            <NavLink to='#upcoming' className='nav nav-upcoming' activeClassName='active'>Upcoming</NavLink>
            <NavLink to='#past' className='nav nav-past' activeClassName=''>Past</NavLink>
            </div>
            <br></br>
            <br></br>
            Events
            </>
         );
    }
}
 
export default Events;
