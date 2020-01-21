import React from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class AddEvent extends Component {
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
        
        <div>

        </div> 
        );
    }
}

export default AddEvent;