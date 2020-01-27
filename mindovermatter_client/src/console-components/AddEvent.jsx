import React from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import EventForm from '../forms/EventForm'

class AddEvent extends React.Component {
    handleAdd = async (event, formInputs) => {
        event.preventDefault();
        await axios.post("/events", formInputs);
        this.setState({
            formInputs: {
                date: "",
                imgurl: "",
                organizer: "",
                venue:"",
                artists:"",
                supporting_artists:"",
                ticket_link:"",
                past_event: false
            }
        })
    }
    

    render() { 
        return ( 
        
        <div className='addevent-container'>
            <Link className='back'to='/eventconsole'>Back</Link>
            <br></br>
            <h3>FILL OUT TO ADD AN EVENT ↓</h3>
            <EventForm
            handleSubmit = {this.handleAdd} />
        </div> 
        );
    }
}

export default AddEvent;