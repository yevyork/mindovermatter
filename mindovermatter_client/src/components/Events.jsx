import React from "react";
import { NavLink } from "react-router-dom";
// import EventForm from "../forms/EventForm";
import axios from 'axios'
import './styles/Events.css'

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      pastEvents: [],
      upcomingEvents: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios(`http://localhost:3000/events`);
      this.setState({ allEvents: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const all_events = this.state.allEvents
    const events = all_events.map((event, i) => {
        return(
        <div key={i}>
        <p className='event-text event-date'>{event.date}</p>
        <p className='event-text event-venue'>{event.venue}</p>
        <img className="flyer" src={event.imgurl} alt='flyer' />
        <p className='event-text event-organizer'>{event.organizer}</p>
        <p className='event-text event-featuring'>Lineup:</p>
        {event.artists.split(', ').map(artist=>(<p className='event-text event-artists'>{artist}</p>))}
        <p className='event-text event-supporting'>{event.supporting_artists}</p>
        <a href={event.ticket_link} target='_blank' rel="noopener noreferrer" className={event.past_event ? 'nodisplay' : 'tickets'}>TICKETS</a>
        <div className='short-line'></div>
        </div>
    )})
    return (
      <div className='event-container'>
        <div className="event-nav-container">
          <NavLink
            to="#upcoming"
            className="nav nav-upcoming"
            activeClassName="active"
          >
            Upcoming
          </NavLink>
          <NavLink to="#past" className="nav nav-past" activeClassName="">
            Past
          </NavLink>
        </div>
        <br></br>
        <br></br>
        
        <div>{events}</div>
        
      </div>
    );
  }
}

export default Events;
