import React from "react";
import "./Form.css";

class EventForm extends React.Component {
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
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(e, {
      date: this.state.date,
      imgurl: this.state.imgurl,
      organizer: this.state.organizer,
      venue: this.state.venue,
      artists: this.state.artists,
      supporting_artists: this.state.supporting_artists,
      ticket_link: this.state.ticket_link,
      past_event: this.state.past_event
    });
    this.setState({
      date: "",
      imgurl: "",
      organizer: "Mind/Matter",
      venue: "",
      artists: "",
      supporting_artists: "",
      ticket_link: "",
      past_event: null
    });
    
  };
  render() {
    console.log(this.state)
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label />
          <input
            placeholder="Date"
            value={this.state.date}
            name="date"
            required
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Artwork URL"
            value={this.state.imgurl}
            name="imgurl"
            required
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Organizer"
            value={this.state.organizer}
            name="organizer"
            required
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Venue"
            value={this.state.venue}
            name="venue"
            required
            onChange={this.handleChange}
          />

          <label>Separate Artists/Supporting Artists with a comma</label>
          <input
            placeholder="Artists"
            value={this.state.artists}
            name="artists"
            required
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Supporting Artists"
            value={this.state.supporting_artists}
            name="supporting_artists"
            
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Link to buy tickets"
            value={this.state.ticket_link}
            name="ticket_link"
            required
            onChange={this.handleChange}
          />

          <label>Has this event happened already?</label>
          <select
            defaultValue={null}
            name="past_event"
            onChange={this.handleChange}
          >
            <option value={null} label="Choose One" />
            <option value={true} label="Yes" />
            <option value={false} label="No" />
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default EventForm;
