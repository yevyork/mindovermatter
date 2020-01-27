import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/ContactMessages.css'

class EditEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: "",
            imgurl: "",
            organizer: "Mind/Matter",
            venue: "",
            artists: "",
            supporting_artists: "",
            ticket_link: "",
            past_event: null
        
        }
    }   


    componentDidMount() {
      this.getEventDetails()

    }

    getEventDetails=()=> {
      let eventId = this.props.match.params.id
      axios(`/events/${eventId}`)
      .then(response => {
        this.setState({ 
            id: response.data.id,
            date: response.data.date,
            imgurl: response.data.imgurl,
            organizer: response.data.organizer,
            venue: response.data.venue,
            artists: response.data.artists,
            supporting_artists: response.data.supporting_artists,
            ticket_link: response.data.ticket_link,
            past_event: response.data.past_event

      })
      
    }
      )}

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      onSubmit=(e)=> {
        const newEvent = {
          id: this.refs.id,
            date: this.refs.date,
            imgurl: this.refs.imgurl,
            organizer: this.refs.organizer,
            venue: this.refs.venue,
            artists: this.refs.artists,
            supporting_artists: this.refs.supporting_artists,
            ticket_link: this.refs.ticket_link,
            past_event: this.refs.past_event
        }
        this.handleUpdate(newEvent);
        e.preventDefault();
      } 

handleUpdate = (newEvent) => {
  axios.request({
    method: 'put',
    url:`/events/${this.state.id}`,
    data: newEvent
  }).then(response => {
    this.props.history.push('/eventconsole');
  }).catch(err => console.log(err))
} 
  

    render() { 
      console.log(this.state)
      return (
        <div className="form-container">
            <h3>Edit Event</h3>
            <Link className='back'to='/eventconsole'>Back</Link>
        <form onSubmit={this.onSubmit}>
          <label />
          <input
            placeholder="Date"
            value={this.state.date}
            name="date"
            required
            onChange={this.handleChange}
            ref='date'
          />

          <label />
          <input
            placeholder="Artwork URL"
            value={this.state.imgurl}
            name="imgurl"
            required
            onChange={this.handleChange}
            ref='imgurl'
          />

          <label />
          <input
            placeholder="Organizer"
            value={this.state.organizer}
            name="organizer"
            required
            onChange={this.handleChange}
            ref='organizer'
          />

          <label />
          <input
            placeholder="Venue"
            value={this.state.venue}
            name="venue"
            required
            onChange={this.handleChange}
            ref='venue'
          />

          <label>Separate Artists/Supporting Artists with a comma</label>
          <input
            placeholder="Artists"
            value={this.state.artists}
            name="artists"
            required
            onChange={this.handleChange}
            ref='artists'
          />

          <label />
          <input
            placeholder="Supporting Artists"
            value={this.state.supporting_artists}
            name="supporting_artists"
            required
            onChange={this.handleChange}
            ref='supporting_artists'
          />

          <label />
          <input
            placeholder="Link to buy tickets"
            value={this.state.ticket_link}
            name="ticket_link"
            required
            onChange={this.handleChange}
            ref='ticket_link'
          />

          <label>Has this event happened already?</label>
          <select
            defaultValue={this.state.past_event}
            name="past_event"
            onChange={this.handleChange}
            ref='past_event'
          >
            <option value={null} label="Choose One" />
            <option value={true} label="Yes" />
            <option value={false} label="No" />
          </select>

          <input type='submit' value='Save' />
        </form>
      </div>
        )
    }
}

export default EditEvent
