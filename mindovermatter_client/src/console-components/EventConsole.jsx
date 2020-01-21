import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/EventConsole.css'

class EventConsole extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            eventList: []
         }
    }

    componentDidMount() {
        this.getEvents()
    }

    async getEvents() {
        const response = await axios('/events');
        const data = response.data;
        this.setState({
            eventList: data
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
        console.log(this.state.eventList)
        const totalEvents = this.state.eventList.length
        const renderEvents = this.state.eventList.map(event => (
            <div className='console-eventlist' key={event.id}>
                <p className='event-date'>{event.date}</p>
                <img className='flyer'src={event.imgurl} alt='flyer' />
                <button className="console-button" onClick={() => this.handleDelete(event)}>DEL</button>
            </div>
        ))
        return ( <div className=''>
            
            <p className='total-events'> TOTAL events: <strong>{totalEvents}</strong> </p>
            {renderEvents}
        </div> );
    }
}
 
export default EventConsole;