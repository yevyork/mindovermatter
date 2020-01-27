import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/EventConsole.css'

class EventConsole extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            eventList: [],
            pastEventList: [],
            upcomingEventList:[]
         }
    }

    componentDidMount() {
        this.getEvents()
    }

    async getEvents() {
        const response = await axios('/events');
        
        const data = response.data;
        const dataArray = [...data]
        this.setState({
            eventList: data
        })
        
        let past_events = [];
        let upcoming_events = [];
            for(let i = 0; i < dataArray.length; i++)
                if (dataArray[i].past_event === true) {
                    past_events.push(dataArray[i])
                } else {
                    upcoming_events.push(dataArray[i])
                }
                console.log(past_events,'split', upcoming_events)
       
        this.setState({
            pastEventList: past_events,
            upcomingEventList: upcoming_events
        })
    }

    handleDelete = deletedEvent => {
        fetch(`/events/${deletedEvent.id}`, {
            method: "DELETE",
            headers: {
                Accept: 'application/json, text/plain, */*',
                "Content-Type": "application/json"
            }
        }).then(json => {
            document.location.reload(true);
            this.setState(state => {
                const event = state.eventList.filter(
                    (event, index) => event.id !== deletedEvent.id
                )
                return {
                    event
                }
            })
        }).catch(error => console.log(error))
    }


    render() { 
        const totalEvents = this.state.eventList.length
        const pastEvents = this.state.pastEventList.length
        const upcomingEvents = this.state.upcomingEventList.length
        const renderEvents = this.state.eventList.map(event => (
            <div className='console-eventlist' key={event.id}>
                <p className='event-date'>{event.date}</p>
                <img className='flyer'src={event.imgurl} alt='flyer' />
                <button className="console-button" onClick={() => this.handleDelete(event)}>DEL</button>
                <Link to={`/editevent/${event.id}`} className="console-link">Edit</Link>

            </div>
        ))
        return ( <div className=''>
            <Link className='back' to='/console'>Back</Link>
            <Link className='back' to='/AddEvent'>Add Event</Link>
            <p className='total-events'> Upcoming Events: <strong>{upcomingEvents}</strong></p>
            <p className='total-events'> Past Events: <strong>{pastEvents}</strong> </p>
            <p className='total-events'> All Events: <strong>{totalEvents}</strong> </p>
            
            {renderEvents}
        </div> );
    }
}
 
export default EventConsole;